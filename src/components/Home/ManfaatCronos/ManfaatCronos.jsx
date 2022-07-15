import { Card, Col,Row } from 'antd';
import React from 'react';
const { Meta } = Card;

const ManfaatCronos = () => (
<div style={{background:"#F0F8FF"}}>
    <div style={{textAlign:"center"}}>
        <p>Membantu Pengusaha Memajukan Perusahaan Dengan Sistem</p>
    </div>
    <div style={{}}>

        <Row gutter={16} >
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
