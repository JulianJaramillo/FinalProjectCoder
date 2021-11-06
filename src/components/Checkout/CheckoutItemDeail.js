import React from 'react'
import { Card } from 'react-bootstrap'

export const CheckoutItemDeail = ({id, name, autor}) => {
  
    return (
      <Card className="my-3 mx-2" style={{ width: "10rem"}}>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {autor}</Card.Subtitle>
        </Card.Body>
      </Card>
    )
}
