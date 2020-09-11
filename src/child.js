import React from 'react';
import './App.css';

function Child() {
  return (
    <div className = 'outerbox'>
        <h2>Expense Tracker</h2>
        <div className='balance'>
            <h3>Current Balance<br />$1000</h3>
        </div>
        <div className='expensdiv'>
            <p>Income<br /><span>$1000</span></p>
            <p>Income<br /><span>$1000</span></p>
        </div>
        <div className = "history">
            <h3>History</h3>
            <hr />
            <div className ='list'>
                <ul> 
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
        </div>
        <form className ='add_input'>
            <label>
                <input placeholder ="Enter Description" required></input>
            </label>
            <br />
            <label>
                <input placeholder ="Enter Description" required></input>
            </label>
            <br />
            <button>ADD</button>
            <button>Update</button>
        </form>


    </div>
  );
}

export default Child;
