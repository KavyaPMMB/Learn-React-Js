import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Usesatesample() {
const [first, setfirst] = useState("Arjun")

const sample=()=>{
    setfirst("Abhishek")
}




  return (
    <div>
        <h1>{first}</h1>
        <Button onClick={sample}>change</Button>
    </div>
  )
}

export default Usesatesample