import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseStatehook1() {

    const [first, setfirst] = useState({name:"kavya",place:"knr"})
    const [name, setname] = useState("kavya")

const [num, setnum] = useState(1)


const sample=()=>{
   
    setnum(num+1)

 }



  return (
    <>
       <h1>my num is {num}</h1>
       <Button onClick={sample}>change</Button> 
        </>

    
  )
}

export default UseStatehook1