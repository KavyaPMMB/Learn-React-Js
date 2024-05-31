import React, { useState } from "react";

const Array = () => {
  const [first, setfirst] = useState([
    { name: "kavya", place: "knr" },
    { name: "adith", place: "clct" },
    { name: "jishnu", place: "clct" },
    { name: "shahana", place: "clct" },
  ]);
  return (
    <div>
     
     {/* {first.map((display)=>
     <>
     
     <h1>{display.name}</h1>
     </>
     
     )} */}


{first.map((item,ind)=>{

return(
<>
<p>{ind + 1}</p>
<h1>{item.name}</h1>
</>


)})}



    </div>
  );
};

export default Array;
