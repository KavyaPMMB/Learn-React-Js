import React from 'react'

function Map2() {
    const array=[{name:"Mehfil",place:"clct"},{name:"sandra",place:"tsr"}]
  return (
    <div>
        {array.map((display)=>
        <h1>{display.name} & {display.place}</h1>
        )}
    </div>
  )
}

export default Map2