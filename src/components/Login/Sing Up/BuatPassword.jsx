import { Card, Checkbox, Input, Layout,Button } from 'antd'
import { LockTwoTone,MailTwoTone } from '@ant-design/icons'
import { Content, Header } from 'antd/lib/layout/layout'
import React from 'react'
import Logo from "../../../Assets/cronos.png"
import { useNavigate } from 'react-router-dom'

const BuatPassword =()=> {
  const navigate = useNavigate()
  return (
    <div style={{background: "#F0F8FF",height: "100vh"}}>
        <Layout>
            <Header style={{background:"#4682B4"}}>
            <div>
                <img style={ {marginTop:"5px"}} className="logo" src={Logo} alt=""/>
                <tg style={{marginLeft:"700px",marginTop:"3px"}}>Already have a Finansial Acounting Acount?
                <a href='/signIn' style={{color:'Highlight'}}> Sign In</a>
                </tg> 
            </div>
            </Header>
            <Content>
              <div style={{padding:"30px",background: "#F0F8FF"}}>
                <Card style={{width:"700px",margin:"auto",height:"500px",padding:"30px",boxShadow:" 1px 1px 3px grey"}}>
                  <div style={{padding:"15px"}}>
                  <p style={{textAlign:"center",fontSize:"20px"}}> Experience Finansial Acounting for FREE</p>

                  <Input type={"email"} placeholder="Email" style={{height:"50px"}} 
                  prefix={<MailTwoTone   
                  style={{fontSize:"20px",textIndent:"4px"}}/>} />
                  <br/>
                  <br/>
                  <Input.Password type={"password"} placeholder="Password" style={{height:"50px"}} 
                  prefix={<LockTwoTone 
                  style={{fontSize:"20px",textIndent:"4px"}}/>} />
                  </div>
                  <div style={{margin:"20px"}}>
                  <p style={{lineHeight:""}}> Your data will be in US data center</p>
                  <Checkbox style={{lineHeight:"2px"}}> I agree to the Terms of Service and Privacy Policy</Checkbox>
                  </div>
                  <Button style={{margin:"15px",width:"580px",height:'50px'}} type="primary" onClick={()=> {navigate("/kelengkapanData")}}>
                    CREATE ACCOUNT
                  </Button>
                </Card>
              </div>

            </Content>
        </Layout>

    </div>
  )
}

export default BuatPassword