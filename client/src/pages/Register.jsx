import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/mutations';
import Auth from '../utils/auth';


const Register = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [createUser, { error, data }] = useMutation(REGISTER_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await createUser({
                variables: { ...formState },
            });

            console.log(data)

            Auth.login(data.createUser.token);
        } catch (e) {
            console.error(e);
        }
    };

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
                <div className="register-box">
                    <h2>Register</h2>
                    <p>Please fill in the details to create an account.</p>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text"
                            placeholder="Username"
                            required value={formState.name}
                            onChange={handleChange}
                            name="username" />
                        <input
                            type="email"
                            placeholder="Email"
                            required value={formState.email}
                            onChange={handleChange}
                            name="email" />
                        <input
                            type="password"
                            placeholder="Password"
                            required value={formState.password}
                            onChange={handleChange}
                            name="password" />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
