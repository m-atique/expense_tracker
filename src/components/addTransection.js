import React,{useState} from 'react';


function AddTransection() {
  const [Descrip, setDescrip] = useState('')
  const [Amount, setAmount] = useState(0)
  return (
    <div>
        <form className ='input_form'>
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