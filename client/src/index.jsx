import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import WorkoutPage from './pages/WorkoutsPage';
import BadgesPage from './pages/Badges';
// import './index.css';
import { Routes } from 'react-router-dom'; // Import Routes only once

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/workouts" component={WorkoutPage} />
            <Route path="/badges" component={BadgesPage} />
        </Routes>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
