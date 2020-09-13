import React from 'react';
import './App.css';

function AddTransection() {
  return (
    <div>
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

export default AddTransection;