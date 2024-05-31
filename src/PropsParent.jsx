import React, { useState } from 'react'
import PropsChild, {} from './PropsChild'
import Home2 from './Price'


function PropsParent() {
    const [first, setfirst] = useState("kavya")
    const [num,setnum] = useState(1)
    const [array, setarray] = useState([{name:"kavya",place:"knr"},{name:"neena",place:"clct"}])
  return (
    <div>

       
        <PropsChild val1={array} val2={first}/>
        
        
        
        

    </div>
  )
}

export default PropsParent