import React from "react";
import "./content.css";
import Bag from "../assets/images/bags.jpg";

const Content = () => {
  return (
    <div className="product-container-content">
      <div className="product-display">
        <div className="product-image">
          <img src={Bag} alt="bag" className="bag-Img" />
        </div>
        <div className="product-description">
          <p className="display-title"> Crown Summit Backpacks</p>
          <a href="#" className="review">
            Be the first to review this product
          </a>
          <div className="parent-price">
            <div>
              <p className="price">₹38.00</p>
            </div>
            <div className="price-tag">
              <div className="instock-parent">
                <p className="instock"> IN STOCK</p>
              </div>
              <div>
                <p>SKU#: 24-MB03</p>
              </div>
            </div>
          </div>

          <div className="quantity-parent">
            <label className="quanity"> Qty</label>
          </div>
          <div className="quanity-number">
            <input type="text" className="quantitynumber" value={1} />
          </div>
          <div className="button-parent">
            <button className="addtocart"> Add to Cart</button>
          </div>

          <div className="wishlist">
            <div>
              <p className="wishlist-text">♥ ADD TO WISH LIST</p>
            </div>
            <div>
              <p className="wishlist-text">ADD TO COMPARE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
