import React, { useState } from 'react'
import ChildProp from './ChildProp'

function Parentprop() {
    const [first, setfirst] = useState("hellooo world")
    const [name, setname] = useState("kavya")
  return (
    <div>
        <h1>hiiiii</h1>
        <ChildProp val={first} val2={name} val3={setname}/>


    </div>
  )
}

export default Parentprop