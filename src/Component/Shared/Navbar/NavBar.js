import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import auth from "../../../firebase.init";
import CustomLink from "../../Customlink/CustomLink";

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
            <CustomLink className=" me-3" to="/">
              HOME
            </CustomLink>
            <CustomLink className=" me-3" to="/about">
              ABOUT
            </CustomLink>
            <CustomLink className=" me-3" to="/inventory">
              INVENTORY
            </CustomLink>
            <CustomLink className=" me-3" to="/blogs">
              BLOGS
            </CustomLink>
          </Nav>
          {user ? (
            <>
              <CustomLink className=" me-3" to="/manage">
                MANAGE INVENTORY
              </CustomLink>
              <CustomLink className=" me-3" to="/add">
                ADD ITEM
              </CustomLink>
              <CustomLink className=" me-3" to="/myitems">
                MY ITEMS
              </CustomLink>
              <p className="text-info ms-2 text-center mt-3">{ (user.displayName)}</p>
              <Button onClick={() => signOut(auth)} className="text-danger bg-light border-0">Log Out</Button>
            </>
          ) : (
            <>
              <CustomLink className=" me-3" to="/login">
                LOGIN
              </CustomLink>
            </>
          )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
