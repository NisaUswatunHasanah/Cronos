import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Dropdown,
} from "react-bootstrap";
import Logo from "../../../Assets/Logo.png";
import "../NavigationBar/NavigationBar.css";

const Navigationbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#6495ED" }}
      >
        <Container>
          <Navbar.Brand href="#/">
            <img src={Logo} alt="" className="logo" />
          </Navbar.Brand>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Features"
              menuVariant="light"
            >
              <Dropdown.Item href="#/action-1">Bank</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bills</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Client Portal</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Expenses</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Inventory</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Sales Order</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Online Payment</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Vendor Portal</Dropdown.Item>
            </NavDropdown>
            <Nav.Link href="#recources">Price</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Resources"
              menuVariant="light"
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
            <Button variant="outline-dark">Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
