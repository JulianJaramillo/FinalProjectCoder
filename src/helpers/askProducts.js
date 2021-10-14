import {stock} from '../data/stock'

export const askProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },1000)
    })
}