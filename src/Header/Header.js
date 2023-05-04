import React from "react";
import logoImage from "../assets/images/starbuck_logo.jpg";
import "./header.css";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-parent">
      <div className="header-container">
        <div className="container">
          <ul className="header-ul">
            <li className="header-li">
              <span className="header-span">welcome to codilar</span>
            </li>
            <li className="header-li">
              <a href="/home">Sign In</a>
            </li>
            <li className="header-li">
              <span>or</span>
            </li>
            <li className="header-li">
              <a href="/home">Create an Account</a>
            </li>
            <li className="header-li">
              <a href="/home">vijayawadda</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-content">
        <div className="logo">
          <img src={logoImage} alt="" className="starLogo" />
        </div>
        <div className="header-search">
          <input
            className="header-textbox"
            type="text"
            placeholder="Search entire store here.."
          />
          <div className="cart-icon">
            <BsCart4 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
