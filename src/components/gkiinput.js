import React, {useState} from 'react'
import {Route, Link} from 'react-router-dom';
import { Profile } from './profile/profile';

const GKIinput = () => {
  const [glucose, setGlucose] = useState("")
  const [keytones, setKeytones] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()

  }

  console.log(glucose)
  console.log(keytones)

  return (
    <>
      <form onSubmit={submitForm}>
        Glucose Level: <input type="text" className="glucoseInput" onChange={e => setGlucose(e.target.value)} />
        <br />
        Keyton Level: <input type="text" className="glucoseInput" onChange={e => setKeytones(e.target.value)} />
        <br />
      </form>
      <hr />
    </>
  )
}

export default GKIinput
