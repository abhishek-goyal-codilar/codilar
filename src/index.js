import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";

// const cors = require("cors");

// App.use(
//   cors({
//     origin: "https://cwarmer246.codilar.in//graphql",
//   })
// );

const client = new ApolloClient({
  uri: "https://cwarmer246.codilar.in//graphql",
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
