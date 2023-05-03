import React from "react";
import "./content.css";
import { useState, useEffect } from "react";

const Content = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    ApiUtil(`
      query {
        products(
          filter: { sku: { eq: "24-MB03" } }
          pageSize: 20
          currentPage: 1
          sort: {}
        ) {
          items {
            name
            image {
              url
            }
            price_range {
              maximum_price {
                final_price {
                  value
                }
              }
            }
            description {
              html
            }
          }
        }
      }
    `);
    async function ApiUtil(query) {
      const response = await fetch("/graphql", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });
      const { data } = await response.json();
      setData(data);
      console.log(data);
    }
  }, []);
  return (
    <div>
      {data ? (
        data.products.items.map((item, index) => (
          <div className="product-container-content">
            <div className="product-display">
              <div className="product-image">
                <img src={item.image.url} alt="bag" className="bag-Img" />
              </div>
              <div className="product-description">
                <p className="display-title"> {item.name}</p>
                <a href="#" className="review">
                  Be the first to review this product
                </a>
                <div className="parent-price">
                  <div>
                    <p className="price">
                      ₹ {item.price_range.maximum_price.final_price.value}
                    </p>
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
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      )}
    </div>
  );
};

export default Content;
