// import {NavLink} from "react-router-dom";
import React from "react";
import Nav from 'react-bootstrap/Nav';

const MainNav = () => (
  // update classnames for styling---please do not edit wrapping code--it will break user authentication
  // if you need to add a route for a new page copy and paste one of the navlinks below  and change the to="/your-new-path" 
  // Then go to App.js and copy and paste a ProtectedRoute and edit the new route there.
  
  <div className="navbar-nav">
    <Nav.Link
      to="/"
      exact
      className="navLink"
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      to="/profile"
      exact
      className="navLink"
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      to="/external-api"
      exact
      className="navLink"
      activeClassName="router-link-exact-active"
    >
      External API
    </Nav.Link>
  </div>
);

export default MainNav;
