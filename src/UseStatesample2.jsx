import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseStatesample2() {

    const [num, setfirst] = useState(1)

// const sample=()=>{
//    setfirst("Aswathi") 
// }



  return (
    <div>
        <h1>my num is {num} </h1>

        <Button onClick={()=>setfirst("kavya")}>Change</Button>
    </div>
  )
}

export default UseStatesample2