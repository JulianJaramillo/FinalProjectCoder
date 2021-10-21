import React, {useContext, useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { askProducts } from '../../helpers/askProducts'
import { UIContext } from '../Context/UIContext'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [allItems, setAllItems] = useState([false])
    const {loading, setLoading} = useContext(UIContext)
    const {categoryId} = useParams();

     useEffect(()=>{
        setLoading(true)
        askProducts()
        .then((res) =>{
            if (categoryId) {
              setItems(res.filter(prod=>prod.category === categoryId))
              setAllItems(false)
            }else{
              setItems(res)
              setAllItems(true)
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
        : <ItemList items={items} allItems={allItems}/>
        }
      </section>
    )
}
