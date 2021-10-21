import React, {useContext} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { AppContext } from '../Context/AppContext';
import './CartWidget.css'

export const CartWidget = () => {

const {calculateQuantity} = useContext(AppContext)    

    return (
        <>
         <FaShoppingCart className="CartShopping"/>
         {
             calculateQuantity() === 0? <></>
             :<span className="mx-2">{calculateQuantity()}</span>
         } 
        </>
    )
}
