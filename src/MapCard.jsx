import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



function MapCard() {
  const flowers = [
    {
      name: "Lotus",
      color: "Violet",
      Image:
        "https://images.pexels.com/photos/4600168/pexels-photo-4600168.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Rose",
      color: "Red",
      Image:
        "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sunflower",
      color: "yellow",
      Image:
        "https://images.pexels.com/photos/1253661/pexels-photo-1253661.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Jasmine",
      color: "White",
      Image:
        "https://images.pexels.com/photos/12778134/pexels-photo-12778134.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];


  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      {flowers.map((display) => (
        <Card style={{ width: "18rem", marginRight: "1rem" }}>
          
          <Card.Img
            style={{ height: "15rem" }}
            variant="top"
            src={display.Image}
          />
          <Card.Body>
            <Card.Title>{display.name}</Card.Title>
            <Card.Text>{display.color}</Card.Text>
            <Button variant="primary">Explore</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MapCard;
