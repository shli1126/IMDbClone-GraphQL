import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const CustomApolloProvider = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

export default CustomApolloProvider;


