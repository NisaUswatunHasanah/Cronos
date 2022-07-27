
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import Logo from "../../../Assets/cronos.png"
import "./TabelTerdaftar.css"
import { getUser } from '../../services/authServices'
import { Button } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'



const TampilanSignIn=() =>{
  const [listUser,setListUser] = useState([]);
  const [message,setMessage]= useState("");

  useEffect(()=>{
      getUser(setListUser);
      setTimeout(()=>{
          setMessage("");
      },3000);
  },[message]);
  return (
    <div>

      <Header style={{background:"#4682B4"}}>
        <div>
        <img style={ {marginTop:"5px"}} className="logo" src={Logo} alt=""/>
          <Button type='dashed' ghost style={{borderRadius:"30px",marginLeft:"930px"}}>Masuk Aplikasi</Button>
          <PoweroffOutlined style={{marginLeft:"20px",fontSize:"20px",color:"Highlight"}} />
        </div>
        
        
      </Header>
      
      <div style={{height:"flex",background: "#F0F8FF"}}>
        <p style={{padding:"10px",textAlign:"center",fontFamily:"fantasy",fontWeight:"bold",fontSize:"40px"}}> Pengguna Terdaftar Aplikasi </p>
        <p style={{textAlign:"center",fontFamily:"fantasy",fontWeight:"bold",fontSize:"40px",lineHeight:"0px"}}> Finansial Accounting </p>
          <table id="customers" style={{marginLeft:"300px"}}>
            <tr>
              <th>Nama perusahaan</th>
              <th>Tanggal Terdaftar</th>
              <th>Kota</th>
            </tr>
            {listUser.map((data, index) => 
            <tr  key={index}>
              <td>{data.organizationname}</td>
              <td>{data.tanggal}</td>
              <td>{data.city}</td>
            </tr>
            )}
        
          </table>  
    </div>
      </div>
  
    
  )
}

export default TampilanSignIn
