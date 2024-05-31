import React, { useState } from 'react'

const Map11 = () => {
    const [first, setfirst] = useState([{name:"kavya",place:"knr"},{name:"nivya",place:"clct"}])
  return (
    <div>
     {first.map((display)=>
     <>
     <h1>{display.name}</h1>
     <h2>{display.place}</h2>
     </>
     )}   
    </div>
  )
}

export default Map11