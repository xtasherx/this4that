import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
    // update classnames for styling---please do not edit wrapping code--it will break user authentication
    <div className="">
      <nav className="">
        <div className="">
          <div className="" />
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
