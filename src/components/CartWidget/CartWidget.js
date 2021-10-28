import React, {useContext} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { AppContext } from '../Context/AppContext';
import './CartWidget.css'

export const CartWidget = () => {

const {calculateQuantity} = useContext(AppContext)    

    return (
        <>
         {
             calculateQuantity() === 0? <></>
             :
             <>
             <FaShoppingCart className="CartShopping" />
             <span className="mx-2">{calculateQuantity()}</span>
             </>
         } 
        </>
    )
}
