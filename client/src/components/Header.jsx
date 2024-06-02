// Switched to NavLink to make the route links work correctly
// The Link component should only be used for external links
import { NavLink } from 'react-router-dom'
import { useStore } from '../store'

import { useMutation } from '@apollo/client'
import { LOGOUT_USER } from '../graphql/mutations'

function Header() {
  const { state, setState } = useStore()
  const [logout] = useMutation(LOGOUT_USER)

  const logoutUser = async () => {
    // Trigger the logoutUser resolver to clear the browser cookie and user_id from the server
    await logout()

    // Reset the global state user value to null, so all the attached components switch to guest view
    setState((oldState) => ({
      ...oldState,
      user: null
    }))
  }

  return (
    <nav>
      <div className="logo">FitX</div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li className="dropdown">
          <span className="dropbtn">More</span>
          <div className="dropdown-content">
            <NavLink to="/live">Live Coming Soon</NavLink>
            <NavLink to="/sponsors">Sponsors</NavLink>
            <NavLink to="/events">Events</NavLink>
          </div>
        </li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {state.user ? (
          <>
            <li>
              <button onClick={logoutUser}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li><NavLink to="/login" className="login">Log In</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Header