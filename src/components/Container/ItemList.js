import React from 'react'
import { Item } from './Item'

export const ItemList = ({ items = [], allItems} ) => {
    return (
        <div className="container">
            {
                items.some((prod) => prod.category === "Printed" && !allItems) ?
                <h2 className="text-center"> Printed Books</h2>:
                items.some((prod) => prod.category === "Digital" && !allItems)?
                <h2 className="text-center"> Digital Books</h2>:
                <h2 className="text-center"> Books and Products</h2>
            }
            <hr />
            <div className="d-flex justify-content-center">
                <div className="row">
                    {items.map((item) => <Item {...item} key={item.id} />)}
                </div>
            </div>
        </div>
    )
}
