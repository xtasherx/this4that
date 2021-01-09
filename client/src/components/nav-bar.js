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
    
    <Navbar collapseOnSelect expand="lg" className="navBar" variant="dark">
    <Navbar.Brand>
    <img
        src="https://drive.google.com/file/d/1hz4yRGCb2weQulZ2surJ7Zv9eW7pesZQ/view?usp=sharing"
        width="100"
        className="d-inline-block align-top"
        alt="this4that logo"
      />
    </Navbar.Brand> 

    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn" />
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


