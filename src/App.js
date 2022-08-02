import './App.css';
import React from 'react';
import 'antd/dist/antd.css'; 
import 'antd-button-color/dist/css/style.css';
// import Get from '../src/Get'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Purchasing from '../src/components/Features/Purchasing';
import MasterData from '../src/components/Features/MasterData';
import CashBank from '../src/components/Features/CashBank';
import GeneralLedger from '../src/components/Features/GeneralLedger';
import AccountPayable from '../src/components/Features/AccountPayable';
import AccountReceiveable from '../src/components/Features/AccountReceiveable';
import FixedAsset from '../src/components/Features/FixedAssets';
import Inventory from '../src/components/Features/Inventory';
import Configuration from '../src/components/Features/Configuration';
import Payroll from '../src/components/Features/Payroll';
import ReportFinance from '../src/components/Features/ReportFinace';
import Production from '../src/components/Features/Production';
import Scrap from '../src/components/Features/Scrap';
import PriceList from '../src/components/PriceList/PriceList';
import SingUp from './components/Login/Sing Up/SingUp';
import SingIn from './components/Login/Sing In/SingIn';
import BerhasilSingUp from './components/Login/Sing Up/BerhasilSingUp';
import TampilanSignIn from './components/Login/Sing In/TampilanSignIn';
import Daftar from './components/Login/Sing Up/Daftar';



function App() {
  return (
    <div className="App">
      {/* <Get /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchasing" element={<Purchasing />} />
          <Route path="/masterData" element={<MasterData/>} />
          <Route path="/cashBank" element={<CashBank />} />
          <Route path="/generalLedger" element={<GeneralLedger />} />
          <Route path="/accountPayable" element={<AccountPayable />} />
          <Route path="/accountReceiveable" element={<AccountReceiveable />} />
          <Route path="/fixedAsset" element={<FixedAsset />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/reportFinance" element={<ReportFinance />} />
          <Route path="/production" element={<Production />} />
          <Route path="/scrap" element={<Scrap />} />
          <Route path="/PriceList" element={<PriceList />} />
          <Route path="/kelengkapanData" element={<SingUp/>}/>
          <Route path='/signUp' element={<Daftar/>}/>
          <Route path='signIn' element={<SingIn/>}/>
          <Route path='/berhasil' element={<BerhasilSingUp/>}/>
          <Route path='/tampilansignin' element={<TampilanSignIn/>}/>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
