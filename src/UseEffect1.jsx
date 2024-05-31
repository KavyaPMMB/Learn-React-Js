import React, { useEffect, useState } from 'react'

function UseEffect1() {

  const [first, setfirst] = useState(1)


  useEffect(() => {

    alert("hiiiiii")
  
    }, [first])

  
   
    
    
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>setfirst(2)}>change</button>


        
    </div>
  )
}

export default UseEffect1