import React from 'react'
import { Button, Card } from 'react-bootstrap'
import img1 from './logo.svg'


function Card1() {










  return (
    <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>








    </div>
  )
}

export default Card1