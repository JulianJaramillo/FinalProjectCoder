import React, {createContext, useState } from 'react'

export const AppContext = createContext()

export const ContextProvider =({children}) => {

    const [cartItems, setCartItem] = useState([])

    const addToCart = (item) =>{
      setCartItem([...cartItems, item])
    }
  
    const removeItemCart =(itemId) =>{
      const newCartItem = cartItems.filter((prod) => prod.id !== itemId)
      setCartItem(newCartItem)
    }
  
    const calculateQuantity = () => {
      return cartItems.reduce((acc,prod) => acc + prod.quantity,0)
    }

    const calculateTotal = () => {
      return cartItems.reduce((acc,prod) => acc + prod.quantity * prod.price,0)
    }

    const isInCart = (itemId) => {
      return cartItems.some((prod) => prod.id === itemId)
    }
  
    const emptyCart = () =>{
      setCartItem([])
    }

    return(
        <AppContext.Provider value={{
            cartItems,
            addToCart,
            removeItemCart,
            calculateQuantity,
            emptyCart,
            isInCart,
            calculateTotal
        }}>
           {children}
        </AppContext.Provider>
    )
}