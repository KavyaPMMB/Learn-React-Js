import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function DummyApiCarousel() {
    const [product, setproduct] = useState([])
   
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((display)=>setproduct(display.data.products)
        
    )

    }, [])
    console.log(product)


    return (
        <div className='row' style={{display:"flex",justifyContent:"center"}}>
            {product.map((display)=>(


                <Card style={{ width: '18rem' ,float:'left',margin:"15px"}}>
                <Carousel>
                {display.images.map((img)=>(
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img}
                                alt="Product"
                                style={{ height: '200px' }}
                            />
                        </Carousel.Item>
                    ))}
                    
                </Carousel>
                  <Card.Body>
                    <Card.Title>{display.brand}</Card.Title>
                    <Card.Title>{display.rating}</Card.Title>
                    <Card.Text>{display.category}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
               ) )}
        </div>
    )
}


export default DummyApiCarousel
