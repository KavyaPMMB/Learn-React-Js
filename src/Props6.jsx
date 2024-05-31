import React, { useState } from 'react'
import Props7 from './Props7'


function Props6() {

    // const ob={emp:"John",salary:30000}
    // const array=[{name:"James",age:37},{name:"Paul",age:39}]
    // const [first, setfirst] = useState(array)

    const [simple, setsimple] = useState("hellooo")
     const [first, setfirst] = useState("kavya")
     


   
  return (
    <div>

        <Props7 val={simple} val2={first} />
        
       
      
        
    </div>
    
  )
}


export default Props6
