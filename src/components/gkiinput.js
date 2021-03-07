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
      <form id="form" onSubmit={submitForm}>
        <label>Glucose level:</label><input type="text" className="glucoseInput" onChange={e => setGlucose(e.target.value)} />
        <br />
        <label>Keytones:</label> <input type="text" className="keytoneInput" onChange={e => setKeytones(e.target.value)} />
        <br />
        <label>Keytone Level:</label> <input type="text" className="glucoseInput" onChange={e => setKeytones(e.target.value)} />
        <br />
        <Link to={{pathname:'/profile', state:{glucose: glucose, keytones:keytones}}}><button>Submit</button></Link>
      </form>
      <hr />
    </>
  )
}

export default GKIinput
