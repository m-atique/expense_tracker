import React ,{useContext} from 'react'
import {GlobalCntxt} from './globalState'


const Transection = ({entry})=>{
   
    return(
        <li>
            <span > {entry.Discrip}</span>
            <span>{entry.Amount}</span>
            <button className = 'del_btn'>X</button>
        </li>
    )
        
     
}


export default Transection