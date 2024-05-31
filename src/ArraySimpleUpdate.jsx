import React, { useState } from 'react';


const ArraySimpleUpdate = () => {
 
  const [myArray, setMyArray] = useState(['item1', 'item2', 'item3']);


  const handleClick = () => {
 
    const updatedArray = [...myArray];
    updatedArray[1] = 'updated item';

   setMyArray(updatedArray);
  };


  return (
    <div>
      <button onClick={handleClick}>Update Item</button>
      
      <ul>
        {myArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>


    </div>
  )
}


export default ArraySimpleUpdate;
