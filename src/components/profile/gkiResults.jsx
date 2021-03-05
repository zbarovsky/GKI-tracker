import React, {useEffect, useState } from 'react';
import {Graph} from './graph'
import {useLocation} from 'react-router-dom';


export const GkiResults = (props) => {
    //console.log(props)
    let data = useLocation()
    //console.log('data ', data.state.glucose, data.state.keytones)
    const [output, setOutput] = useState(0)

    useEffect(() => {
        calcOutput()
    }, [])

    function calcOutput() {
        if(data.state.glucose !== undefined && data.state.keytones !== undefined) {
             return setOutput(parseFloat((data.state.glucose / 18) / data.state.keytones).toFixed(1))
        }
        return setOutput(0)
    }



    return (
        <div>
            <p>Current GKI: {output}</p>
            <Graph output={output}/>
        </div>
    )
}