import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'


function UseEffectHook() {

  const [first, setfirst] = useState("kavya")
 
  useEffect(() => {
   
    alert("hiiiii")

  }, [first])
  







return (
  
    <div>

<h1>my name is {first}</h1>
<Button onClick={()=>setfirst("nivya")}>change</Button>
        
    </div>
  )
}


export default UseEffectHook
