import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WORKOUTS,GET_USERS } from '../graphql/queries';


const WorkoutList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {data.workouts.map((workout) => (
          <li key={workout._id}>
            {workout.exercise} - {workout.weight}kg x {workout.reps} reps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList