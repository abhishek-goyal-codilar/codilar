import React from "react";
import "./navbar.css";

const ProductNav = () => {
  return (
    <div className="Container-nav">
      <div className="parent-container-nav">
        <div className="container-nav">
          <div className="separator-nav">
            <ul className="menu-items">
              <li>
                <a href="#" className="link">
                  What's New
                </a>
              </li>
              <li>
                <select className="selector">
                  <option>Men</option>
                </select>
              </li>
              <li>
                <select className="selector">
                  <option> Gear</option>
                </select>
              </li>
              <li>
                <select className="selector">
                  <option>Training</option>
                </select>
              </li>
              <li>
                <select className="selector">
                  <option>Sale</option>
                </select>
              </li>
              <li>
                <select className="selector">
                  <option>Organic</option>
                </select>
              </li>
              <li>
                <select className="selector">
                  <option>CPL T-shirt</option>
                </select>
              </li>
              <li>
                <select className="selector">
                  <option>Mobile</option>
                </select>
              </li>
              <li>
                <select className="selector">
                  <option>Cars</option>
                </select>
              </li>
              <li>
                <select className="selector">
                  <option>Means Fashion</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="link-home">
        <div className="Home">
          <a href="#" className="Home">
            Home
          </a>
          {">"}
        </div>
        <div className="next">
          <p>Crown Summit Bakpack</p>
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
