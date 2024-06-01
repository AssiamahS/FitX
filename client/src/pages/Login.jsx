import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <nav>
                <div className="logo">FitX</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li className="dropdown">
                        <span className="dropbtn">More</span>
                        <div className="dropdown-content">
                            <Link to="/live">Live Coming Soon</Link>
                            <Link to="/sponsors">Sponsors</Link>
                            <Link to="/events">Events</Link>
                        </div>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login" className="login">Login</Link></li>
                </ul>
            </nav>
            <div className="content">
                <div className="login-box">
                    <h2>Login</h2>
                    <p>Please input your username and password.</p>
                    <form>
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
