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

const Navigationbar = () => {
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
          <div className="grid-container">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Features"
              menuVariant="light"
              
            >
              
              <div className="grid-item">
              <Dropdown.Item href="#/Purchasing">Purchasing</Dropdown.Item>
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
            <Nav.Link href="/PriceList">Price</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Resources"
              menuVariant="light"
              href="Price"
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
            <Nav.Link href="#signIn">Sign In</Nav.Link>
            <Button variant="outline-light">Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
