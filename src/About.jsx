import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { newcontext } from './ContextProvider'


const About = () => {
   
    const display=useContext(newcontext)
    const {first,setfirst,name,setname,car,setcar}=display
    
   
    // const handleClick = () => {
     
    //   const updatedArray = car.map(obj => {
    //     if (obj.name === 'BMW') {
    //       return { ...obj, color: 'yellow' };
    //     }
    //     return obj;
    //   });
    //   setcar(updatedArray)
    // }
    
   
  return (
   
   
    <div>
      <>
      {car.map((abc)=>
        <h1>{abc.name}  {abc.color}</h1>
      )}
      </>
        <h1>{first}</h1>
        <Button onClick={()=>setfirst("Explore")}>Change</Button>
       
        {/* {car.map((abc)=>{
        return(
        <h1>{abc.name}  {abc.color}</h1>
        )})} */}




        <h3>{name.Name}</h3>
        <h3>{name.Age}</h3>
       
       
        {/* <button onClick={handleClick}>Update Item</button> */}
      <ul>
        {car.map((item, index) => (
          <li key={index}>
            {item.name}: {item.color}
          </li>
        ))}
      </ul>


    </div>
 
)}


export default About
