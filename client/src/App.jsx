import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes along with Route
// import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { Outlet } from 'react-router-dom';

// Import your components here
import BadgesPage from './pages/Badges';
import LoginForm from '../src/components/LoginForm';
// import SignupForm from '../src/components/SignupForm';
import WorkoutForm from '../src/components/WorkoutForm';
import WorkoutList from '../src/components/WorkoutList';
import Landing from './pages/Landing';
import Register from './pages/Register'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <h1>Main Base</h1>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/workout-form" element={<WorkoutForm />} />
          <Route path="/workouts" element={<WorkoutList />} />
          <Route path="/badges" element={<BadgesPage />} />
        </Routes>
      </ApolloProvider>
    </>
  );
}

export default App;
