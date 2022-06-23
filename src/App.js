import './App.css';
import React from 'react';
// import Get from '../src/Get'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';


function App() {
  return (
    <div className="App">
      {/* <Get /> */}
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
