import React, { useContext } from 'react';
// import {transCntxt} from '../trans_Cntxt'

function History (){
    // let transections = useContext(transCntxt)
    return(
        <div className = "history">
            <h3 className ="history_head">History</h3>
            <hr />
            <div className ='list'>
                <ul> 
{/* -------------Assigning transections array value to the list */}
                    {/* {transections.map((trans_obj,index)=>{ */}
                        return(
                        <li>
                        {/* <span > {trans_obj.desc}</span>
                        <span>{trans_obj.amount}</span> */}
                        <button className = 'del_btn'>X</button>
                    </li>

                    )
                {/* })} */}
{/* ------------------------------------------------------------------*/}                
                </ul>
            </div>
            <hr />
        </div>
    )
}


export default History