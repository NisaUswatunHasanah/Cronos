import { Card } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SingUp.css";

function SingUp() {
    const navigate = useNavigate()
  return (
    <div className='bg'>
        <div style={{padding:"80px"}}>
            <p style={{textAlign:"center",fontSize:"18px",lineHeight:"15px",fontWeight:"normal"}}>
                Finansial Acounting
            </p>
            <p style={{textAlign:"center",lineHeight:"5px",fontSize:"18px",fontWeight:"normal"}}>
                Finansial Acounting adalah perangkat lunak akutansi online yang tuntas
            </p>   
            <Card style={{width:"800px",margin:"auto",height:"1000px"}} >
                <p style={{textAlign:"center",padding:"20px",fontSize:"25px",fontFamily:"fantasy"}}>
                        Konfigurasi Profil Organisasi Anda
                </p>
                <div  style={{margin:"30px"}}>
                    <p style={{color:"gray"}}>
                        DETAIL ORGANISASI
                    </p>
                    <p>
                        Nama Organisasi *
                    </p>

                </div>
                 
            </Card>
        </div>
    </div>
  )
}

export default SingUp
