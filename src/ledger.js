import React from 'react';
import './App.css';


function Ledger() {
  return (
    <div>
        <div className='expensdiv'>
            <p className ='income lighter'>Income<br /><span className ='bolder'> $1000</span></p>
            <p className ='exp lighter'>Expenses <br /><span className =' bolder'>$1000</span></p>
        </div>
    </div>
  );
}

export default Ledger;
