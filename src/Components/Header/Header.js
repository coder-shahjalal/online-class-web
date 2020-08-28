import React from "react";
import logo from "../../images/logo-coral.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav className="d-flex  align-self-center anchor-align">
        <a href="/catagories">Catagories</a>
        <a href="/business">Business</a>
        <a href="/grow skill"> Grow Skill</a>
      </nav>
    </div>
  );
};

export default Header;
