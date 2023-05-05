// import { useState, useEffect } from "react";

// const Api = () => {
//   const [data, setData] = useState(null);

//   async function ApiUtil(query) {
//     const response = await fetch("/graphql", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         query,
//       }),
//     });
//     const { data } = await response.json();
//     setData(data);
//     console.log(data);
//   }

//   useEffect(() => {
//     ApiUtil(`
//     query APIDATA {
//         products(
//           filter: { sku: { eq: "24-MB03" } }
//           pageSize: 20
//           currentPage: 1
//           sort: {}
//         ) {
//           items {
//             name
//             image {
//               url
//             }
//             price_range {
//               maximum_price {
//                 final_price {
//                   value
//                 }
//               }
//             }
//             description {
//               html
//             }
//             reviews {
//               items {
//                 summary
//                 ratings_breakdown {
//                   value
//                 }
//                 nickname
//                 created_at
//                 text
//               }
//             }
//           }
//         }
//       }
//     `);
//   }, []);

//   return (
//     <div>
//       {data ? (
//         data.products.items.map((item, index) => (
//           <div key={index}>
//             <div>{item.name}</div>
//             <img src={item.image.url} alt={item.name} />
//             <div>{item.price_range.maximum_price.final_price.value}</div>
//             <div dangerouslySetInnerHTML={{ __html: item.description.html }} />
//           </div>
//         ))
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default Api;
