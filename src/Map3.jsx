import React, { useState } from 'react'

function Map3() {
const [first, setfirst] = useState([{name:"kavya",place:"knr"},{name:"Arjun",place:"clct"},{name:"amal",place:"knr"}])

  return (
    <div>
{first.map((display)=>
<>
<h1>{display.name}</h1>
<p>{display.place}</p>
</>
)}

    </div>
  )
}

export default Map3