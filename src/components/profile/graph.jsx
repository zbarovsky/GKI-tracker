import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

export const Graph = (props) => {

    const d3Container = useRef(null);

    let mockData = [0,2,4,5,1]

    useEffect(() => {
        if(d3Container.current) {
            const svg = d3.select(d3Container.current)

            const update = svg
                .append('g')
                .selectAll('text')
                .data(mockData)

            update.enter()
                .append('text')
                .attr('x', (d,i) => i * 25)
                .attr('y', 40)
                .style('font-size', 24)
                .text((d) => d)
            update 
                .attr('x', (d,i) => i * 40)
                .text((d) => d)
            update.exit()
                .remove()
        }
    }, [mockData, d3Container.current])

    return (
        <div>
            <h1>History</h1>
            <svg className='d3-component' ref={d3Container}/>
        </div>
    )
}