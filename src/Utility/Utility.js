const Api = () => {
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
    const data = await response.json();
    console.log(data);
    return data;
  }

  <div>
    {Object.keys().map((item, index) => (
      <div key={index}>
        <div></div>
      </div>
    ))}{" "}
  </div>;
};
export default Api;
