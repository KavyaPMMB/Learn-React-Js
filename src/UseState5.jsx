import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const UseState5 = () => {

const [first, setfirst] = useState("explore")


return (
    <div>
        <h1>{first} your life</h1>
        <Button onClick={()=>setfirst("Enjoy")}>change</Button>

       

        
    </div>
  )
}

export default UseState5