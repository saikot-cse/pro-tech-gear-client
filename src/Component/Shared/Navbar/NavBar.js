import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import './NavBar.css'
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle className="bg-info"  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
        
          <Nav className="me-auto">
          
            <Nav.Link  as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/inventory">
              INVENTORY
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              BLOGS
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/manage">
              MANAGE ITEM
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              ADD ITEM
            </Nav.Link>
            <Nav.Link as={Link} to="/myitem">
              MY ITEM
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
