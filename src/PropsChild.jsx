import React from 'react'

function PropsChild({val1,val2}) {


  return (
    <div>
      
<h1>{val2}</h1>
       
       
        {val1.map((display)=>
        <>
        <h1>{display.name}</h1>
        <h1>{display.place}</h1>
        </>

        )}
        
    </div>
  )
}

export default PropsChild