import React from 'react'

function Object1() {
    const array=[{name:"kavya",place:"knr"},{name:"navya",place:"knr"},{name:"niya",place:"knr"}]

  

  return (
    <div>
    {array.map((display)=>

        <h1>{display.name} {display.place}</h1>

    )}


    </div>
  )
}

export default Object1