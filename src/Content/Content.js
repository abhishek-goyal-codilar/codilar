import React from "react";
import "./content.css";
import { useState, useEffect } from "react";

const Content = () => {
  const [data, setData] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleButtonClick = (buttonId, text) => {
    setSelectedButton(buttonId);
    setDisplayText(text);
  };

  useEffect(() => {
    ApiUtil(`
    query {
      products(
        filter: {            
          sku: { eq: "24-MB03" } }
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
          reviews {
            items {
              summary
              ratings_breakdown {
                value
              }
              nickname
              created_at
              text
            }
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
                <h1 className="display-title">{item.name}</h1>
                <a href="#" className="review">
                  Be the first to review this product
                </a>
                <div className="product-info-price">
                  <p className="price">
                    ₹ {item.price_range.maximum_price.final_price.value}
                  </p>
                  <div className="price-tag">
                    <div className="instock-parent">
                      <p className="instock"> IN STOCK</p>
                    </div>
                    <div>
                      <p className="SKU">SKU#: 24-MB03</p>
                    </div>
                  </div>
                </div>

                <div className="quantity-parent">
                  <label className="quanity">Qty</label>
                </div>
                <div className="quanity-number">
                  <input type="text" className="quantitynumber" value={1} />
                </div>
                <div className="button-parent">
                  <button className="addtocart">Add to Cart</button>
                </div>

                <div className="wishlist">
                  <div className="icon-class">
                    <i class="fa-sharp fa-solid fa-heart"></i>
                    <p className="wishlist-text">ADD TO WISH LIST</p>
                  </div>
                  <div className="icon-class">
                    <i class="fa-sharp fa-solid fa-chart-simple"></i>
                    <p className="wishlist-text">ADD TO COMPARE</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                disabled={disabled}
                className="product-info-more-button"
                onClick={() =>
                  handleButtonClick(
                    1,
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description.html,
                      }}
                    />
                  )
                }
              >
                Details
              </button>
              <button
                className="product-info-more-button"
                onClick={() =>
                  handleButtonClick(
                    2,
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <th>Activity</th>
                            <td>
                              Gym, Hiking, Overnight, School, Trail, Travel,
                              Urban
                            </td>
                          </tr>
                          <tr>
                            <th>Style</th>
                            <td>Backpack</td>
                          </tr>
                          <tr>
                            <th>Material</th>
                            <td class="col data">Nylon, Polyester</td>
                          </tr>
                          <tr>
                            <th>Strap/Handle</th>
                            <td class="col data">Adjustable, Double, Padded</td>
                          </tr>
                          <tr>
                            <th>Features</th>
                            <td>
                              Audio Pocket, Waterproof, Lightweight, Reflective,
                              Laptop Sleeve
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )
                }
              >
                More Information
              </button>
              <button
                className="product-info-more-button"
                onClick={() =>
                  handleButtonClick(
                    3,
                    <div>
                      <div class="block-title">
                        <p className="Customer-reviews">Customer Reviews</p>
                      </div>
                      {item.reviews.items.map((review) => {
                        return (
                          <ol>
                            <li>
                              <p>{review.summary}</p>
                              <p>{review.value}</p>
                              <p>{review.name}</p>
                              <p>{review.text}</p>
                              <p>Review by {review.nickname}</p>
                              {/* <p>{review.created_at}</p> */}
                            </li>
                          </ol>
                        );
                      })}
                    </div>
                  )
                }
              >
                Reviews
              </button>
              <div>{selectedButton && <p>{displayText}</p>}</div>
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
