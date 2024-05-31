import React, { useState } from "react";

function Arraymap1() {
  const [first, setfirst] = useState([
    { name: "kavya", place: "knr" },
    { name: "Navya", place: "knr" },
    { name: "Nivya", place: "clct" },
  ]);
  return (
    <div>
 <table border={1}>

<tr>
    <th>name</th>
    <th>place</th>
</tr>


{first.map((dis)=>
<tr>
    <td>{dis.name}</td>
    <td>{dis.place}</td>
</tr>
)}



 </table>
    </div>
  );
}

export default Arraymap1;
