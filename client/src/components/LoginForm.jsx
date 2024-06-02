import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN_USER, {
    variables: {
      email, password
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login();
      navigate('/workouts')
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Navbar />
      <div className=" landing-content">
        <div className="content">
          <h1>Login</h1>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit" className="button">Login</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
