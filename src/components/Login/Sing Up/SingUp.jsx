import { Button, Card, Input, Space} from 'antd';
import React, { useEffect, useState } from 'react';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "./SingUp.css";
import { getUser,postUser } from '../../services/authServices';

const SingUp =()=> {
    const navigate = useNavigate()
    const setListUser = useState([]);
    const [massage,setMessage]= useState("");
    const setIsEditing = useState(false);
    const [dataUser,setDataUser] = useState({tanggal:"",organizationname:"",country:"",province:"",city:"",address:"",postalcode:"",currency:"",language:""});
    console.log(dataUser,setDataUser);

    useEffect(()=>{
        getUser(setListUser);
        setTimeout(()=>{
            setMessage("");
        },3000);
    },[massage]);

  
 
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
                    <Input placeholder='Nama Organisasi' type={"text"}
                            value={dataUser.organizationname} 
                                onChange={(e)=>{
                                    setDataUser({...dataUser,organizationname:e.target.value})
                                }} />
                </div>
                <div style={{margin:"30px",lineHeight:"0px"}}>
                   <tg>Lokal Bisnis *</tg>
                        <div style={{marginLeft:"400px"}}>

                            <tg>Negara Bagian/Provinsi *</tg>
                        </div>
                
                </div>
                <div style={{margin:"30px"}}>
                  
                    <Input placeholder='Negara' style={{width:"315px"}}  
                        value={dataUser.country} 
                                onChange={(e)=>{
                                    setDataUser({...dataUser,country:e.target.value})
                                }}></Input>
                    <Input placeholder='Negara Bagian' style={{width:"315px",insetInline:"85px"}}
                        value={dataUser.province} 
                                onChange={(e)=>{
                                    setDataUser({...dataUser,province:e.target.value})
                                }}></Input>
                    <Input placeholder='Alamat' type={"text"} style={{marginTop:"15px"}}
                         value={dataUser.address} 
                                onChange={(e)=>{
                                    setDataUser({...dataUser,address:e.target.value})
                                }}/>
                    <Input placeholder='Kota' style={{width:"315px",marginTop:"15px"}}
                        value={dataUser.city} 
                                onChange={(e)=>{
                                    setDataUser({...dataUser,city:e.target.value})
                                }}></Input>
                    <Input placeholder='Kode Pos' style={{width:"315px",insetInline:"85px",marginTop:"15px"}}
                         value={dataUser.postalcode} 
                                onChange={(e)=>{
                                    setDataUser({...dataUser,postalcode:e.target.value})
                                }}></Input>
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
                    <Input placeholder='Mata Uang' style={{width:"315px"}}
                         value={dataUser.currency} 
                            onChange={(e)=>{
                                setDataUser({...dataUser,currency:e.target.value})
                            }}></Input>
                    <Input type={"language"} placeholder='Bahasa' style={{width:"315px",insetInline:"85px"}}
                         value={dataUser.language}  
                            onChange={(e)=>{
                                setDataUser({...dataUser,language:e.target.value})
                            }}>
                            
                    </Input>
                </div>
                <div style={{margin:"30px"}}>
                    <p>
                        Tanggal Terdaftar *
                    </p>
                    <Input type={"date"}
                     value={dataUser.tanggal}
                     onChange={(e)=>{
                         setDataUser({...dataUser,tanggal:e.target.value})
                     }}/>
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
                   <Button type='primary'
                    onClick={()=>{postUser(dataUser,setDataUser,setMessage,setIsEditing)
                        navigate("/berhasil")}}
                        disabled={!dataUser.address||!dataUser.city||!dataUser.country||!dataUser.currency
                                  ||!dataUser.language||!dataUser.organizationname||!dataUser.postalcode||
                                  !dataUser.province||!dataUser.tanggal}
                        >
                         Memulai
                   </Button>
                   <p style={{color:"GrayText",lineHeight:"30px"}}>isi semua form terlebih dahulu untuk dapat melanjutkan registrasi!</p>   
                   <p  style={{marginLeft:"550px"}}>
                       <tg>Kebijakan Privasi</tg>
                   </p>
                </div>
                
              

                    

                 
            </Card>
        </div>
    </div>
  )
}

export default SingUp
