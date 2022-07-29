import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Dropdown,
} from "react-bootstrap";
import "./NavigationBar.css";
import Logo from "../../Assets/cronos.png"
import {  useNavigate } from "react-router-dom";
import { getUser } from "../services/Get"

const Navigationbar = () => {
  const [listUser,setListUser] = useState([]);
    const [message,setMessage]= useState("");

    useEffect(()=>{
        getUser(setListUser);
        setTimeout(()=>{
            setMessage("");
        },3000);
    },[message]);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#4682B4" }}
      >
        <Container>
          <Navbar.Brand href="#/">
            <div >
          <img className="logo" src={Logo} alt=""/>
            </div>
          </Navbar.Brand>
          
          <Nav>
          <div className="grid-container" style={{marginTop:"25px"}}>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Features"
              menuVariant="light"
              
            >
              
              <div>
              {listUser.filter((syafak)=>  syafak.id === 1 ).map((syafak,index)=>(
                <Dropdown.Item onClick={()=>{navigate("/purchasing")}}>{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 2 ).map((syafak,index)=>(
                <Dropdown.Item href="#/masterData">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 3 ).map((syafak,index)=>(
                <Dropdown.Item href="#/cashBank">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 4 ).map((syafak,index)=>(
                <Dropdown.Item href="#/generalLedger">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 5 ).map((syafak,index)=>(
                <Dropdown.Item href="#/accountPayable">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 6 ).map((syafak,index)=>(
                <Dropdown.Item href="#/accountReceiveable">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 7 ).map((syafak,index)=>(
                <Dropdown.Item href="#/fixedAssets">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 8 ).map((syafak,index)=>(
                <Dropdown.Item href="#/inventory">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 9 ).map((syafak,index)=>(
                <Dropdown.Item href="#/configuration">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 10 ).map((syafak,index)=>(
                <Dropdown.Item href="#/payroll">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 11 ).map((syafak,index)=>(
                <Dropdown.Item href="#/reportFinance">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 12 ).map((syafak,index)=>(
                <Dropdown.Item href="#/production">{syafak.nama}</Dropdown.Item>
              ))}
              {listUser.filter((syafak)=>  syafak.id === 13 ).map((syafak,index)=>(
                <Dropdown.Item href="#/scrap">{syafak.nama}</Dropdown.Item>
              ))}
             </div>
              
            </NavDropdown>
            </div>
            <div style={{marginTop:"25px"}}>
            <Nav.Link href="/PriceList">Price</Nav.Link>

            </div>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Resources"
              menuVariant="light"
              href="Price"
              style={{marginTop:"25px"}}
            >
              <Dropdown.Item href="#/action-1">
                Help Documentation
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">FAQ</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Business Guides</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Forums</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Developers</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Webinars</Dropdown.Item>
              <Dropdown.Item href="#/action-7">All Recources</Dropdown.Item>
            </NavDropdown>
            <div style={{marginTop:"25px"}}>

            <Nav.Link href="/signIn" >Sign In</Nav.Link>
            </div>
            <div>
            <Button style={{marginTop:"25px"}} onClick={()=>{navigate("/signUp")}} variant="outline-light">Sign Up</Button>
            </div>
          </Nav>
         
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
