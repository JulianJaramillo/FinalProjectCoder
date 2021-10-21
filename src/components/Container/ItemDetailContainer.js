import React, {useContext, useEffect,useState} from 'react'
import { useParams } from 'react-router'
import {askProducts} from '../../helpers/askProducts'
import { UIContext } from '../Context/UIContext'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const {loading, setLoading} = useContext(UIContext)
    const {itemId} = useParams()

      useEffect(()=>{
         setLoading(true)
         
         askProducts()
         .then((res) =>{
            setItem( res.find(prod => prod.id === Number(itemId)))
           })
         .catch((err => console.log(err)))
         .finally(
             ()=> {
             setLoading(false)
             console.log("The process finish")
             }
         )
 
      },[itemId])

    return (
        <div className="container">
           {
               loading ? <h2>Loading....</h2>
                : <ItemDetail {...item}/>
           } 
        </div>
    )
}
