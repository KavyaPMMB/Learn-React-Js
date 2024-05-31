import React, { useState } from 'react'


function SpreadSimple2() {
    const [car, setcar] = useState({
        name:"BALENO",color:"NEXA BLUE"
    })
    const change=()=>{
        setcar({...car,color:"Delta Blue"})
    }
  return (
    <div>
        <h1> MY CAR IS {car.name} , {car.color} IN COLOR</h1>
        <button onClick={change}>CHANGE</button>
    </div>
  )
}


export default SpreadSimple2
