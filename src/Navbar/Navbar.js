import React from "react";
import "./navbar.css";

const ProductNav = () => {
  return (
    <>
      <div className="parent-container-nav">
        <div className="container-nav">
          <div className="separator-nav">
            <nav className="navigation">
              <ul className="menu-items">
                <li className="nav">
                  <a href="#" className="link">
                    <span>What's New</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span>Men</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span> Gear</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span>Training</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span>Sale</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span>Organic</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span>CPL T-shirt</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span>Mobile</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span>Cars</span>
                  </a>
                </li>
                <li className="nav">
                  <a href="#" className="selector">
                    <span>Means Fashion</span>
                  </a>
                </li>
              </ul>
            </nav>
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
    </>
  );
};

export default ProductNav;
