import React, { useState } from 'react'

function Objusestate() {
    const [first, setfirst] = useState([{name:"kavya",place:"knr",qualification:"MSC"},{name:"nivya",place:"clct",qualification:"MSC"},{name:"Navya",place:"knr",qualification:"MSC"}])
  return (
    <div>

        {first.map((display)=>
        <>
        <h1>{display.place}</h1>
        <h1>{display.name}</h1>
        </>

        
        )}

    </div>
  )
}

export default Objusestate