import React, { useEffect, useState } from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Logo from "../../Assets/Logo.jpg";
import { Card } from "antd";
import { getPurchasing } from "../services/GetRead";
import SideBar from "../Features/SideBar"

const Purchasing = () => {
  const [listContent,setListContent] = useState([]);
  const [message,setMessage]= useState("");

  useEffect(()=>{
      getPurchasing(setListContent);
      setTimeout(()=>{
          setMessage("");
      },3000);
  },[message]);

  return (
    <div>
      <Layout>
        <Header style={{ background: "#4682B4" }}>
          <img
            style={{ marginTop: "5px" }}
            className="logo"
            src={Logo}
            alt=""
          />
          <tg style={{ marginLeft: "700px", marginTop: "3px" }}>
            Already have a Finansial Acounting Acount?
            <a href="/signIn" style={{ color: "Highlight" }}>
              {" "}
              Sign In
            </a>
          </tg>
        </Header>
        <Layout>
          {/* First SideBar */}

          <Sider>
            <div>
              < SideBar />
            </div>
          </Sider>

          {/* First Content */}

          {/* <Content>
            <div>
              <Card
                title="Card title"
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                {listUser.filter((syafak) => syafak.id === 2).map((syafak, index) => (
            <p>
              {syafak.isi_content}
            </p>
              ))}
              
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Content> */}
          {
            listContent.map((data, index) => 
            <Content key={index}>
              <img
                style={{ marginTop: "36px" }}
                className="logo"
                src={data.image}
                alt=""
              />
              <div>
                <Card
                  // title="Card title"
                  bordered={false}
                  style={{
                    width: 1000,
                    height: 500
                  }}
                >
                  {data.isi_content}
                </Card>
              </div>
            </Content>
            )
          }
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default Purchasing;
