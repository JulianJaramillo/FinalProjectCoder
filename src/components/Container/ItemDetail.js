import { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ id, name, autor, price, img, category, synopsis, stock }) => {

    const { goBack, push } = useHistory();
    const [quantity, setQuantity] = useState(0);
    const { addToCart, isInCart } = useContext(AppContext);

    const handleAddItem = () => {
        const newItem = {
            id,
            name,
            autor,
            price,
            img,
            category,
            quantity
        }
        if (quantity > 0) {
            addToCart(newItem);
        }
    }

    return (
        <>
            <div className="MainContainer">
                <div className="ProductPreview">
                    <img src={img} alt={name}></img>
                </div>
                <div className="ProductData">
                    <h1 className="ProductTitle">{name}</h1>
                    <h3>{autor}</h3>
                    <p className="ProductDescription">{synopsis}</p>
                    <h5> $ {price} </h5>
                    { isInCart(id) 
                    ? <Link to="/cart" className="btn btn-success">Finish My Purchase!</Link>
                    :
                    <>
                        <ItemCount quantity={quantity} setQuantity={setQuantity} limit={stock} />
                        <button className="btn btn-success"
                            onClick={handleAddItem} >Add to Cart
                        </button>
                    </>
                    } 
                    <hr />
                    <button className="btn btn-outline-info" onClick={() => goBack()} >Back</button>
                    <button className="btn btn-outline-primary" onClick={() => push("/")}>Home</button>
                </div>
            </div>
        </>
    )
}
