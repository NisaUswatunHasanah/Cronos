import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import Logo from "../../../Assets/cronos.png"


function TampilanSignIn() {
  return (
    <div>

      <Header style={{background:"#4682B4"}}>
        <div>
        <img style={ {marginTop:"5px"}} className="logo" src={Logo} alt=""/>
        <tg></tg>
        </div>
      </Header>
      <div style={{height:"200vh",background: "#F0F8FF"}}>
      </div>
    </div>
    
  )
}

export default TampilanSignIn
