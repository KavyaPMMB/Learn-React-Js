import React, { useState } from 'react'

function Object() {
    const [first, setfirst] = useState({name:"kavya",place:"knr"})
  return (
    <div>
        <h1>{first.name}</h1>
        <h2>{first.place}</h2>
    </div>
  )
}

export default Object