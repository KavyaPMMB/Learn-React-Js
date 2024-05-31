import React, { useState } from "react";

function SpreadOperator2() {
  const [first, setfirst] = useState({ name: "John",age:"24",place:"knr", salary: 40000 });
  
  
  const change = () => {
    setfirst((prevob) =>({...prevob, salary: 50000 ,age:"25"}));
  };

  return (
    <div>
      <h3>
        {first.name} {first.salary} {first.age} {first.place}
      </h3>
      <button onClick={change}>Change</button>
    </div>
  );
}

export default SpreadOperator2;
