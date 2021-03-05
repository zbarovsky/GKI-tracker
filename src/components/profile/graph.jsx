import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import {useLocation} from 'react-router-dom'

export const Graph = (props) => {

    const d3Container = useRef(null);
    let data = []
    data.push(props.output)
    //console.log(data)

    //const [time, setTime] = useState([])
    // useEffect(() => {
    //     let t = new Date().toLocaleTimeString()
    //     setTime(t)
    // }, [])
    

    useEffect(() => {
        if(d3Container.current) {
            
            const canvasHeight = 400
            const canvasWidth = 600

            const x = d3.scaleTime().domain([Date.now() - 3 * 60 * 60 * 1000, Date.now() + 12 * 60 * 60 * 1000])
                .range([0, 800])
        
            const y = d3.scaleLinear()
                .domain([0, 10])
                .range([400, 0])

            const svg = d3.select(d3Container.current)
                .append("svg")
                .attr('width', canvasWidth)
                .attr('height', canvasHeight)
            
            svg.selectAll("circle")
                .data(data).enter()
                    .append("circle")
                    .attr("fill", "none")
                    .attr("stroke", "#0036E6")
                    .attr("r", 5)
                    .attr('cx', (datapoint, iteration) => iteration + 20)
                    .attr("cy", (datapoint) => y(datapoint) - 15)

            
            svg.selectAll("text")
                .data(data).enter()
                    .append("text")
                    .attr('x', (datapoint, i) => i * 45 + 30)
                    .attr('y', (datapoint, i) => y(datapoint) - 20)
                    .text(datapoint => datapoint)

            svg.append("g")
                .attr("transform", "translate(20,380)")
                .call(d3.axisBottom(x))

            svg.append('g')
                .attr("transform", "translate(20, -20)")
                .call(d3.axisLeft(y))
        }
    }, [props.output, d3Container.current])

    return (
        <div>
            <div className='graph'>
                <p className='yText'>Glucose Ketone Index (GKI)</p>
                <svg className='d3-component D3graph' ref={d3Container}/>
            </div>
                <p className='xtext'>Time</p>
        </div>
    )
}