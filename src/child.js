import React from 'react';
import './App.css';

function Child() {
  return (
    <div className = 'outerbox'>
        <h1 className = 'Main_title'>Expense<span className = 'Main_title2'>Tracker</span></h1>
        <div className='balance'>
            <span className = 'bolder'>Current Balance</span>
            <span>5000</span>
        </div>
        <div className='expensdiv'>
            <p className ='income lighter'>Income<br /><span className ='bolder'> $1000</span></p>
            <p className ='exp lighter'>Expenses <br /><span className =' bolder'>$1000</span></p>
        </div>
        <div className = "history">
            <h3 className ="history_head">History</h3>
            <hr />
            <div className ='list'>
                <ul> 
                    <li>
                        <span > Cash</span>
                        <span>500</span>
                    </li>
                    <li>
                        <span>Cash</span>
                        <span>500</span>
                    </li>
                    <li>
                        <span>Cash</span>
                        <span>500</span>
                    </li>
                    <li>
                        <span>Cash</span>
                        <span>500</span>
                    </li>
                    <li>
                        <span>Cash</span>
                        <span>500</span>
                    </li>
                    <li>
                        <span>Cash</span>
                        <span>500</span>
                    </li>
                    <li>
                        <span>Cash</span>
                        <span>500</span>
                    </li>
                </ul>
            </div>
            <hr />
        </div>
        <form className ='input_form'>
            <label>
                <input placeholder ="Enter Description" required></input>
            </label>
            <br />
            <label>
                <input placeholder ="Enter Amount" required></input>
            </label>
            <br />
            <button className ='buttons'>ADD</button>
        </form>


    </div>
  );
}

export default Child;
