import React ,{useContext} from 'react'
import '.././App.css'
import {GlobalContext} from '../context/GlobalContext'

export default function Balance() {
const {tranactions} = useContext(GlobalContext)


const ammount = tranactions.map(amm => amm.ammount)
const total = ammount.reduce((acc, item) => (acc += item), 0)

    return (
        <div className='line-height'>
            <h2>Total Balance</h2> 
            <h1>Rs. {total}</h1>   
        </div>
    )
}
