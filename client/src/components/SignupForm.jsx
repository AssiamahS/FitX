import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/mutations'; 


import { useStore } from '../store';

const SignupForm = () => {
  const navigate = useNavigate()
  const { setState } = useStore()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    weight: '',
    goal: '',
    frequency: '',
  });
  const [signup, { data, loading, error }] = useMutation(REGISTER_USER, {
    variables: formData
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup();
      
      setState(oldState => ({
        ...oldState,
        user: data.authenticate
      }))
      // Redirect or perform other actions
      navigate('/workouts')
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Weight"
      />
      <select name="goal" value={formData.goal} onChange={handleChange}>
        <option value="">Select Goal</option>
        <option value="gain">Gain Weight</option>
        <option value="lose">Lose Weight</option>
      </select>
      <select name="frequency" value={formData.frequency} onChange={handleChange}>
        <option value="">Select Frequency</option>
        <option value="3">3 days a week</option>
        <option value="4">4 days a week</option>
      </select>
      <button type="submit">Sign Up</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default SignupForm;