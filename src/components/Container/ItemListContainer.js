import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import {askProducts} from '../../helpers/askProducts'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams();

     useEffect(()=>{
        setLoading(true)
        
        askProducts()
        .then((res) =>{
            if (categoryId) {
              setItems(res.filter(prod=>prod.category === categoryId))
            }else{
              setItems(res)
            }
          })
        .catch((err => console.log(err)))
        .finally(
            ()=> {
            setLoading(false)
            console.log("The process finish")
            }
        )

     },[categoryId])

    return (
      <section className="container my-5">
        {
        loading ? <h2 className="text-center">Loading Products...</h2> 
        : <ItemList items={items}/>
        }
      </section>
    )
}
