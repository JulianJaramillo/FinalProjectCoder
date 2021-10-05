import React from 'react'
import { Item } from './Item'

export const ItemList = ({items = []}) => {
    return (
        <div className="Container">

            <h2 className="text-center"> Books and Products</h2>
            <hr/>

            <div className="row">
                {items.map((item) => <Item {...item} key={item.id}/>)}
            </div>
        </div>
    )
}
