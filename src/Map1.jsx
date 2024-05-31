import React from 'react'

function Map1() {
    const array=[{name:"kavya",place:"knr"},{name:"niya",place:"clct"}]
  return (
    <div>
        {array.map((demo)=>{
            <h1>{demo.name} & {demo.place}</h1>

        })}
    </div>
  )
}

export default Map1