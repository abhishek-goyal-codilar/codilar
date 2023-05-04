import React from "react";
import DEFAULT from "../assets/images/dummy.jpg";
import MOB from "../assets/images/myphone.jpg";
import LAPTOP from "../assets/images/laptops.jpg";
import CRICKET from "../assets/images/cricket_box.jpg";
import MYPHONE from "../assets/images/myphone.jpg";
import "./otherProducts.css";
let products = [
  {
    product_name: "Fusion Backpack",
    priceFrom: "₹59",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "Wayfarer Messenger",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "Rival Field Messenger",
    priceFrom: "₹74",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "Impulse Duffle",
    priceFrom: "₹74",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "Push It Messenger Bag",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "Overnight Duffle",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "TABLE LAMP",
    priceFrom: "₹2,110.00",
    priceTo: "₹2,222.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "My Laptop",
    priceFrom: "₹23,000.00",
    priceTo: "₹29,000.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "Battery",
    priceFrom: "₹72.00",
    priceTo: "₹70.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "Fusion Backpack",
    priceFrom: "59",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    product_name: "Our laptop",
    priceFrom: "₹68.00",
    priceTo: "₹1,767.00",
    img: `${LAPTOP}`,
  },
  {
    product_name: "Cricket box",
    priceFrom: "₹68.00",
    priceTo: "₹110.00",
    img: `${CRICKET}`,
  },
  {
    product_name: "Myphone",
    priceFrom: "₹34.00",
    priceTo: "₹72.00",
    img: `${MYPHONE}`,
  },
  {
    product_name: "Bundle product",
    priceFrom: "₹340.00",
    priceTo: "₹450.00",
    img: `${DEFAULT}`,
  },
  {
    product_name: "Mob",
    priceFrom: "₹34.00",
    priceTo: "₹72.00",
    img: `${MOB}`,
  },
];

const OtherProduct = (props) => {
  return (
    <div className="otherProductscontainer">
      <div className="block-title">
        <strong>We found other products you might like!</strong>
      </div>
      <div className="parent-container-otherProducts">
        {products.map((item, index) => {
          return (
            <div className="otherProductsContainer" key={index}>
              <div className="product-display-info">
                <img
                  className="productimage"
                  alt={item.description}
                  src={item.img}
                ></img>
                <p className="product_name">{item.product_name}</p>
                <p className="priceFrom">{item.priceFrom}</p>
                <p className="priceTo">{item.priceTo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProduct;
