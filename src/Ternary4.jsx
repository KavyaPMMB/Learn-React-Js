import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Ternary4.css";

function Ternary4() {
  const [showText, setShowText] = useState(false);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <div className={showText ? "black-bg" : "white-bg"}>
      {showText ? <h1>Dark Mode</h1> : <h1>Light Mode</h1>}

      <Button  onClick={handleToggle}>
        {showText ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
}

export default Ternary4;
