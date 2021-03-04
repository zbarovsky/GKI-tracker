import React, {useState} from 'react'

const GKIinput = () => {
  const [glucose, setGlucose] = useState("")
  const [keytones, setKeytones] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()

  }

  return (
    <>
      <form onSubmit={submitForm}>
        Glucose Level: <input type="text" className="glucoseInput" onChange={e => setGlucose(e.target.value)} />
        <br />
        Keytones: <input type="text" className="keytoneInput" onChange={e => setKeytones(e.target.value)} />
        <br />
        <button>Submit</button>
      </form>
      <hr />
    </>
  )
}

export default GKIinput
