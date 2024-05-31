import React from 'react'
import { Button } from 'react-bootstrap'

function ChildProp({val,val2}) {

  return (
    <div>
        <h1>{val}</h1>
        <h2>{val2}</h2>
        
    </div>
  )
}

export default ChildProp