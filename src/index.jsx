import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import { StoreProvider } from "./store";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./common/api/graphql";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
