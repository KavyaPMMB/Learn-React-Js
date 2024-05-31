
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Usestatehook() {
  
  const [num, setnum] = useState("kavya")
  const [count, setcount] = useState(1)
 
 
  const change=()=>{
  setnum("Niya")

 }
 
 
 
 
 
  return (
    <div>

      <h1>{count}</h1>
      <Button onClick={()=>setcount(count+1)}>increment</Button>""
      <Button onClick={()=>setcount(count-1)}>decrement</Button>


          <h1>my name is {num}</h1>
          <Button onClick={change}>change</Button>

          {/* <Button onClick={()=>setnum("maya")}>click me</Button>  */}







    </div>
  )
}

export default Usestatehook