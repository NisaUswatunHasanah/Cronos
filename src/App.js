import './App.css';
import React from 'react';
import 'antd/dist/antd.css'; 
import 'antd-button-color/dist/css/style.css';
// import Get from '../src/Get'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import PriceList from '../src/components/PriceList/PriceList'
import SingUp from './components/Login/Sing Up/SingUp';
import BuatPassword from './components/Login/Sing Up/BuatPassword';
import SingIn from './components/Login/Sing In/SingIn';
import BerhasilSingUp from './components/Login/Sing Up/BerhasilSingUp';
import TampilanSignIn from './components/Login/Sing In/TampilanSignIn';



function App() {
  return (
    <div className="App">
      {/* <Get /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PriceList" element={<PriceList />} />
          <Route path="/kelengkapanData" element={<SingUp/>}/>
          <Route path='/signUp' element={<BuatPassword/>}/>
          <Route path='signIn' element={<SingIn/>}/>
          <Route path='/berhasil' element={<BerhasilSingUp/>}/>
          <Route path='/tampilansignin' element={<TampilanSignIn/>}/>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
