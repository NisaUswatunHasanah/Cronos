import React from "react";
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

const Navigationbar = () => {
  const navigate = useNavigate()
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
              
              <div className="grid-item">
              <Dropdown.Item href="#/Purchasing">Nisa</Dropdown.Item>
              <Dropdown.Item href="#/Master Data">Master Data</Dropdown.Item>
              <Dropdown.Item href="#/Cash Bank">Cash Bank</Dropdown.Item>
              <Dropdown.Item href="#/General Ledger">General Ledger</Dropdown.Item>
              <Dropdown.Item href="#/Account Payabel">Account Payabel</Dropdown.Item>
              <Dropdown.Item href="#/Account Receiveable">Account Receiveable</Dropdown.Item>
              <Dropdown.Item href="#/Fixed Assets">Fixed Assets</Dropdown.Item>
              <Dropdown.Item href="#/Inventory">Inventory</Dropdown.Item>
              <Dropdown.Item href="#/Configuration">Configuration</Dropdown.Item>
              </div>
              <div className="grid-item">
              <Dropdown.Item href="#/Payroll">Payroll</Dropdown.Item>
              <Dropdown.Item href="#/Report Finance">Report Finance</Dropdown.Item>
              <Dropdown.Item href="#/Production">Production</Dropdown.Item>
              <Dropdown.Item href="#/Scrap">Scrap</Dropdown.Item>
              <Dropdown.Item href="#/Sales">Sales</Dropdown.Item>
              <Dropdown.Item href="#/Maintenence Management">Maintenence Management</Dropdown.Item>
              <Dropdown.Item href="#/Human Resources">Human Resources</Dropdown.Item>
              <Dropdown.Item href="#/financing accounting cronos">financing accounting cronos</Dropdown.Item>
              
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
