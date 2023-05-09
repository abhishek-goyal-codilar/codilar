import React from "react";
import "./content.css";
import { useState, useEffect } from "react";

const Content = () => {
  const [data, setData] = useState(null);
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
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
                className={`product-info-more-button ${
                  activeButton === 1 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Details
              </button>

              <button
                className={`product-info-more-button ${
                  activeButton === 2 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                More Information
              </button>

              <button
                className={`product-info-more-button ${
                  activeButton === 3 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(3)}
              >
                Reviews (3)
              </button>

              <div>
                {activeButton === 1 && (
                  <div className="product-info-description">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description.html,
                      }}
                    />
                  </div>
                )}
                {activeButton === 2 && (
                  <div className="product-info-description">
                    <table>
                      <tbody>
                        <tr>
                          <th className="column-head" scope="row">
                            Activity
                          </th>
                          <td className="column-data" data-th="Activity">
                            Gym, Hiking, Overnight, School, Trail, Travel, Urban
                          </td>
                        </tr>
                        <tr>
                          <th className="column-head" scope="row">
                            Style
                          </th>
                          <td className="column-data" data-th="Activity">
                            Backpack
                          </td>
                        </tr>
                        <tr>
                          <th className="column-head" scope="row">
                            Material
                          </th>
                          <td className="column-data" data-th="Activity">
                            Nylon, Polyester
                          </td>
                        </tr>
                        <tr>
                          <th className="column-head" scope="row">
                            Strap/Handle
                          </th>
                          <td className="column-data" data-th="Activity">
                            Adjustable, Double, Padded
                          </td>
                        </tr>
                        <tr>
                          <th className="column-head" scope="row">
                            Features
                          </th>
                          <td className="column-data" data-th="Activity">
                            Audio Pocket, Waterproof, Lightweight, Reflective,
                            Laptop Sleeve
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {activeButton === 3 && (
                  <div className="product-info-description">
                    <p className="list-item-header">Customer Review</p>
                    {item.reviews.items.map((review, index) => {
                      return (
                        <ol key={index} className="order-list-info">
                          <li className="list-item-info">
                            <p className="review-header">{review.summary}</p>
                            <div className="c">
                              <div className="a">
                                <p className="review-rating">Rating </p>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </div>
                              {/* <p>{review.ratings_breakdown.name}</p> */}
                              <div className="b">
                                <p className="review-description">
                                  {review.text}
                                </p>
                                <p>Review by {review.nickname}</p>
                                <p>{review.created_at}</p>
                              </div>
                            </div>
                          </li>
                        </ol>
                      );
                    })}
                    <div className="review-form">
                      <form>
                        <p>You're reviewing:</p>
                        <h2> Crown Summit Backpack</h2>
                        <div>
                          <p className="rating-heding">Your Rating*</p>
                        </div>
                        <p>Rating</p>
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="label-nickname">Nickname *</p>
                        <input className="input-nickname" />
                        <p className="label-summary">Summary *</p>
                        <input className="input-summary" />
                        <p className="label-review">Review *</p>
                        <input className="input-review" />
                        <div>
                          <button className="submit-review-btn">
                            Submit Review
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
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
