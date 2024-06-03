import { useStore } from '../store'
import { Navigate, useLocation } from 'react-router-dom'

// This is a "provider" component that returns child components passed to it (ie. <Register />) or a <Navigate /> component if we determine they shouldn't view that route
function ProtectRoute(props) {
  const location = useLocation()
  const { state } = useStore()

  return state.loading ? <></> : 
    props.loggedInUserView ?
        // Block guests from viewing the workout pages
        location.pathname.match(/workouts/gi) && !state.user ? <Navigate to="/login" /> : props.children
        :
        // Block users from viewing the authentication pages
        location.pathname.match(/login|register/gi) && state.user ? <Navigate to="/" /> : props.children
}

export default ProtectRoute