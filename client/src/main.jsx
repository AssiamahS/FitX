
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import WorkoutPage from './pages/WorkoutsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/register',
        element: <Register />
      }, {
        path: '/workouts',
        elements: <WorkoutPage />
      //   path: '/profiles/:username',
      //   element: <Profile />
      // }, {
      //   path: '/me',
      //   element: <Profile />
      // }, {
      //   path: '/thoughts/:thoughtId',
      //   element: <SingleThought />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
