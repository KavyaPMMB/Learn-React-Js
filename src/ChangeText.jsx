import React, { useState } from 'react'

function ChangeText() {
    const [text, settext] = useState("Black")
  return (
    <div>
        <h3> TEXT COLOR IS {text}</h3>
        <button style={{backgroundColor:"red"}} onClick={()=>settext("RED")}>RED</button>
        <button style={{backgroundColor:"yellow"}} onClick={()=>settext("YELLOW")}>YELLOW</button>
        <button style={{backgroundColor:"Green"}} onClick={()=>settext("GREEN")}>GREEN</button>
        <button style={{backgroundColor:"brown"}} onClick={()=>settext("BROWN")}>BROWN</button>
    </div>
  )
}

export default ChangeText