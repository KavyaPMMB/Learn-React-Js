import React, { useState } from 'react'
import Child1 from './Child1'

function Parent1() {
    const [name, setname] = useState("demo")
    const [first, setfirst] = useState([{name:"kavya",place:"knr"},{name:"Niya",place:"clct"}])
  return (
    <div>
        <Child1 val={name} val2={first}/>
    </div>
  )
}

export default Parent1