import React from 'react';
import { useParams } from 'react-router-dom';


const Useparams = () => {
 
 
  const { username } = useParams();
 


  return (
    <div>
      <h1>User Profile</h1>
      <h2>Username: {username}</h2>
    </div>
  );
};


export default Useparams;
