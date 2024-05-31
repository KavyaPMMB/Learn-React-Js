import React, { useState } from "react";

function UseState2() 
{
  const [num, setnum] = useState(0);
  const incr = () => {
    setnum(num + 2);
  };

  return (
    <div>
      <h1>my num is {num}</h1>
      <button onClick={incr}>Increment</button>
      <br />
      <br />
      <button onClick={() => setnum(num - 1)}>Decrement</button>
    </div>
  );
}

export default UseState2;
