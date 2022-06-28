import './App.css';
import React from 'react';
// import Get from '../src/Get'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Nisa from './components/Home/Nisa';


function App() {
  return (
    <div className="App">
      {/* <Get /> */}
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/yui" element={<Nisa/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
