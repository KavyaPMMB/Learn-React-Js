import React, { useState } from 'react'

function Map5() {
const [first, setfirst] = useState([{name:"kavya",place:"knr"},{name:"jithin",place:"clct"},{name:"srijila",place:"clct"}])



  return (
    <div>
        {/* {first.map((display)=>
        <>
        <h1>{display.name}</h1>
        <p>{display.place}</p>
        </>
        )} */}

{first.map((display)=>{
    return(

        <h1>{display.name}</h1>
    )
})}


    </div>
  )
}

export default Map5