import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import About from './components/About'; // Import About component
import Events from './components/Events'; // Import Events component
import Blog from './components/Blog'; // Import Blog component
import Contact from './components/Contact'; // Import Contact component
import FreeTrial from './components/FreeTrial'; // Import FreeTrial component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/workout-form" component={WorkoutForm} />
        <Route path="/workouts" component={WorkoutList} />
        <Route path="/about" component={About} /> {/* Route for About page */}
        <Route path="/events" component={Events} /> {/* Route for Events page */}
        <Route path="/blog" component={Blog} /> {/* Route for Blog page */}
        <Route path="/contact" component={Contact} /> {/* Route for Contact page */}
        <Route path="/freetrial" component={FreeTrial} /> {/* Route for FreeTrial page */}
      </Switch>
    </Router>
  );
};

export default App;
