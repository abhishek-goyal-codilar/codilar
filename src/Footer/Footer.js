import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="page-footer">
      <div className="footer-content">
        <div className="widget-block">
          <ul className="footer-links">
            <li className="nav-item">
              <a href="#">About us</a>
            </li>
            <li className="nav-item">
              <a href="#">Customer Service</a>
            </li>
            <li className="nav-item">
              <a href="#">Test</a>
            </li>
          </ul>
        </div>
        <div className="widget-block">
          <ul className="footer-links">
            <li className="nav-item">
              <a href="#">Privacy and Cookie Policy</a>
            </li>
            <li className="nav-item">
              <a href="#">Search Terms</a>
            </li>
            <li className="nav-item">
              <a href="#">Advanced Search</a>
            </li>
            <li className="nav-item">
              <a href="#">Orders and Returns</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <input
            type="text"
            className="footer-textbox"
            placeholder="Enter your email address"
          />
          <button className="newsletter-submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
