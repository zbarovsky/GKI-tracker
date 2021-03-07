import * as d3 from 'd3';
import { useEffect, useRef} from 'react';

export const Graph = (props) => {

    const d3Container = useRef(null);
    let data = []
    data.push(props.output)
    //console.log(data)

    useEffect(() => {
        if(d3Container.current) {
            
            const canvasHeight = 400
            const canvasWidth = 600
            const margin = {top: 0, bottom: 20, left: 30, right: 20};
            const strokeWidth = 1.5;

            const svg = d3.select(d3Container.current)
                .append("svg")
                .attr("viewBox", `0 0 600 400`)
                .attr('preserveAspectRatio', 'xMinYMin')

            const width = 600 - margin.left - margin.right - (strokeWidth * 2)
            const height = 400 - margin.top - margin.bottom
            
            const xScale = d3.scaleTime()
                .domain([Date.now() - 2 * 60 * 60 * 1000, Date.now() + 6 * 60 * 60 * 1000])
                .range([0, width])
        
            const yScale = d3.scaleLinear()
                .domain([0, 10])
                .range([height, 0])

            const area = d3.area()
                .x(dataPoint => xScale(Date.now()))
                .y0(height)
                .y1(dataPoint => yScale(data))
            
            svg.selectAll("circle")
                .data(data).enter()
                    .append("circle")
                    .attr("fill", "none")
                    .attr("stroke", "#0036E6")
                    .attr("r", 5)
                    .attr('cx', (datapoint, iteration) => xScale(Date.now()) + 15)
                    .attr("cy", (datapoint) => yScale(datapoint) + 10)

            
            // svg.selectAll("text")
            //     .data(data).enter()
            //         .append("text")
            //         .attr('x', (datapoint, i) => xScale(Date.now()))
            //         .attr('y', (datapoint, i) => yScale(datapoint))
            //         .text(datapoint => datapoint)

            svg.append("g")
                .attr("transform", "translate(20,380)")
                .call(d3.axisBottom(xScale))

            svg.append('g')
                .attr("transform", "translate(20, 0)")
                .call(d3.axisLeft(yScale))
        }
    }, [data, d3Container.current])

    return (
        <div className='graph'>
            <div className='yAxis'>
                <p className='yText'>Glucose Ketone Index (GKI)</p>
                <svg className='d3-component' ref={d3Container}/>
            </div>
                <p className='xText'>Time</p>
        </div>
    )
}