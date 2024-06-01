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

<<<<<<< HEAD
const httpLink = createHttpLink({
  uri: '/graphql',
});
=======
import { useStore } from './store';
>>>>>>> 63059045ddabf5bc9a53c55ce19a69fc8eb193dd

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
<<<<<<< HEAD
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
=======
  const {user} = useStore()
  // const { loading, error, data } = useQuery(GET_POST)
  // if (data) {
  //   console.log(data)
  // }
  return (
    <>
      <header>
        <h3>FitX</h3>
        {user && (
          <p>{user.username}</p>
        )}
      </header>


    {/* <Landing/> */}
      {/* <PostForm /> */}
    
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/workout-form" element={<WorkoutForm/>} />
        <Route path="/workouts" element={<WorkoutList/>} />
      </Routes>
  
>>>>>>> 63059045ddabf5bc9a53c55ce19a69fc8eb193dd
    </>
  );
}

export default App;
