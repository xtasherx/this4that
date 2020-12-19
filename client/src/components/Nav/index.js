import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';


export default function Navigation() {

    return (

        <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>
            Barter App
        </Navbar.Brand> 

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="navLink">Nav 1</Nav.Link>
                <Nav.Link className="navLink">Nav 2</Nav.Link>
                <Nav.Link className="navLink">Nav 3</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
}
