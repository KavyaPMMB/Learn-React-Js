import React, { useState } from "react";


function UseState1() {


  const [first, setfirst] = useState("Nivya")
 
  // const sample=()=>{
  //   setfirst("Nivya")
  // }
 
 
  return (
    <div>
      <h1>my name is {first}</h1>
      <button onClick={()=>setfirst("Kavya")}>Change</button>
      {/* <button onClick={sample}>Change</button> */}
   
    </div>
  );
}


export default UseState1;
