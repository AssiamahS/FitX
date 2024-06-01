import React from 'react';
import './Badges.css';

const Badges = () => {
    return (
        <div className="main-container">
            <div className="sidebar">
                <h1>FitX</h1>
                <button className="sidebar-button">Workouts</button>
                <button className="sidebar-button">Current Workouts</button>
            </div>
            <div className="content">
                <div className="badges-section">
                    <h2>Badges</h2>
                    <div className="badges-grid">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="badge"></div>
                        ))}
                    </div>
                </div>
                <div className="exercise-section">
                    <h2>Personal Best</h2>
                    <div className="exercise-placeholder">
                        <p>Milestone | 1. 40 pushups | 2. 39 pushups | 3. 15 pushups</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Badges;
