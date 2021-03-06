import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

export const Graph = (props) => {

    const d3Container = useRef(null);

    let mockData = [0,2,4,5,1,6]

    useEffect(() => {
        if(d3Container.current) {
            
            const canvasHeight = 400
            const canvasWidth = 600
            const scale = 20

            const svg = d3.select(d3Container.current)
                .append("svg")
                .attr('width', canvasWidth)
                .attr('height', canvasHeight)
            
            svg.selectAll("circle")
                .data(mockData).enter()
                    .append("circle")
                    .attr("fill", "none")
                    .attr("stroke", "#0036E6")
                    .attr("r", 5)
                    .attr('cx', (datapoint, iteration) => iteration * 45)
                    .attr("cy", (datapoint) => canvasHeight - datapoint * scale)

            
            svg.selectAll("text")
                .data(mockData).enter()
                    .append("text")
                    .attr('x', (datapoint, i) => i * 45 + 10)
                    .attr('y', (datapoint, i) => canvasHeight - datapoint * scale - 10)
                    .text(datapoint => datapoint)
            
        }
    }, [mockData, d3Container.current])

    return (
        <div>
            <h1>History</h1>
            <svg className='d3-component' ref={d3Container}/>
        </div>
    )
}