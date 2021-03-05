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

            // svg.append("text")
            //     .attr('class', 'x label')
            //     .attr('text-anchor', 'end')
            //     .attr('x', canvasWidth / 2)
            //     .attr('y', canvasHeight)
            //     .text('Time')
            
        }
    }, [mockData, d3Container.current])

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