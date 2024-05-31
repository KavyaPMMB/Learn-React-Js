import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseStatehook() {

    const [first, setfirst] = useState("kavya")


const sample=()=>{
    
    setfirst("hiii")
}


  return (
    <div>

    <h1>{first}</h1>
    
    {/* <Button onClick={()=>setfirst("celesta")}>change</Button> */}

    <Button onClick={sample}>change</Button>


    </div>
  )
}

export default UseStatehook