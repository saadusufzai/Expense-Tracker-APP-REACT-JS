export default (state, action) =>{
    switch(action.type) {
        case 'Detete_trans':
            return {
                ...state,
                tranactions: state.tranactions.filter(transaction => transaction.id !== action.payload)
              }

        case 'Add_trans':
            return{
                ...state,
                tranactions: [action.payload, ...state.tranactions]
            }
            default: return state
            }
}
