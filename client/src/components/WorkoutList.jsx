import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WORKOUTS,GET_USERS ,GET_USER_WORKOUT} from '../graphql/queries';
import './WorkoutList.css'
import WorkoutItem from './WorkoutItem';


const WorkoutList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  // const [work]=useQuery(GET_USER_WORKOUT)
console.log(data)
console.log("bgvhdjbglibgjs")
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;



  const workouts = [
    {
      "_id": "1",
      "exercise": "Squats",
      "weight": 100,
      "reps": 10,
      "DayOfWeek": "Monday"
    },
    {
      "_id": "2",
      "exercise": "Bench Press",
      "weight": 80,
      "reps": 8,
      "DayOfWeek": "Wednesday"
    },
    {
      "_id": "3",
      "exercise": "Deadlifts",
      "weight": 120,
      "reps": 6,
      "DayOfWeek": "Friday"
    },
    {
      "_id": "4",
      "exercise": "Dumbbell Shoulder Press",
      "weight": 20,
      "reps": 12,
      "DayOfWeek": "Monday"
    },
    {
      "_id": "5",
      "exercise": "Barbell Rows",
      "weight": 60,
      "reps": 8,
      "DayOfWeek": "Wednesday"
    },
    {
      "_id": "6",
      "exercise": "Lunges",
      "weight": 0,
      "reps": 16,
      "DayOfWeek": "Friday"
    },
    {
      "_id": "7",
      "exercise": "Plank",
      "weight": 0,
      "reps": 60,
      "DayOfWeek": "Monday"
    },
    {
      "_id": "8",
      "exercise": "Russian Twists",
      "weight": 0,
      "reps": 20,
      "DayOfWeek": "Wednesday"
    }
  ];

  return (
    <div className="workout-list-container">

    <h2>Workouts</h2>
    <ul>
      {workouts.map((workout) => (
        <li key={workout._id}>
          {workout.exercise} - {workout.weight}kg x {workout.reps} reps
        </li>

        
      ))}
    </ul>
  </div>
  );
};

export default WorkoutList