import React from 'react';
import './App.css';
import Heading from './components/heading';
import Balance from './components/balance';
import Ledger from './components/ledger';
import History from './components/history';
import AddTransection from './components/addTransection';
import  {Globalprovider} from './components/globalState'

function App() {
  return (
    <div className = 'outerbox'>
      <Globalprovider>
        <Heading></Heading>
        <Balance></Balance>
        <Ledger></Ledger>
        <History></History>
        <AddTransection></AddTransection>
      </Globalprovider>
    </div>
  );
}

export default App;
