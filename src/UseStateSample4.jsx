import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseStateSample4() {

    const [first, setfirst] = useState(1)
    const [Name, setname] = useState({name:"kavya",place:"knr"})


    // function sample()
    // {

    //   setfirst(3)
    // }

  return (
    <>
              <h1>{Name.name} {Name.place}</h1>
            <h1>my number is {first}</h1>
            {/* <Button onClick={sample}>Change</Button> */}

            <button onClick={()=>setfirst(3)}>change</button>

    </>
  )
}

export default UseStateSample4