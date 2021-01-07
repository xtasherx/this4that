import React from "react";

// importing styling
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Import Other Components
import MainNav from './main-nav';
import AuthNav from './auth-nav';

const NavBar = () => {
  return (
    // update classnames for styling---please do not edit wrapping code--it will break user authentication
    
    <Navbar collapseOnSelect expand="lg" className="navBar">
    <Navbar.Brand>
        <h1>Barter App</h1>
    </Navbar.Brand> 

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <MainNav />
            <AuthNav />
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


