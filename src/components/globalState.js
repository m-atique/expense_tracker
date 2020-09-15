import React,{Children, createContext,useReducer} from 'react'
import mainReducer from './mainReducer';


const Intialstate = {
    transections:[
                {id:1,Discrip:'Income',Amount:9000},
                {id:2,Discrip:'book',Amount:-500},
                {id:3,Discrip:'Camera',Amount:-400}

    ]  
}

//------------------------------------------------------------creat context  for intialstate
export  const GlobalCntxt = createContext(Intialstate)

//------------------------------------------------------------Create Context provider

export const Globalprovider = ({children})=>{
    const [state, dispatch] = useReducer(mainReducer , Intialstate)
    return(
        
        <GlobalCntxt.Provider value = {
            {
            transections: state.transections
            }
        }>
            {children}
        </GlobalCntxt.Provider>
    );
      
}


   