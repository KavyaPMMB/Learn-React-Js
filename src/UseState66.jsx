import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseState66() {
    const [first, setfirst] = useState("kavya")
    const sample=()=>{
       setfirst("Chaithanya") 
    }
  return (
    <div>
        <h1>{first}</h1>
        <Button onClick={sample}>change</Button>
    </div>
  )
}

export default UseState66