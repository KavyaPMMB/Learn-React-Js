 import React, { useEffect, useState } from 'react'
 
 function UseEffectHook2() {
  const [first, setfirst] = useState("hiiii")

  useEffect(() => {
  
  alert('hloooooo')

}, [first])


   return (
     <div>

      <h1>{first}</h1>
      <button onClick={()=>setfirst('hloooo')}>change</button>
     </div>
   )
 }
 
 export default UseEffectHook2