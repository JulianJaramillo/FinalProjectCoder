import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import {askProducts} from '../../helpers/askProducts'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
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
        <div>
           {
               loading ? <h2>Loading....</h2>
                : <ItemDetail {...item}/>
           } 
        </div>
    )
}
