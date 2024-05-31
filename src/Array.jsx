import React from "react";
import img1 from './logo.svg'

function Array() {
  const flowers = [
    { name: "jasmine", color: "white" },
    { name: "Rose", color: "red" },
  ];
  return flowers.map((display) => (
    <div>
      <h1>
        flower name is {display.name} & {display.color} in color
      </h1>
      <img src={img1} alt="" />
    </div>
  ));
}

export default Array;
