import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AccountList from './AccountList';
import AccTransaction from './AccTransactions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [accountNo, setAccountNo] = useState('');
  
  return (
    <div className="App">
      <header className="App-header">
          Customer Accounts
      </header> 
      <Router>
        <Routes>
            <Route exact path="/" element={<AccountList setAccountNo={setAccountNo} />} />
            <Route exact path="/transaction" element={<AccTransaction getAccountNo={accountNo}  />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
