import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { offsetLimitPagination } from "@apollo/client/utilities";

const token = process.env.YELP_API_KEY;

axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

const httpLink = createHttpLink({
  uri: "/v3/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "Accept-Language": "en-US",
    },
  };
});

const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
