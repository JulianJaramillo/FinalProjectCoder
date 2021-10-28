import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './Loader.css'

export const Loader = () => {
    return (
        <div className="loader">
            <div>
            <Spinner animation="border" variant="primary" size="sm"/>
            <Spinner animation="border"/>
            <Spinner animation="grow" variant="primary"  size="sm"/>
            <Spinner animation="grow" variant="primary"/>
            
            </div>
        <h2 className="text-center">Loading Products...</h2> 
        </div>
    )
}
