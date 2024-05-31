import React, { useState } from 'react'

function List() {
    // const cars=[{name:"BMW",color:"black"},{name:"Ford",color:"white"}]
    const [first, setfirst] = useState([{name:"BMW",color:"black"},{name:"Ford",color:"white"}])

  return (
    <div>
        
        <ol>
        {first.map((dis)=>
            <li>{dis.name} {dis.color}</li>
            )}
        </ol>
        
        
        
        
       
    </div>
  )
}

export default List