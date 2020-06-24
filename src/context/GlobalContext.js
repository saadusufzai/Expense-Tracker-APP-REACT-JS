import React, {createContext, useReducer} from 'react'
import GlobalReducer from './GlobalReducer'

const initialState = {
    tranactions:[] 
}

export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({ children }) =>{

    let [state, dispatch] = useReducer(GlobalReducer, initialState)


    function addTrans(transaction){
        dispatch({
            type:'Add_trans',
            payload: transaction
        })
    }

    function delTrans(id){
        dispatch({
            type:'Detete_trans',
            payload: id
        })
    }

    return(
        <GlobalContext.Provider value={{
            tranactions: state.tranactions,
            addTrans,
            delTrans,

        }}>
            {children}
        </GlobalContext.Provider>
    )

}