import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from '../src/components/LoginForm';
import SignupForm from '../src/components/SignupForm';
import WorkoutForm from '../src/components/WorkoutForm';
import WorkoutList from '../src/components/WorkoutList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/workout-form" component={WorkoutForm} />
        <Route path="/workouts" component={WorkoutList} />
      </Switch>
    </Router>
  );
};

export default App;