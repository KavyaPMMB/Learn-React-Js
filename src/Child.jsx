import React from 'react'

function Child({val,val2,val3}) {
  return (
    <div>
<h1>{val}</h1>
<h2>{val2}</h2>
<h3>{val3.name}  {val3.place}</h3>

    </div>
  )
}

export default Child