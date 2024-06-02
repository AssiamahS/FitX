import { useStore } from '../store'
import { Navigate, useLocation } from 'react-router-dom'

function ProtectRoute(props) {
  const location = useLocation()
  const { state } = useStore()

  return (
    props.blockUser ? (
      <>
        {location.pathname.match(/login|register/gi) && state.user ? <Navigate to="/" /> : props.children}
      </>
    ) : (
      <>
        {location.pathname.match(/workouts/gi) && !state.user ? <Navigate to="/login" /> : props.children}
      </>
    )
  )
}

export default ProtectRoute