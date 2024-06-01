import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div className="logo">~ Fitness X Simplified</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li className="dropdown">
                    <a href="#" className="dropbtn">More</a>
                    <div className="dropdown-content">
                        <Link to="/more#live">Live Coming Soon</Link>
                        <Link to="/more#sponsors">Sponsors</Link>
                        <Link to="/more#events">Events</Link>
                    </div>
                </li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#" className="login">Login</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
