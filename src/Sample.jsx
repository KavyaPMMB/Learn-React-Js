import React, { useState } from 'react'

function Sample() {
    const [first, setfirst] = useState("Nihala")

    const [obj,setobj] = useState({name:"surya",place:"tsr"})
    
    const [Array, setArray] = useState([{name:"kavya",place:"knr"},{name:"navya",place:"knr"},{name:"nivya",place:"knr"}])
  return (
    <div>
        <h1>{first}</h1>
        <h2>{obj.name} {obj.place}</h2>

        {Array.map((demo)=>
        <h1>{demo.name} {demo.place}</h1>
        )}
    </div>
  )
}

export default Sample