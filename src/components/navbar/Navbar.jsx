import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.avif";
import { Link } from "react-scroll";

import { useState } from "react";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="center">
        <Link
          activeClass="active"
          spy={true}
          to="intro"
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          to="why"
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          to="footer"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>
      <div className="right">
        <button id="signin">Sign In</button>
        <button id="register">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
