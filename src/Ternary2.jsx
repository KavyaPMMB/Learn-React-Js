import React, { useState } from 'react'
import MapCard from './MapCard'




function Ternary2() {


    const [hide,sethide] = useState(false)
   
    const click=()=>{
        sethide(! hide)
    }
 
    return (


    <div>
        {hide? <MapCard/> :""}
        <button onClick={click}>{hide ? "hide":"show"}</button>
    </div>
  )
}


export default Ternary2






