import React,{children, createContext,useReducer} from 'react'
import mainReducer from './mainReducer';


const Intialstate = {
    transections:[]  
}

//------------------------------------------------------------creat context  for intialstate

export  const GlobalCntxt = createContext(Intialstate)





//------------------------------------------------------------Create Context provider

export const Globalprovider = ({children})=>{
    const [state, dispatch] = useReducer(mainReducer , Intialstate)

//-------------------------------------------------------------difining a dispaatch function to add transection from stste
function add_trans(transection){
    dispatch({
        type:'ADD Tarnsection',
        payload:transection
    })

}

//-------------------------------------------------------------difining a dispaatch function to delete transection from history
function del_trans(id){
    dispatch({
        type:'Delete Tarnsection',
        payload:id
    });

}
    return(
        
        <GlobalCntxt.Provider value = {
            {
            transections: state.transections,
            add_trans,
            del_trans
            }
        }>
            {children}
        </GlobalCntxt.Provider>
    );
      
}


   