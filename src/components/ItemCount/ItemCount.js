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
            className="btn btn-primary quantity">
                -
            </button>
            <span className="mx-2">{quantity}</span>
            <button 
            onClick={handleAdd}
            className="btn btn-primary quantity">
                +
            </button>
        </div>
    )
}
