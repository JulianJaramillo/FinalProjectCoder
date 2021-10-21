import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { AppContext } from '../Context/AppContext'
import { BsFillTrashFill } from 'react-icons/bs'

export const CartDetail = ({ id, name, autor, price, img, category, quantity }) => {

  const { removeItemCart } = useContext(AppContext)

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img height="500px" width="450px" variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> {autor}</Card.Subtitle>
        <Card.Text>  $ {price}  </Card.Text>
        <Card.Text>Quantity {quantity}  </Card.Text>
      </Card.Body>
      <button className="btn btn-danger"
        onClick={() => removeItemCart(id)}>
        <BsFillTrashFill />
      </button>
      <hr />
    </Card>
  )
}
