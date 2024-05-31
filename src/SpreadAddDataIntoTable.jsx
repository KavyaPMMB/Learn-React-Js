import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


function SpreadAddDataIntoTable() {
  const [cars, setCars] = useState([{name:"BMW",color:"black"},{name:"Ford",color:"white"}])
  const ob={name:"Baleno",color:"blue"}
  const array=[{name:"Audi",color:"black"},{name:"Ferrari",color:"white"}]


  const addCar = () => {
    setCars([...cars, {...ob}])
  }
  const addCars=()=>{
    setCars([...cars, ...array])
  }
 


  return (
    <div>
       
        <table>
            <tr>
                <th>CAR</th>
                <th>COLOR</th>
            </tr>
            {cars.map((display)=>
            <tr>
                <td>{display.name}</td>
                <td>{display.color}</td>
            </tr>
             )}
        </table>  
        <Button onClick={addCar}>Add Car</Button>{' '}
        <Button onClick={addCars}>Add Cars</Button>
    </div>
  )
}


export default SpreadAddDataIntoTable


