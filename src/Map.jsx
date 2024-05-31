import React, { useState } from "react";

function Map() {
  
  const [first, setfirst] = useState([
    { name: "kavya", place: "knr" },
    { name: "niya", place: "clct" },
  ])

  const [array, setarray] = useState([
    { name: "manu", place: "knr" },
    { name: "meena", place: "clct" },
  ])
  
  return (
    <div>

      {first.map((display)=>
      <>
      <h1>{display.name}</h1>
      
      <h2>{display.place}</h2>
      </>
      
      )}

   
   



   
   
   
   
   
   {array.map((item)=>{
    return(

<>
<h1>{item.name}</h1>
<p>{item.place}</p>
</>


    )


   })}



    </div>
  );
}

export default Map;
