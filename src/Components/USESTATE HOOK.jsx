import React, { useState } from "react";
import { Button } from "react-bootstrap";

function USESTATE_HOOK() {
  const array = [1, 2, 3];
  const arrayob = [
    { name: "kavya", place: "knr" },
    { name: "navya", place: "knr" },
  ];

const [val, setval] = useState(true)
  const [first, setfirst] = useState("kavya");

  const [ob, setob] = useState({ name: "kavya", place: "knr" });

  const change = () => {
    setfirst("Nivya");
  };

  return (
    <div>
        <h1>{val.toString()}</h1>
      <h1>my name is {first}</h1>
      <Button onClick={change}>change</Button>

      <p>{ob.name}</p>
    </div>
  );
}

export default USESTATE_HOOK;
