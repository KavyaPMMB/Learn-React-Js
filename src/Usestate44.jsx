import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Usestate44() {

    const [first, setfirst] = useState("kavya")

    const sample=()=>{
    setfirst("hellooo")
}


  return (
    <div>
            <h1> my name is {first}</h1>
            <Button onClick={sample}>change</Button>


    </div>
  )
}

export default Usestate44