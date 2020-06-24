import React, {useContext} from 'react'
import ListHistory from './ListHistory'

import { GlobalContext } from '../context/GlobalContext'


export const History= ()=> {
    const {tranactions} = useContext(GlobalContext)
    console.log(tranactions)
    return (
        <div>
            <h2>History</h2>
            <hr/>
            <br/>
            
            <ul className='histroy-box'>
                {tranactions.map(transaction => (<ListHistory key={transaction.id} transaction={transaction}/>))}
             </ul>
        </div>
    )
}
