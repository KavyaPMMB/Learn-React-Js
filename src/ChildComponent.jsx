import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h3>Child Component</h3>
      {/* Use the passed function as an event handler */}
      <button onClick={props.buttonClickHandler}>
        Click me in the child component
      </button>
    </div>
  );
};

export default ChildComponent;
