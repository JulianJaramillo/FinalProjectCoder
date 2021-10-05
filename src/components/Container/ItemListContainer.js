import React, {useEffect,useState} from 'react'
import {askProducts} from '../../helpers/askProducts'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

     useEffect(()=>{
        setLoading(true)
        
        askProducts()
        .then((res) =>
            setItems(res)
        )
        .catch((err => console.log(err)))
        .finally(
            ()=> {
            setLoading(false)
            console.log("The process finish")
            }
        )

     },[])

    return (
      <section className="container my-5">
        {
        loading ? <h2 className="text-center">Loading Products...</h2> 
        : <ItemList items={items}/>
        }
      </section>
    )
}
