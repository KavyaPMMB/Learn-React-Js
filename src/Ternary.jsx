import React, { useState } from 'react'
import Mapcarousel from './Mapcarousel'

function Ternary() {
    const [hide,sethide] = useState(false)
    const click=()=>{
        sethide(! hide)
    }
  return (
    <div>
        {hide ? <Mapcarousel/>:""}
        <button onClick={click}>change</button>



        
    </div>
  )
}

export default Ternary




