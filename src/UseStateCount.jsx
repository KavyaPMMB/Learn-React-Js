import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


function UseStateCount() {
    const [num, setnum] = useState(0)
   
    const decrement=()=>{
        if(num<=0)
        {
            alert('NOT POSSIBLE')
        }
        else
        {
            setnum(num-1)
        }
       
    }
  return (
    <div>
        <h2>Your Number Is {num}</h2>
       
        <Button onClick={()=>setnum(num+1)}>INCREMNT</Button>
        
        <Button onClick={decrement}>DECREMNT</Button>
    </div>
  )
}


export default UseStateCount
