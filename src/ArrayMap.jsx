import React from 'react'

function ArrayMap() {
    const emp=[{name:"James",salary:50000},{name:"John",salary:40000}]
  return (
    emp.map((display)=>
    <div>
        <h2>{display.name} {display.salary} </h2>
    </div>
  ))
}

export default ArrayMap