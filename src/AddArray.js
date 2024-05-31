import React, { useState } from 'react'

function AddArray() {
  const [cars, setCars] = useState([{name:"BMW",color:"black"},{name:"Ford",color:"white"}])
  const array=[{name:"Audi",color:"black"},{name:"Ferrari",color:"white"}]

  const addCar = () => {
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
        <button onClick={addCar}>Add Cars</button>
    </div>
  )
}

export default AddArray
