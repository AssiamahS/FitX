import { NavLink, useNavigate } from 'react-router-dom';

// Updated the css file to be generic between Login and Register
import './AuthForm.css';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { GraphQLError } from 'graphql';
import { LOGIN_USER } from '../graphql/mutations';

import { useStore } from '../store';


const LogIn = () => {
    const navigate = useNavigate()
    // Pull the setState setter function in from our global state in the store.jsx file
    // Head to that file to see how it's set up
    const { setState } = useStore()
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await loginUser({
                variables: { ...formState },
            });

            setState((oldState) => ({
                ...oldState,
                user: data.loginUser
            }))

            // Navigate them over to the Landing page after the form submits
            navigate('/workouts')
        } catch (e) {
            new GraphQLError(e)
        }
    };

    return (
        <div className="container">

            <div className="content">
                <div className="register-box">
                    <h2>Log In</h2>
                    <p>Please fill in the details to log into your account.</p>
                    {error && <p className="auth-error">{error.message}</p>}
                    <form onSubmit={handleFormSubmit}>
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
                            autoComplete="on"
                            name="password" />
                        <button type="submit">Log In</button>
                        <NavLink className="auth-link" to="/register">Click Here To Register</NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
