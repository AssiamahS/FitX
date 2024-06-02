import { Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes along with Route

import Header from './components/Header.jsx';

// Import your components here
import BadgesPage from './pages/Badges';
import Login from '../src/pages/Login';
// import SignupForm from '../src/components/SignupForm';
import WorkoutForm from '../src/components/WorkoutForm';
// import WorkoutList from '../src/components/WorkoutList';
import Landing from './pages/Landing';
import Register from './pages/Register';
import WorkoutPage from './pages/WorkoutsPage.jsx';

import ProtectRoute from './components/ProtectRoute.jsx';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={(
          <ProtectRoute blockUser={true}>
            <Login />
          </ProtectRoute>
        )} />
        {/* We use the ProtectRoute component to block users from viewing the register or login pages */}
        <Route path="/register" element={(
          <ProtectRoute blockUser={true}>
            <Register />
          </ProtectRoute>
        )} />
        {/* We use the ProtectRoute component to block guests from viewing user pages */}
        <Route path="/workout-form" element={(
          <ProtectRoute blockUser={false}>
            <WorkoutForm />
          </ProtectRoute>
        )} />
        <Route path="/workouts" element={(
          <ProtectRoute blockUser={false}>
            <WorkoutPage />
          </ProtectRoute>
        )} />
        <Route path="/badges" element={<BadgesPage />} />
      </Routes>
    </>
  );
}

export default App;