import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {apiUrl} from '../config';

const httpLink = new HttpLink({
  uri: apiUrl,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export {client};
