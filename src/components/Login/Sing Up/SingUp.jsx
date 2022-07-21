import { Button, Card, Input, Space} from 'antd';
import React from 'react';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "./SingUp.css";

const SingUp =()=> {
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
                    <Input placeholder='Nama Organisasi' type={"text"}/>
                </div>
                <div style={{margin:"30px",lineHeight:"0px"}}>
                   <tg>Lokal Bisnis *</tg>
                        <div style={{marginLeft:"400px"}}>

                            <tg>Negara Bagian/Provinsi *</tg>
                        </div>
                
                </div>
                <div style={{margin:"30px"}}>
                  
                    <Input placeholder='Negara' style={{width:"315px"}}></Input>
                    <Input placeholder='Negara Bagian' style={{width:"315px",insetInline:"85px"}}></Input>
                    <Input placeholder='Nama Organisasi' type={"text"} style={{marginTop:"15px"}}/>
                    <Input placeholder='Kota' style={{width:"315px",marginTop:"15px"}}></Input>
                    <Input placeholder='Kode Pos' style={{width:"315px",insetInline:"85px",marginTop:"15px"}}></Input>
                </div>
                <div style={{margin:"30px"}}>
                    <p style={{color:"gray"}}>
                        PENGATURAN REGIONAL
                    </p>
                </div>
                <div style={{margin:"30px",lineHeight:"0px"}}>
                   <tg>Mata Uang *</tg>
                        <div style={{marginLeft:"400px"}}>

                            <tg>Bahasa *</tg>
                        </div>
                </div>
                <div style={{margin:"30px"}}>
                    <Input placeholder='Mata Uang' style={{width:"315px"}}></Input>
                    <Input type={"language"} placeholder='Bahasa' style={{width:"315px",insetInline:"85px"}}></Input>
                </div>
                <div style={{margin:"30px"}}>
                    <p>
                        Zona Waktu *
                    </p>
                    <Input placeholder='Nama Organisasi' type={"time"}/>
                </div>
                <div style={{margin:"30px"}}>
                    <p style={{color:"gray"}}>
                        PENGATURAN PAJAK
                    </p>
                    <Space>
                        <InfoCircleTwoTone />
                            <tg>
                                Konfigurasi tarif pajak di organisasi anda dengan melakukan navigasi ke pengaturan  pajak.
                            </tg> 
                    </Space>
                </div>
                <div style={{margin:"30px"}}>
                    <p> Catatan: </p>
                    <p style={{color:"GrayText",lineHeight:"2px",textIndent:"35px"}}> anda dapat mengubah semua detail ini  nantinya di pengaturan, jika dibutuhkan. </p>
                </div>
                <div style={{margin:"30px"}}>
                    <p style={{borderBottom:"1px solid grey",lineHeigth:"10px"}}></p>   
                </div>
                <div style={{margin:"30px"}}>
                   <Button type='primary'>Memulai</Button>   
                   <div  style={{marginLeft:"600px"}}>
                       <tg>Kebijakan Privasi</tg>
                   </div>
                </div>
                
              

                    

                 
            </Card>
        </div>
    </div>
  )
}

export default SingUp
