import React, { useState } from "react";

function ChangeTextColor() {
  const [color1, setcolor1] = useState("Black");
  // const textstyle={color:color1}
  return (
    <div>
      <center>
        <h4 style={{ color: color1 }}>TEXT COLOR IS {color1}</h4>
        <button
          style={{
            backgroundColor: "red",
            marginRight: "1rem",
            borderRadius: "20px",
            width: "10%",
          }}
          onClick={() => setcolor1("RED")}
        >
          RED
        </button>
        <button
          style={{
            backgroundColor: "green",
            marginRight: "1rem",
            borderRadius: "20px",
            width: "10%",
          }}
          onClick={() => setcolor1("GREEN")}
        >
          GREEN
        </button>
        <button
          style={{
            backgroundColor: "pink",
            marginRight: "1rem",
            borderRadius: "20px",
            width: "10%",
          }}
          onClick={() => setcolor1("PINK")}
        >
          PINK
        </button>
        <button
          style={{
            backgroundColor: "blue",
            marginRight: "1rem",
            borderRadius: "20px",
            width: "10%",
          }}
          onClick={() => setcolor1("BLUE")}
        >
          BLUE
        </button>
      </center>
    </div>
  );
}

export default ChangeTextColor;

