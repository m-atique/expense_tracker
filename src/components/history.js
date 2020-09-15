import React, { useContext } from 'react';
import {GlobalCntxt} from './globalState';
import Transection from './transection'


function History (){
   const {transections} = useContext(GlobalCntxt)
 
    return(
        <div className = "history">
            <h3 className ="history_head">History</h3>
            <hr />
            <div className ='list'>
                <ul>
                    {transections.map(transections_object => (
                        <Transection  key = {transections_object.id} entry = {transections_object} />   
                    )
                    )}
                </ul>
            
            </div>
            <hr />
        </div>
    )
}


export default History


// {/* <ul> 
// {/* -------------Assigning transections array value to the list */}
//    {transection.map((trans_obj,index)=>{
//                 return(
//                         <li>
//                         <span > {trans_obj.Discrip}</span>
//                         <span>{trans_obj.Amount}</span>
//                         <button className = 'del_btn'>X</button>
//                     </li>

//                     )
//                  })} 
// {/* ------------------------------------------------------------------*/}                
//                 </ul> */}