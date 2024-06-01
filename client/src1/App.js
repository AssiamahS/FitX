import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from '../src/components/LoginForm';
import SignupForm from '../src/components/SignupForm';
import WorkoutForm from '../src/components/WorkoutForm';
import WorkoutList from '../src/components/WorkoutList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/workout-form" element={<WorkoutForm />} />
        <Route path="/workouts" element={<WorkoutList />} />
      </Routes>
    </Router>
  );
};

export default App;