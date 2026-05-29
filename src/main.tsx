import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./index.css"; //tailwind css style sheet

// use Apollo graphql 
import { ApolloProvider } from "@apollo/client/react";
import client from "../src/lib/apollo"
const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App/>
    </ApolloProvider>
  </React.StrictMode>
);