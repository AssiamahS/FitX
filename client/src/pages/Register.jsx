// You don't need to import React when using the newest version of ReactJS
import { NavLink, useNavigate } from 'react-router-dom';
import { GraphQLError } from 'graphql';

import './AuthForm.css';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/mutations';

import { useStore } from '../store';

const Register = () => {
    // The navigate object allows us to trigger routes
    const navigate = useNavigate()
    // Pull the setState setter function in from our global state in the store.jsx file
    // Head to that file to see how it's set up
    const { setState } = useStore()
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [registerUser, { error }] = useMutation(REGISTER_USER);

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
            const { data } = await registerUser({
                variables: { ...formState },
            });

            console.log(data)

            setState((oldState) => ({
                ...oldState,
                user: data.registerUser
            }))

            // Navigate them over to the Landing page after the form submits
            navigate('/')
        } catch (e) {
            // Use the GraphQL error to allow our auth error in the html to trigger
            new GraphQLError(e)
        }
    };

    return (
        <div className="container">

            <div className="content">
                <div className="register-box">
                    <h2>Register</h2>
                    <p>Please fill in the details to create an account.</p>
                    {error && <p className="auth-error">{error.message}</p>}
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
                            autoComplete="on"
                            name="password" />
                        <button type="submit">Register</button>

                        <NavLink className="auth-link" to="/login">Click Here To Log In</NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
