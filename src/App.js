import './App.css';
import React from 'react';
// import Get from '../src/Get'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import PriceList from '../src/components/PriceList/PriceList'
import SingUp from './components/Login/Sing Up/SingUp';


function App() {
  return (
    <div className="App">
      {/* <Get /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PriceList" element={<PriceList />} />
          <Route path="/singUp" element={<SingUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
