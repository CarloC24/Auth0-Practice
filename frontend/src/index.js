import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./auth0";
import { Router } from "react-router-dom";
import history from "./history";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};
const client = new ApolloClient({
  uri:
    "http://labby-publi-16y0hyf72koho-280182879.us-east-1.elb.amazonaws.com/labby/dev/",
  headers: {
    "x-api-key": "<API-KEY>"
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
