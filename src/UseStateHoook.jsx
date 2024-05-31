import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseStateHoook() {

const [name,setname] = useState({Name:"kavya",place:"knr"})


// const sample=()=>{

//     setname("hiiiiii")
// }




  return (
    <div>
            <h1>{name.Name} {name.place}</h1>

            {/* <Button onClick={()=>setname('hiiiiii')}>change</Button> */}

            <Button onClick={sample}>change</Button>
    </div>
  )
}

export default UseStateHoook