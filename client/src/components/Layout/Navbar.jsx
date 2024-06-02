import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "../../../public/assets/images/hero_logo.png" ;
import heroLogo from "../../../public/assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" style={{ width: 50, height: 50 }} />
      </div>
      <ul className="nav-links">

        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li> {/* Update path to "/about" */}
        <li><NavLink to="/events" activeClassName="active">Events</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/trial" activeClassName="active">FreeTrial</NavLink></li>
        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
        <img src={heroLogo} alt="Hero Logo" style={{ width: 50, height: 50 }} />

      </ul>
    </nav>
  );
};

export default Navbar;
