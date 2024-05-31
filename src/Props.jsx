import React, { useState } from 'react'
import Props2 from './Props2'

function Props() {

    const a="hai"
    // const [first, setfirst] = useState([{name:"Sara",salary:"500000"},{name:"Riya",salary:"600000"},{name:"Niya",salary:"500000"}])
  return (
    <div>
        <Props2 val={a} />

    </div>
  )
}

export default Props