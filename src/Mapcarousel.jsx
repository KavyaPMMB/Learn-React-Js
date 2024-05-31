import React from "react";
import { Carousel } from "react-bootstrap";

function Mapcarousel() {
  const slides = [
    {label:" First slide",
      image:
        "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {label:" Second slide",
      image:
        "https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div>
      <Carousel>
        {slides.map((display) => 
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={display.image}
              alt="First slide"
            />
             <Carousel.Caption>
              <h3>{display.label}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
}

export default Mapcarousel;
