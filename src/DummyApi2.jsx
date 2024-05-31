import axios from 'axios'
import React, { useEffect, useState } from 'react'


function DummyApi2() {
   
    const [first, setfirst] = useState([])
   
    useEffect(() => {
        
       axios.get(`https://dummyjson.com/product`).then((display)=>{
            setfirst(display.data.products)
            console.log(display.data.products);
            })
            
       
    }, [])
   
   return (
   
    <div>
        {first.map((display)=>
           
        <>
            <h2>{display.brand}</h2>
            <h6>{display.category}</h6>
            <img src={display.images[0]} alt="" />
        </>
           
        )}
    </div>
  )
}


export default DummyApi2
