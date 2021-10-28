import React from 'react'

export const ItemCount = ( {quantity,setQuantity,limit} ) => {

    const handleSubtract = ()=>{
        if(quantity>0){
            setQuantity( quantity-1) 
        }
    }

    const handleAdd = ()=>{
        if(quantity< limit){
            setQuantity( quantity + 1 )
        }
    }

    return (
        <div>
            <button 
            onClick={handleSubtract}
            disabled={quantity === 0}
            className={`btn ${quantity === 0 ? "btn-danger": "btn-primary"}`}>
                -
            </button>
            <span className="mx-2">{quantity}</span>
            <button 
            onClick={handleAdd}
            disabled={quantity === limit}
            className={`btn ${quantity === limit ? "btn-danger": "btn-primary"}`}>
                +
            </button>
        </div>
    )
}
