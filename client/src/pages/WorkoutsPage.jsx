// WorkoutPage.jsx

import React from 'react';
import './WorkoutPage.css'; // Importing CSS file for styling

function WorkoutPage() {
    return (
        <div className="main-container">
            <div className="sidebar">
                <h1>FitX</h1>
                <button className="sidebar-button">Workouts</button>
                <button className="sidebar-button">Badges</button>
            </div>
            <div className="content">
                <div className="current-workouts-section">
                    <h2>Current Workouts</h2>
                    <div className="current-workouts-grid">
                        {/* Placeholder for workout cards */}
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                        <div className="workout-card"></div>
                    </div>
                </div>
                <div className="exercise-section">
                    <h2>Exercise</h2>
                    <div className="exercise-placeholder">
                        {/* Placeholder for exercise content */}
                        <p>Exercise content goes here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkoutPage;
