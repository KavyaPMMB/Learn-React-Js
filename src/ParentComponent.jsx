import React from 'react';
import ChildComponent from './ChildComponent';


const ParentComponent = () => {
  // Define a function to be passed as a prop
  const handleButtonClick = () => {
    console.log("Button clicked in parent component!");
  };

  return (
    <div>
      <h2>Parent Component</h2>
      {/* Pass the function as a prop to the child component */}
      <ChildComponent buttonClickHandler={handleButtonClick} />
    </div>
  );
};

export default ParentComponent;
