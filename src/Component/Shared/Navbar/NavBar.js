import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import auth from "../../../firebase.init";
// import Loading from "../../Loading/Loading";
import "./NavBar.css";
const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    // return <Loading></Loading>;
  }
  if(error){
    
  }
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle className="bg-info" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
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
          {user ? (
            <Nav>
              <Nav.Link as={Link} to="/manage">
                MANAGE INVENTORY
              </Nav.Link>
              <Nav.Link as={Link} to="/add">
                ADD ITEM
              </Nav.Link>
              <Nav.Link as={Link} to="/myitem">
                MY ITEM
              </Nav.Link>
              <p className="text-warning mt-2 ms-2 text-center">{ (user.displayName)}</p>
              <Button onClick={() => signOut(auth)} className="text-info bg-light border-0 mb-2">Log Out</Button>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">
                LOGIN
              </Nav.Link>
            </Nav>
          )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
