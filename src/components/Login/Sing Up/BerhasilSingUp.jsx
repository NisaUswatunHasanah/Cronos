import React from 'react'
import { Button, Card } from 'antd'

function BerhasilSingUp() {
  return (
    <div style={{background: "#F0F8FF",height: "100vh",padding:"70px"}}>
        <Card style={{width:"400px",margin:"auto",height:"500px",padding:"30px",boxShadow:" 1px 1px 3px grey",borderRadius:"30px"}}>
          <p style={{textAlign:"center",fontSize:"20px",font:"icon",padding:"30px"}}>Selamat Bergabung!</p>
          <div style={{textAlign:"center"}}>
            <p style={{lineHeight:"2px"}}>Kami sangat senang memiliki anda sebagai</p>
            <p style={{lineHeight:"7px"}}> bagian dari keluarga Finansial Acounting. </p>
            <p style={{lineHeight:"7px"}}>Sebelum anda mulai menggunakan</p>
            <p style={{lineHeight:"7px"}}>Finansial Acounting, kami ingin</p>
            <p style={{lineHeight:"7px"}}>memperlihatkan kepada anda tempat  </p>
            <p style={{lineHeight:"7px"}}>menemukan sesuatu dan cara </p>
            <p style={{lineHeight:"7px"}}> menavigasi Finansial Acounting</p>
          </div>
          <div>
            <Button  type="warning" style={{margin:"35px"}}>Perlihatkan ke saya Platformnya</Button>
            
          </div>

        </Card>
      
    </div>
  )
}

export default BerhasilSingUp
