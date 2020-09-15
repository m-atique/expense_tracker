import React,{useContext} from 'react';
import {GlobalCntxt} from './globalState'



function Ledger() {


  const {transections} = useContext(GlobalCntxt)
  const Amounts = transections.map(transections_obj =>transections_obj.Amount)
  
   

  // -------------------------------------------------------------calculating Incomes
    const incoming = Amounts.filter(income => income>0)
    const total_income = incoming.reduce((total,amount) =>(total += amount),0)
 

  // -------------------------------------------------------------calculating Incomes
  const expenses = Amounts.filter(expense => expense<0)
  const total_expenses = expenses.reduce((total,amount) =>(total += amount),0)

    


  return (
    <div>
        <div className='expensdiv'>
{/*----------------------------------------------------------income----------------------  */}
            <p className ='income lighter'>Income<br />
  <span className ='bolder'>+${Math.abs(total_income)}</span></p>


            <p className ='exp lighter'>Expenses <br /><span className =' bolder'>-${Math.abs(total_expenses)}</span></p>
        </div>
    </div>
  );
}

export default Ledger;
