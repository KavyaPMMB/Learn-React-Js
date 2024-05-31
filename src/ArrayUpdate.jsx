import React, { useState } from 'react';

const ArrayUpdate = () => {
  const [myArray, setMyArray] = useState([
    { key: 'name', value: 'John' },
    { key: 'age', value: 25 },
    { key: 'location', value: 'New York' }
  ]);


  const handleClick = () => {
    // Find the object with key 'name' and update its value
    const updatedArray = myArray.map(obj => {
      if (obj.key === 'name') {
        return { ...obj, value: 'Jane' };
      }
      return obj;
    });

 // Update the state with the new array
    setMyArray(updatedArray);
  };

 return (
    <div>
      <button onClick={handleClick}>Update Item</button>
      <ul>
        {myArray.map((item) => (
          <li>
            {item.key}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ArrayUpdate;


