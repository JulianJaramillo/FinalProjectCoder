import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import './ItemDetail.css';

export const ItemDetail = ({ id, name, autor, price, img, category,synopsis }) => {

    const { goBack, push } = useHistory()

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
                    <>
                        <Link to="/cart"><button className="btn btn-primary">Buy!</button></Link>
                        <button className="btn btn-success" onClick={() => goBack()} >Back</button>
                        <button className="btn btn-dark" onClick={() => push("/")}>Home</button>
                    </>  
                </div>
            </div>
        </>
    )
}
