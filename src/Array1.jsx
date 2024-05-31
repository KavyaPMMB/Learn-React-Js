import React from 'react'

function Array1() {
    
     const array=[{name:"Abhishek",place:"malappuram"},{name:"Shinu",place:"malappuram"}]
     console.log(array);

  return (
    <div>
       
    {array.map((display)=>
        <>
      <h1>{display.name}</h1>
      <h2>{display.place}</h2>
      
      </>
       )}


    </div>
        )}
export default Array1