import React, { useEffect, useState } from 'react'

function UseEffect4() {
const [first, setfirst] = useState(1)

useEffect(() => {

alert("hellooo")

}, [first])


const change=()=>
{
setfirst(2)
}

  return (
    <div>

       <h1>{first}</h1> 
   
    
    <button onClick={change} >click</button>
    </div>
  )
}

export default UseEffect4