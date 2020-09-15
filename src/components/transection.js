import React ,{useContext} from 'react'
import {GlobalCntxt} from './globalState'


const Transection = ({entry})=>{
    const sign = entry.Amount<0? "-":"+"
   
    return(
        <li>
            <span > {entry.Discrip}</span>
            <span>{sign}${Math.abs(entry.Amount)}</span>
            <button className = 'del_btn'>X</button>
        </li>
    )
        
     
}


export default Transection