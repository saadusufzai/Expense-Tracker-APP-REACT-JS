import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

export default function ListHistory( { transaction }) {
   
     const {delTrans} = useContext(GlobalContext)

    let sign = transaction.ammount >0 ?'+ ' :'- '
  
    return (
        

        <li className={transaction.ammount >0 ?'green' :'red'}> 
            <button onClick={()=> delTrans(transaction.id) } className='delete'>X</button>
              <span>{transaction.description}</span>
    <span>{sign}{Math.abs(transaction.ammount)} Rs</span>
        </li>
        
    )
}
