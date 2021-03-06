import React, {useState , useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

export default function AddTransaction() {
    const [description, setDescription] = useState('')
    const [ammount, setAmmount] = useState(0)
   
    const {addTrans} = useContext(GlobalContext)

    const onSubmit = e => {
       e.preventDefault();

       if(ammount===0 || ammount.isNaN()){
           alert('Enter Proper Value in Ammount')
           return false;
       }

       const newTransaction = {
           id: Math.abs(Math.random()*123),
           description,
           ammount: +ammount
       }
       addTrans(newTransaction)
       
    } 

    return (
        <div>
            <h2>Add New Transaction</h2>
            <br/>
            <hr/>

            <form onSubmit={onSubmit}>
                <div>
                <label>Description</label> <br/>
                <input value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Enter Description" type="text"/>
                </div>
                <div>
                <label>Ammount <br/> <span>(Negative = expense , Positive = income)</span> </label> <br/>
                <input value={ammount} onChange={(e)=> setAmmount(e.target.value)} placeholder="Enter Ammount" type="number"/>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>

        </div>
    )
}
