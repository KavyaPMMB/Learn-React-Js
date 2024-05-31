import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // Example of a function that we want to memoize
  const handleClick = () => {
    setCount(count + 1);
  };

  // useCallback usage
  const memoizedHandleClick = useCallback(handleClick, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Without useCallback */}
      {/* <button onClick={handleClick}>Increment</button> */}
      
      {/* With useCallback */}
      <button onClick={memoizedHandleClick}>Increment</button>
    </div>
  );
};

export default UseCallback;
