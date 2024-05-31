import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Usestate12() {
const [first, setfirst] = useState("enjoy")

const change=()=>{
    setfirst("explore")
}


  return (
    <div>
        <h1>{first}</h1>
        <Button onClick={change}>change</Button>
    </div>
  )
}

export default Usestate12