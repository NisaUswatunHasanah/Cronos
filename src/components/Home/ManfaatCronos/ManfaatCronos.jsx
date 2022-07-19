




import { Card, Col,Row, Space } from 'antd';
import { BankTwoTone,BookTwoTone,DollarCircleTwoTone } from '@ant-design/icons';
import React from 'react';


const ManfaatCronos = () => (
<div style={{background:"#F0F8FF",textAlign:"center"}}> 
{/* #ececec */}
    <div style={{padding:"80px",fontFamily:"sans-serif",fontSize:"50px"}}>
        <p>Membantu Pengusaha Memajukan</p>
        <p style={{lineHeight:"3px"}}> Perusahaan Dengan Sistem</p>
    </div>
    <div style={{paddingBlock:"20px",marginLeft:"80px"}}>

        <Row gutter={12}  >
            <Col span={9}>
                <Card
                    hoverable
                    
                    style={{
                        width: 240,
                        height:300,
                        borderColor:"powderblue"
                    }}
                    >
                        <Space>
                            <BookTwoTone  style={{background:"powderblue",border: "8px solid powderblue",borderRadius:"50%",fontSize:"30px"}} />
                        </Space>
                        <div style={{padding:"12px",fontSize:"15px",fontWeight:"bold"}}>
                            <p style={{lineHeight:"10px"}}> Pengoptimalan </p>
                            <p style={{lineHeight:"2px"}}>Portofolio Profil</p>
                        </div>
                        <div style={{padding:"12px"}}>
                            <p style={{lineHeight:"10px"}}>Rujukan Dan Kiat Karir </p>
                            <p style={{lineHeight:"10px"}}> Sistem Keuangan</p>
                            <p style={{lineHeight:"10px"}}> Dari Perusahaan </p>
                            <p style={{lineHeight:"10px"}}>Berbasis Sistem</p>
                            <p style={{lineHeight:"10px"}}> Teratas</p>
                        </div>
                  
                </Card>
            </Col>
            
            <Col span={9}>
                <Card
                    hoverable
                    style={{
                        width: 240,
                        height:300,
                        borderColor:"powderblue"
                    }}
                    >
                    <Space>
                        <BankTwoTone style={{background:"powderblue",border: "8px solid powderblue",borderRadius:"50%",fontSize:"30px"}} />
                    </Space>
                    <div style={{padding:"12px",fontSize:"15px",fontWeight:"bold"}}>
                            <p style={{lineHeight:"10px"}}> Dukungan Luas Dari</p>
                            <p style={{lineHeight:"2px"}}>Jaringan Server</p>
                    </div>
                    <div style={{padding:"12px"}}>
                            <p style={{lineHeight:"10px"}}>Rujukan Berbagai </p>
                            <p style={{lineHeight:"10px"}}> Intansi Dan</p>
                            <p style={{lineHeight:"10px"}}> Perbankan Untuk </p>
                            <p style={{lineHeight:"10px"}}>Memudahkan</p>
                            <p style={{lineHeight:"10px"}}> Data</p>
                    </div>
                    
                </Card>
            </Col>
            
            <Col span={5}>
                <Card
                    hoverable
                    style={{
                        width: 240,
                        height:300,
                        borderColor:"powderblue"
                        
                    }}
                    >
                    <Space>
                        <DollarCircleTwoTone style={{background:"powderblue",border: "8px solid powderblue",borderRadius:"50%",fontSize:"30px"}} />
                    </Space>
                    <div style={{padding:"12px",fontSize:"15px",fontWeight:"bold"}}>
                            <p style={{lineHeight:"10px"}}> Peluang Penempatan</p>
                    </div>
                    <div style={{padding:"12px"}}>
                            <p style={{lineHeight:"10px"}}>Rujukan Dan Kiat</p>
                            <p style={{lineHeight:"10px"}}> Perkembangan</p>
                            <p style={{lineHeight:"10px"}}> Acounting Pada </p>
                            <p style={{lineHeight:"10px"}}>Perusahaan</p>
                            
                    </div>
                    
                </Card>
            </Col>
        </Row>
    </div>
    
</div>
);

export default ManfaatCronos;
