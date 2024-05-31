import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [first, setfirst] = useState("kavya")
    const [num,setnum] = useState(10)
    const [ob, setob] = useState({name:"niya",place:"clct"})
  return (
    <div>
        <Child val={first} val2={num} val3={ob}/>
    </div>
  )
}

export default Parent