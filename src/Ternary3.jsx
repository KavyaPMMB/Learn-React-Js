import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Ternary3() {
  
  const [showText, setShowText] = useState(false);


  return (
    <div>
      
      {showText ? <h1>This is the text to show.</h1> : ""}

      <Button onClick={()=> setShowText(! showText)}>change</Button>
      
    </div>
  );
}

export default Ternary3;




