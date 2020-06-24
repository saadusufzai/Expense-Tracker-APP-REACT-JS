import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
export default function ExpenseDisplay() {

    const {tranactions} = useContext(GlobalContext)
    const ammount = tranactions.map((e)=>e.ammount)
    console.log(ammount)
    const income = ammount.filter((e)=>e>0).reduce((acc,item)=> (acc +=item),0)
    const expense = ammount.filter((e)=>e<0).reduce((acc,item)=> (acc+=item),0)
    
    
    return (
        <div className='expense-display'>
        <div>
            <h3>INCOME</h3>
            <span className='income'>{income}</span>
        </div>
        <span className='divider'>|</span>
        <div>
            <h3>EXPENSE</h3>
    <span className='expense'>{Math.abs(expense)}</span>
        </div>
        </div>
    )
}
