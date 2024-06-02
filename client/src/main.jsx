
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'

// Switched to the clean BrowserRouter component to initialize the React Router
import { BrowserRouter } from 'react-router-dom';

// Pulled the Apollo Client into main to get the clutter out of App.jsx
// I also added some error handling so you can now see more descriptive errors from GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

// Pulled in the StoreProvider to give the entire app and all components access to the global state in the store/index.jsx file
import { StoreProvider } from './store'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

const httpLink = new HttpLink({
  uri: '/graphql',
})

// This new client object combines the error handling link and the httpLink together to provide better console errors
// I removed the auth link as you don't need that when using cookies to store the JWT in the browser
const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
})


ReactDOM.createRoot(document.getElementById('root')).render(
  // We wrap all providers around the App component so all components can use the router and global state
  <ApolloProvider client={client}>
    <BrowserRouter>
      {/* If you want to see where this component was created, right click on the tag and hit "go to definition"*/}
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </ApolloProvider>
)
