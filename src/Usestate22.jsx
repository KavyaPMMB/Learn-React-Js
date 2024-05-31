import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Usestate22() {
const [name, setname] = useState("Nidhal")

const sample=()=>{
 setname("Khadheeja")   
}
  return (
    <div>
        <h1>{name}</h1>
        <Button onClick={sample}>Change</Button>
    </div>
  )
}

export default Usestate22