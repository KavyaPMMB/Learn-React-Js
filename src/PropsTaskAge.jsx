import React from 'react'
import PropTaskAge2 from './PropTaskAge2';


function PropTaskAge() {
    const userAge = 16;


  return (
    <div>
         <h1>Welcome to Age Checker</h1>
         <PropTaskAge2 age={userAge}/>
    </div>
  )
}


export default PropTaskAge
