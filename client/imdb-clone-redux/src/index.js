import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import {ApolloProvider} from "@apollo/client";


const container = document.getElementById('root');
const root = createRoot(container);


const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000' }), // Replace with your GraphQL API endpoint
    cache: new InMemoryCache(),
});

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <ApolloProvider client={client}>

                <App />

        </ApolloProvider>
        </Provider>
    </React.StrictMode>
);



