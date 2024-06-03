import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import './WorkoutPage.css'; // Importing CSS file for styling
import WorkoutList from '../components/WorkoutList';
import { GET_WORKOUTS, GET_USERS, GET_USER_WORKOUT } from '../graphql/queries';

function WorkoutPage() {
    const { loading, error, data } = useQuery(GET_USER_WORKOUT);
    const [workoutArr, setWorkoutArr] = useState([])
    // if (!loading) {
    //     console.log(data?.getOneUser.workouts)

    //     const work= data.getOneUser.workouts.map(element => {
    //         return ( element.exercise )
    //     });
    //     setWorkoutArr(work)
    // }
    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;



    return (
        <div className="main-container">
            <div className="sidebar">
                <h1>FitX</h1>
                <NavLink to="/workout-list"><button className="sidebar-button">Workouts</button></NavLink>
                <NavLink to="/badges"><button className="sidebar-button">Badges</button></NavLink>
            </div>
            <div className="content">
                <div className="current-workouts-section">
                    <h2>Current Workouts</h2>
                    <div className="current-workouts-grid">
                        {/* Placeholder for workout cards */}
                        {/* <WorkoutList/> */}
                        {/* {workoutArr.map(element => <div>{element}</div>)} */}
                        {data?.getOneUser.workouts.map((element,index) => {
                            return ( <div key={index} className='workout-card'>  {element.exercise} </div>)
                        })}
                        {/* <div className="workout-card">Air Squats 4 x 20</div>
                        <div className="workout-card">Lunges 4 x 20</div>
                        <div className="workout-card">Backsquats 4 x 10</div>
                        <div className="workout-card">Leg Press 4 x 12</div>
                        <div className="workout-card">Push Ups 4 x 25</div>
                        <div className="workout-card">Shoulder Press 4 x 15</div>
                        <div className="workout-card">Bench Press 4 x 12</div>
                        <div className="workout-card">OH Press 4 x 8</div>
                        <div className="workout-card">Pull Ups 4 x 10</div>
                        <div className="workout-card">Ring Rows 4 x 20</div>
                        <div className="workout-card">Lat Pull Down 4 x 15</div>
                        <div className="workout-card">Cable Rows 4 x 15</div>
                        <div className="workout-card">Sit Ups 4 x 50</div>
                        <div className="workout-card">Crunches 4 x 50</div>
                        <div className="workout-card">Leg Raises 4 x 15</div>
                        <div className="workout-card">Plank 4 x 1min</div> */}
                    </div>
                </div>
                {/* <div className="exercise-section">
                    <h2>Exercise</h2>
                    <div className="exercise-placeholder">
                        
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default WorkoutPage;
