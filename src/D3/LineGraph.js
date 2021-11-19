import React, { useState, useEffect } from 'react';
import * as d3 from  'd3';
import mockdata from '../data/data';

export default function LineGraph({ objdata }) {
  
  
  var datahold = mockdata.M1;
  var yaxis_index = 1;
  var data_type = objdata.data;
  var tm = objdata.time;
  var tm_lable = tm;


  async function LineChart() {

      var data = datahold;

      // Generate random data for our line where x is [0,15) and y is between 0 and 100
      let lineData = []
      for(let i = 0; i < 15; i++) {
          lineData.push({x: i + 1, y: Math.round(Math.random() * 100)})
      }

      const width = 800;
      const height = 300;

      // Create our scales to map our data values(domain) to coordinate values(range)
      let xScale = d3.scaleBand()
        .domain(data.map(d => d[0]))
        .range([0, width]);
        
      let yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[yaxis_index])])
        .range([height, 0]);

      // Generate a path with D3 based on the scaled data values
      let line = d3.line()
        .x(dt => xScale(dt[0]))
        .y(dt => yScale(dt[yaxis_index]))
      
      // Generate the x and y Axis based on these scales
      let xAxis = d3.axisBottom(xScale)
      let yAxis = d3.axisLeft(yScale)

      d3.select('#LineChart').selectAll("g").remove()
      
      // Create the horizontal base line
      d3.select('#LineChart').selectAll('path').datum(data) // Bind our data to the path element
      .attr('d', d3.line().x(dt => xScale(dt[0])) // Set the path to our line function, but where x is the corresponding x
      .y(yScale(0))).attr("stroke", "blue").attr('fill', 'none') // Set the y to always be 0 and set stroke and fill color
      .style('font-size', '20px')
      

      
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


  function initCall() {
    

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

  useEffect(() => {


    initCall();
    
  }, [objdata]);

  return(
    <>
      <div>
        {objdata.data};
        {objdata.graph};
        {objdata.time }
      </div><br></br>
      
      <div class="linecontainer"><svg id="LineChart" width = {350} height = {350}><path/></svg> </div>
      
    </>
  )
  
}