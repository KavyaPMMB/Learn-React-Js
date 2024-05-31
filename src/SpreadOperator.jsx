import React, { useState } from 'react'

function SpreadOperator() {
    const [car, setcar] = useState({
        name:"Audi",color:"Black"
    })
    
    const change=()=>{
        setcar((prevob)=>{
            return{...prevob,color:"White"}
        })
    }
  return (
    <div>
        <h1> MY CAR IS  {car.name} , {car.color} IN COLOR</h1>
        <button onClick={change}>CHANGE</button>
    </div>
  )
}

export default SpreadOperator