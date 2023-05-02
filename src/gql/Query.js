import { gql } from "@apollo/client";

export const getData = gql`
  query getData {
    products(
      # search: "Crown Summit Backpack"
      filter: { sku: { eq: "24-MB03" } }
      pageSize: 20
      currentPage: 1
      sort: {}
    ) {
      items {
        name
        image {
          label
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
`;
