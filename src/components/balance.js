import React , {useContext}from 'react'
import {GlobalCntxt} from './globalState'


function Balance (){
    const {transections} = useContext(GlobalCntxt)
    const Amounts = transections.map(transections_obj =>transections_obj.Amount)
    const balance = Amounts.reduce((total,amount) =>(total += amount),0)


    return(
        <div className='balance'>
            <span className = 'bolder'>Current Balance</span>
            <span className='bolder'>$ {balance}
            </span>
        </div>

    )
}


export default Balance