import React, {useEffect, useState } from 'react';
import {Graph} from './graph'

export const GkiResults = (props) => {
    //console.log(props.location.passed)

    const [output, setOutput] = useState(0)

    useEffect(() => {
        calcOutput()
    }, [])

    function calcOutput() {
        setOutput(parseFloat((props.location.passed.glucose / 18) / props.location.passed.keytone).toFixed(1))
        console.log('function output ', output)
    }



    return (
        <div>
            <p>Current GKI: {output}</p>
        </div>
    )
}