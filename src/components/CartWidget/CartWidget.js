import React from 'react'
import ShoppingCart from './ShoppinCart.png'
import CartWidgetCSS from './CartWidget.css'

export const CartWidget = () => {
    return (
        <>
            <a href="#"><img src={ShoppingCart} className="CartShopping"></img></a>
        </>
    )
}
