import React ,{useContext} from 'react'
import {GlobalCntxt} from './globalState'


const Transection = ({entry})=>{
const sign = entry.Amount<0? "-":"+"
const {del_trans} = useContext(GlobalCntxt)
   
    return(
        <li>
            
            <span > {entry.Descrip}</span>
            <span>{sign}${Math.abs(entry.Amount)}</span>
            <button className = 'del_btn' onClick = {()=> del_trans(entry.id)}>X</button>
        </li>
    )
        
     
}


export default Transection