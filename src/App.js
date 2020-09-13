import React from 'react';
import './App.css';
import Heading from './heading';
import Balance from './balance';
import Ledger from './ledger';
import History from './history';
import AddTransection from './addTransection'

function App() {
  return (
    <div className = 'outerbox'>
      <Heading></Heading>
      <Balance></Balance>
      <Ledger></Ledger>
      <History></History>
      <AddTransection></AddTransection>
    </div>
  );
}

export default App;
