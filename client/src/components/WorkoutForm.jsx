import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../graphql/mutations';

const WorkoutForm = () => {
  const [formData, setFormData] = useState({
    exercise: '',
    weight: '',
    reps: '',
  });
  const [addWorkout, { data, loading, error }] = useMutation(ADD_WORKOUT);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addWorkout({ variables: formData });
      // Clear the form or perform other actions
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="exercise"
        value={formData.exercise}
        onChange={handleChange}
        placeholder="Exercise"
      />
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Weight"
      />
      <input
        type="number"
        name="reps"
        value={formData.reps}
        onChange={handleChange}
        placeholder="Reps"
      />
      <button type="submit">Add Workout</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default WorkoutForm;