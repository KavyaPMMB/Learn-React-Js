import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UseState6 = () => {
  // const array=[{name:"kavya",place:"knr"},{name:"sandra",place:"tsr"},{name:"surya",place:"tsr"},{name:"vyshnavi",place:"clct"}]
  const [first, setfirst] = useState([
    { name: "kavya", place: "knr" },
    { name: "sandra", place: "tsr" },
    { name: "surya", place: "tsr" },
    { name: "vyshnavi", place: "clct" },
  ]);
  console.log(first);

  return (
    <div>
      {first.map((display) => (
        <>
          <h1>{display.name}</h1>
          <p>{display.place}</p>
        </>
      ))}
    </div>
  );
};

export default UseState6;
