import React, { useState, useEffect } from 'react';
import * as d3 from  'd3';
import data, { requests, latency, trafic, users }  from '../data/data';

export default function LineGraph({ objdata }) {
  
  async function LineChart() {
    
      // Generate random data for our line where x is [0,15) and y is between 0 and 100
      let lineData = []
      for(let i = 0; i < 15; i++) {
          lineData.push({x: i + 1, y: Math.round(Math.random() * 100)})
      }

      // Create our scales to map our data values(domain) to coordinate values(range)
      let xScale = d3.scaleLinear().domain([0,15]).range([0, 300])
      let yScale = d3.scaleLinear().domain([0,100]).range([300, 0]) // Since the SVG y starts at the top, we are inverting the 0 and 300.
      
      // Generate a path with D3 based on the scaled data values
      let line = d3.line()
        .x(dt => xScale(dt.x))
        .y(dt => yScale(dt.y))
      
      // Generate the x and y Axis based on these scales
      let xAxis = d3.axisBottom(xScale)
      let yAxis = d3.axisLeft(yScale)
      
      // Create the horizontal base line
      d3.select('#LineChart').selectAll('path').datum(lineData) // Bind our data to the path element
      .attr('d', d3.line().x(dt => xScale(dt.x)) // Set the path to our line function, but where x is the corresponding x
      .y(yScale(0))).attr("stroke", "blue").attr('fill', 'none') // Set the y to always be 0 and set stroke and fill color


      
      d3.select('#LineChart').selectAll('path').transition().duration(1000) // Transition the line over 1 sec
      .attr('d', line) // Set the path to our line variable (Which corresponds the actual path of the data)
      
      // Append the Axis to our LineChart svg
      d3.select('#LineChart').append("g")
      .attr("transform", "translate(0, " + 300 + ")").call(xAxis)

      d3.select('#LineChart').append("g")
      .attr("transform", "translate(0, 0)").call(yAxis)
  }

  useEffect(() => {

    var gottendata = [];
    var tm = objdata.time;

    if(objdata.data === "Requests"){
        gottendata = (tm === "M1") ? requests.M1 
                    :(tm === "H1") ? requests.H1 
                    :(tm === "D1") ? requests.D1 
                    :requests.M1;
    }else if(objdata.data === "Latency"){
        gottendata = (tm === "M1") ? latency.M1 
                    :(tm === "H1") ? latency.H1 
                    :(tm === "D1") ? latency.D1 
                    :latency.M1;
    }else if(objdata.data === "Trafic"){
        gottendata = (tm === "M1") ? trafic.M1 
                    :(tm === "H1") ? trafic.H1 
                    :(tm === "D1") ? trafic.D1 
                    :trafic.M1;
    }else if(objdata.data === "Users"){
        gottendata = (tm === "M1") ? users.M1 
                    :(tm === "H1") ? users.H1 
                    :(tm === "D1") ? users.D1 
                    :users.M1;
    }

    LineChart();
  }, []);

  return(
    <>
    <div>

{objdata.data}
;
{objdata.graph}
;
{objdata.time }
  
</div>
                  <br></br>
      <svg id="LineChart" width = {350} height = {350}><path/></svg> 
    </>
  )
  
}