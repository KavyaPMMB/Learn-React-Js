import React from 'react'


function PropTaskAge2({age}) {
  return (
    <div>
         {age >= 18 ? <p>You are an adult</p> : <p>You are a minor</p>}
    </div>
  )
}


export default PropTaskAge2
