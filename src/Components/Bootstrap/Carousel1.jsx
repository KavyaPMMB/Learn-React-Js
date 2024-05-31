import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carousel1() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" text="First slide" style={{height:"50%",width:"100%"}}  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' text="Second slide"  style={{height:"50%",width:"100%"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://media.istockphoto.com/id/917806594/photo/silhouettes-of-sea-piers-during-sunset-in-calicut.jpg?s=612x612&w=0&k=20&c=ndIu0AkHZrRaOFUEi_2kNDSXrnfp3GPYJkgpR9Z6Y1Y=' text="Third slide" style={{height:"50%",width:"100%"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>







    </div>
  )
}

export default Carousel1