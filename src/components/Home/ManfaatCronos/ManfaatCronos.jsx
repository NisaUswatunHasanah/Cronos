import { Card, Col,Row } from 'antd';
import React from 'react';
const { Meta } = Card;

const ManfaatCronos = () => (
<div style={{background:"#F0F8FF"}}> 
{/* #ececec */}
    <div style={{height:"100vh",textAlign:"center",padding:"50px",fontFamily:"sans-serif"
    ,fontSize:"20px"}}>
        <p>Membantu Pengusaha Memajukan</p>
        <p style={{lineHeight:"3px"}}> Perusahaan Dengan Sistem</p>
    </div>
    <div style={{margin:"180px"}}>

        <Row gutter={20} >
            <Col span={8}>
                <Card
                    hoverable
                    style={{
                        width: 240,
                        height:300
                    }}
                    >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            
            <Col span={8}>
                <Card
                    hoverable
                    style={{
                        width: 240,
                        height:300
                    }}
                    >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            
            <Col span={8}>
                <Card
                    hoverable
                    style={{
                        width: 240,
                        height:300
                    }}
                    >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
        </Row>
    </div>
    
</div>
);

export default ManfaatCronos;
