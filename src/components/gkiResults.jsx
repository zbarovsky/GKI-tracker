import React, {useEffect, useState } from 'react';
import {Graph} from './graph'

export const GkiResults = (props) => {

    const [output, setOutput] = useState(0)
    const [glucose, setGlucose] = useState(80)
    const [ketone, setKetone] = useState(2)
    const [explination, setExplination] = useState('')

    useEffect(() => {
        calcOutput()
        console.log('effect output', output)
        if(output <= 1) {
            setExplination("You're in the highest therapueitc levels of ketosis")
        } else if(output > 1 && output <= 3) {
            setExplination("You're in a high therapuetic level of ketosis")
        } else if (output > 3 && output <= 6) {
            setExplination("You're in a moderate level of ketosis")
        } else if (output > 6 && output <= 9) {
            setExplination("You're in a low level of ketosis")
        } else {
            setExplination("You're not in ketosis")
        }
    }, [])

    function calcOutput() {
        setOutput(parseFloat((glucose / 18) / ketone).toFixed(2))
        console.log('function output ', output)
    }



    return (
        <div>
            <p>GKI Results: {output}</p>
            <p>Explination: {explination}</p>
            <Graph  output={output} />
        </div>
    )
}