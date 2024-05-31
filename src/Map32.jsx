import React, { useState } from 'react'

function Map32() {
    const [array, setarray] = useState([{name:"kavya",place:"knr"},{name:"Nivya",place:"clct"},{name:"Niya",place:"knr"}])
  return (
    <div>
       {array.map((display)=>
       <>
       <h1>{display.name}</h1>
       <p>{display.place}</p>
       </>
       
       )}     



    </div>
  )
}

export default Map32