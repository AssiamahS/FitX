import { useQuery, gql } from '@apollo/client';
// import { PostForm } from './pages/PostForm';
// import { GET_POST } from './graphql/queries'
import { Route, Routes ,NavLink} from 'react-router-dom';
// import { SinglePost } from './pages/SinglePost';
// import Landing  from './pages/Landing';
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../src/components/LoginForm';
import SignupForm from '../src/components/SignupForm';
import WorkoutForm from '../src/components/WorkoutForm';
import WorkoutList from '../src/components/WorkoutList';



function App() {
  // const { loading, error, data } = useQuery(GET_POST)
  // if (data) {
  //   console.log(data)
  // }
  return (
    <>
      <h1>Main Base</h1>

    {/* <Landing/> */}
      {/* <PostForm /> */}
    
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/workout-form" element={<WorkoutForm/>} />
        <Route path="/workouts" element={<WorkoutList/>} />
      </Routes>
  
    </>
  )
}

export default App
