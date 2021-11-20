import React, { useEffect } from 'react';
import * as d3 from  'd3';
import mockdata from '../data/data';


export default function BarChart({ objdata }) {

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

        drawChart();
    }

    // Set Chart parameters and Options
    function drawChart() {
        const width = 1000;
        const height = 450;

        const svg = d3.select('#BarChart')
            .html('')
            .append('svg')
            .attr('id', 'chart')
            .attr('width', width)
            .attr('height', height);

        const margin = {
            top: 60,
            bottom: 100,
            left: 80,
            right: 40
        };

        const chart = svg.append('g')
            .classed('display', true)
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom
        plot(chart, chartWidth, chartHeight);

    }

    //   Plot Bar Chart
    function plot(chart, width, height) {
        
        var data = datahold;
        var diff = Math.abs(data[0][yaxis_index] - data[1][yaxis_index]);

        // create scales!
        const xScale = d3.scaleBand()
            .domain(data.map(d => timeConverter(d[0])))
            .range([0, width]);
        const yScale = d3.scaleLinear()
            .domain([(d3.min(data, d => d[yaxis_index]) - diff), d3.max(data, d => d[yaxis_index])])
            .range([height, 0]);
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        // Define the div for the tooltip
        var div = d3.select("body").append("div")	
        .attr("class", "tooltip")				
        .style("opacity", 0);

        chart.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('x', d => (xScale(timeConverter(d[0])) + 25 ))
            .attr('y', d => yScale(d[yaxis_index]))
            .attr('height', d => (height - yScale(d[yaxis_index])))
            .attr('width', d => xScale.bandwidth())
            .style('fill', (d, i) => colorScale(i))
            .on("mouseover", function(event, d) {	
                console.log(xScale(timeConverter(d[0])));	
                console.log(d);	
                div.transition()		
                    .duration(200)		
                    .style("opacity", .9);		
                div	.html("<p>"+ timeConverter(d[0]) +" against "+ d[yaxis_index] +"</p>")	
                    .style("left",  event.clientX + "px")		
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

        chart.selectAll('.bar-label')
            .data(data)
            .enter()
            .append('text')
            .classed('bar-label', true)
            .attr('x', d => xScale(timeConverter(d[0])) + xScale.bandwidth()/2)
            .attr('dx', 0)
            .attr('y', d => yScale(d[yaxis_index]))
            .attr('dy', -6)
            .text(d => d[yaxis_index]);

        const xAxis = d3.axisBottom()
            .scale(xScale);
            
        chart.append('g')
            .classed('x axis', true)
            .attr('transform', `translate(0,${height})`)
            .call(xAxis);

        const yAxis = d3.axisLeft()
            .ticks(5)
            .scale(yScale);

        chart.append('g')
            .classed('y axis', true)
            .attr('transform', 'translate(0,0)')
            .call(yAxis);

        chart.select('.x.axis')
            .append('text')
            .attr('x',  width/2)
            .attr('y', 60)
            .attr('fill', '#000')
            .style('font-size', '20px')
            .style('text-anchor', 'middle')
            .text(tm_lable);    
            
        chart.select('.y.axis')
            .append('text')
            .attr('x', 0)
            .attr('y', 0)
            .attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
            .attr('fill', '#000')
            .style('font-size', '20px')
            .style('text-anchor', 'middle')
            .text(data_type);   
            
        const yGridlines = d3.axisLeft()
            .scale(yScale)
            .ticks(5)
            .tickSize(-width,0,0)
            .tickFormat('')
        
    }


    useEffect(() => {
        prepareData();
    }, [objdata]);
    

    return(
        <>

            <div>
                <br></br> {objdata.graph} Graph of <b>{objdata.data}</b> against <b>{objdata.time } time frame</b>
            </div><br></br>

            <div id="BarChart"></div> 
        </>
    )

  }