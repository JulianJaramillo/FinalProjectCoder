import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { CartDetail } from './CartDetail'

export const CartScreen = () => {

    const { cartItems, emptyCart, calculateTotal } = useContext(AppContext)

    return (
        <div className="container">
            {
                cartItems.length === 0
                    ? <>
                        <div className="HomeView">
                            <header className="HomeView-header">
                                <h1>No Products Added</h1>
                                <Link to="/products/" className="btn btn-success">Go shopping</Link>
                            </header>
                        </div>
                    </> :
                    <>
                        <h2 className="text-center">Purchase Summary</h2>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <div className="row">
                                {cartItems.map((cartItem) => <CartDetail {...cartItem} key={cartItem.id} />)}
                            </div>
                        </div>
                        <hr />
                        <h3 className="my-3">Total Price : $ {calculateTotal()}</h3>
                        <Link to="/checkout"className="btn btn-primary">
                            Buy!
                        </Link>
                        <button
                            style={{ width: 110, textAlign: 'justify' }}
                            className="btn btn-danger"
                            onClick={emptyCart}>Empty Cart
                        </button>

                    </>
            }
        </div>
    )
}
