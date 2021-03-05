import React, {useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';


export const GkiResults = (props) => {
    //console.log(props)
    let data = useLocation()
    console.log('data ', data.state.glucose, data.state.keytones)
    const [output, setOutput] = useState(0)

    useEffect(() => {
        calcOutput()
    }, [])

    function calcOutput() {
        setOutput(parseFloat((data.state.glucose / 18) / data.state.keytones).toFixed(1))
        console.log('function output ', output)
    }



    return (
        <div>
            <p>Current GKI: {output}</p>
        </div>
    )
}