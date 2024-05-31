import React,{ useState } from 'react'
import { Button } from 'react-bootstrap'

function UseState() {

  const [name, setname] = useState("kavya")
  const [count, setcount] = useState(1)

  
 
  return (
    <div>
    <h1>my name is {name}</h1>
    {/* <button onClick={change}>change</button> */}

    <button onClick={()=>setname("manu")}>change</button>
 

  <h2>count : {count}</h2>
  <button>Increment</button>
  
    </div>
  )
}

export default UseState