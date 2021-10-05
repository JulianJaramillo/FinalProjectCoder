import React from 'react'
import { Card } from 'react-bootstrap'

export const Item = ({id, name, autor, price, img}) => {
    return (
      <Card style={{ width: "22rem"}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {autor}</Card.Subtitle>
          <Card.Text> {price}  </Card.Text>
          <Card.Link href="#">Buy!</Card.Link>
        </Card.Body>
      </Card>
    )
}
