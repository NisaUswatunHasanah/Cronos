import './App.css';
import React from 'react';
// import Get from '../src/Get'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import PriceList from '../src/components/PriceList/PriceList'


function App() {
  return (
    <div className="App">
      {/* <Get /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PriceList" element={<PriceList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
