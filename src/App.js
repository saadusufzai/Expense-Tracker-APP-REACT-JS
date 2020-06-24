import React from 'react'
import Header from './componenets/Header'
import Balance from './componenets/Balance'
import ExpenseDisplay from './componenets/ExpenseDisplay'
import {History} from './componenets/History'
import AddTransaction from './componenets/AddTransaction'
import './App.css'
import { GlobalProvider } from './context/GlobalContext'



export default function App (){

return(
    <GlobalProvider>
    <div className="container">
      
            <Header />
            <Balance />
            <ExpenseDisplay/>
            <History/>
            <AddTransaction/>
    </div>
    </GlobalProvider>
)

}
