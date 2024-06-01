import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';

// import { useStore } from '../store';

const LoginForm = () => {
  const navigate = useNavigate()
  // const { setState } = useStore()
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

      // setState(oldState => ({
      //   ...oldState,
      //   user: data.authenticate
      // }))

      navigate('/workouts')
      // Redirect or perform other actions
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default LoginForm;