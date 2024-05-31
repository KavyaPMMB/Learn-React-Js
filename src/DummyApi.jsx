import axios, {} from 'axios'
import React from 'react'



function DummyApi() {
 
    axios.get('https://dummyjson.com/products').then((display)=>{
    //  console.log(display);
       console.log(display.data.products);
    })

  return (
    <div>
     
    </div>
  )
}


export default DummyApi;
