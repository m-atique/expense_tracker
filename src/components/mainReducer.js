export default (state, action)=>{
    switch(action.type){
        case 'ADD Tarnsection':
            return{
                ...state,
                transections:[action.payload,...state.transections]
            }
            case 'Delete Tarnsection':
                return{
                    ...state,
                    transections:state.transections
                    .filter(entry => entry.id !== action.payload)
                    
                }

           
        default:
            return state;
    }
}