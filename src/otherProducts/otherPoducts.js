import React from "react";
// import DEFAULT from "../assets/images/dummy.jpg";
// import MOB from "../assets/images/myphone.jpg";
// import LAPTOP from "../assets/images/laptops.jpg";
// import CRICKET from "../assets/images/cricket_box.jpg";
// import MYPHONE from "../assets/images/myphone.jpg";
import "./otherProducts.css";
let products = [
  {
    description: "Fusion Backpack",
    priceFrom: "₹59",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Wayfarer Messenger",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Rival Field Messenger",
    priceFrom: "₹74",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Impulse Duffle",
    priceFrom: "₹74",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Push It Messenger Bag",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Overnight Duffle",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "TABLE_LAMP",
    priceFrom: "₹2,110.00",
    priceTo: "₹2,222.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "MyLaptop",
    priceFrom: "₹23,000.00",
    priceTo: "₹29,000.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "battery",
    priceFrom: "₹72.00",
    priceTo: "₹70.00 Regular Price",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Fusion Backpack",
    priceFrom: "59",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "ourlaptop",
    priceFrom: "₹68.00",
    priceTo: "₹1,767.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "cricket box",
    priceFrom: "₹68.00",
    priceTo: "₹110.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "myphone",
    priceFrom: "₹34.00",
    priceTo: "₹72.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Bundle product",
    priceFrom: "₹340.00",
    priceTo: "₹450.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "mob",
    priceFrom: "₹34.00",
    priceTo: "₹72.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
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
              <img
                className="productimage"
                alt={item.description}
                src={item.img}
              ></img>
              <p>{item.description}</p>
              <p>{item.priceFrom}</p>
              <p>{item.priceTo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProduct;
