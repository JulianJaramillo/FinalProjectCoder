import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Item = ({id, name, autor, price, img, category}) => {
  
    return (
      <Card style={{ width: "22rem"}}>
        <Card.Img height="500px" width="450px" variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {autor}</Card.Subtitle>
          <Card.Text>  $ {price}  </Card.Text>
          <Card.Text> {category}  </Card.Text>
          <Card.Link as={Link} to={`/detail/${id}`}>
            <button type="button" style={{marginTop: 15}} className="btn btn-primary">I Want it!</button>
            </Card.Link>
        </Card.Body>
      </Card>
    )
}
