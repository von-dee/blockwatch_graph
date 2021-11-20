import React, { useEffect } from 'react';
import * as d3 from  'd3';
import mockdata from '../data/data';

export default function LineGraph({ objdata }) {
  
  var datahold = mockdata.M1;
  var yaxis_index = 1;
  var data_type = objdata.data;
  var tm = objdata.time;
  var tm_lable = tm;


  // Prepares data corresponding to user's selected options
  function prepareData() {
    

    yaxis_index = (data_type === "Requests") ? 1 
        :(data_type === "Latency") ? 5
        :(data_type === "Trafic") ? 7
        :(data_type === "Users") ? 8
        :1;


    datahold = (tm === "M1") ? mockdata.M1 
        :(tm === "H1") ? mockdata.H1 
        :(tm === "D") ? mockdata.D
        :mockdata.M1;

    tm_lable = (tm === "M1") ? 'Minute Time Frame' 
        :(tm === "H1") ? 'Hourly Time Frame' 
        :(tm === "D") ? 'Daily Time Frame'  
        :'Minute Time Frame';

        
    LineChart();
  }


  //   Plot Line Chart
  async function LineChart() {

      var data = datahold;
      var diff = Math.abs(data[0][yaxis_index] - data[1][yaxis_index]);


      // Generate random data for our line where x is [0,15) and y is between 0 and 100
      let lineData = []
      for(let i = 0; i < 15; i++) {
          lineData.push({x: i + 1, y: Math.round(Math.random() * 100)})
      }

      const width = 1000;
      const height = 300;

      // Create our scales to map our data values(domain) to coordinate values(range)
      let xScale = d3.scaleBand()
        .domain(data.map(d => timeConverter(d[0])))
        .range([0, width]);
        
      let yScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[yaxis_index]) - diff, d3.max(data, d => d[yaxis_index])])
        .range([height, 0]);

      // Generate a path with D3 based on the scaled data values
      let line = d3.line()
        .x(dt => (xScale(timeConverter(dt[0])) + 63))
        .y(dt => yScale(dt[yaxis_index]))
      
      // Generate the x and y Axis based on these scales
      let xAxis = d3.axisBottom(xScale)
      let yAxis = d3.axisLeft(yScale)

      d3.select('#LineChart').selectAll("g").remove()
      
      // Create the horizontal base line
      d3.select('#LineChart').selectAll('path').datum(data) // Bind our data to the path element
      .attr('d', d3.line().x(dt => (xScale(timeConverter(dt[0])) + 63)) // Set the path to our line function, but where x is the corresponding x
      .y(yScale(0))).attr("stroke", "blue").attr('fill', 'none') // Set the y to always be 0 and set stroke and fill color
      .style('font-size', '20px')
      
      // Define the div for the tooltip
      var div = d3.select("body").append("div")	
      .attr("class", "tooltip")				
      .style("opacity", 0);
      
      d3.select('#LineChart').selectAll("circle").remove()
      // Add the scatterplot
      d3.select('#LineChart').selectAll("dot")	
      .data(data)			
      .enter().append("circle")								
      .attr("r", 5)		
      .attr("cx", function(dt) { return xScale(timeConverter(dt[0])) + 63 ; })		 
      .attr("cy", function(dt) { return yScale(dt[yaxis_index]); })		
      .on("mouseover", function(event, dt) {
          console.log(event);
          div.transition()		
              .duration(200)		
              .style("opacity", .9);		
          div	.html(timeConverter(dt[0]) + "<br/> by <br/>"  + dt[yaxis_index])	
              .style("left", event.clientX + "px")		
              .style("top", event.clientY + "px");	
          })					
      .on("mouseout", function(d) {		
          div.transition()		
              .duration(500)		
              .style("opacity", 0);	
      });

      function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }


      d3.select('#LineChart').selectAll('path').transition().duration(1000) // Transition the line over 1 sec
      .attr('d', line) // Set the path to our line variable (Which corresponds the actual path of the data)
      
      // Append the Axis to our LineChart svg
      d3.select('#LineChart').append("g")
      .classed('x axis', true)
      .attr("transform", "translate(0, 300)").call(xAxis)

      d3.select('#LineChart').append("g")
      .classed('y axis', true)
      .attr("transform", "translate(0, 0)").call(yAxis)

      d3.select('#LineChart').select('.x.axis')
        .append('text')
        .attr('x',  width/2)
        .attr('y', 60)
        .attr('fill', '#000')
        .style('font-size', '20px')
        .style('text-anchor', 'middle')
        .text(tm_lable);    
        
      d3.select('#LineChart').select('.y.axis')
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
        .attr('fill', '#000')
        .style('font-size', '20px')
        .style('text-anchor', 'middle')
        .text(data_type);  
  }


  useEffect(() => {
    prepareData();
  }, [objdata]);


  return(
    <>
      <div>
        <br></br> {objdata.graph} Graph of <b>{objdata.data}</b> against <b>{objdata.time } time frame</b>
      </div><br></br>
      
      <div class="linecontainer"><svg id="LineChart" width = {350} height = {350}><path/></svg> </div>
      
    </>
  )
  

}