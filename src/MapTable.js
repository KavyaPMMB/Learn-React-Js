import React from 'react'

function MapTable() {
    const cars=[{name:"BMW",color:"black"},{name:"Ford",color:"white"}]
    const ob={name:"Baleno",color:"blue"}
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
       
    </div>
  )
}

export default MapTable