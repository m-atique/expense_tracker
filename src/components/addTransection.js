import React,{useContext, useState} from 'react';
import {GlobalCntxt} from './globalState'


function AddTransection() {
  const [Descrip, setDescrip] = useState('')
  const [Amount, setAmount] = useState()
  const {add_trans} = useContext(GlobalCntxt)
  const OnSubmit = (e)=> {
    e.preventDefault();
    
    const newtrans = {
      id: new Date().getTime(),
      Descrip,
      Amount: +Amount
    }
    add_trans(newtrans)
    setDescrip('')
    setAmount('')
    

  }

  return (
    <div>
        <form className ='input_form' onSubmit = {OnSubmit}>
            <label>
                <input
                 placeholder ="Enter Description" 
                 required 
                 Type ="text"
                value = {Descrip}
                onChange = {(e) => setDescrip(e.target.value)}
                 />
            </label>
            <br />
            <label>
                <input 
                placeholder ="Enter Amount" 
                required
                Type ="number"
                value = {Amount}
                onChange = {(e) => setAmount(e.target.value)} 
                />
            </label>
            <br />
            <button className ='buttons'>ADD</button>
        </form>
     
    </div>
  );
}

export default AddTransection;