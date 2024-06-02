import React from 'react';
import './Landing.css';
import { useStore } from '../store';


const Landing = () => {
    const { state } = useStore();

    return (
        <div className="container">
            <div className="header">
                <h2>~ Fitness X Simplified</h2>
            </div>
            <div className="content">
                <h1>FitX</h1>
                <img className="hero-image" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWF5YjBkM2Rsc2g5ZWxoenRsNHZ3OGxrZjZucjBoZmh5N2sxYWFvdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2kQCAiFgev5Fas87JL/giphy.webp" alt="Logo" />
                <p>Your Ultimate Fitness Companion</p>
                {state.user ? (
                    <>
                        {/* Add whatever elements/content you want to show a logged in user here */}
                        <p>Welcome, {state.user.username}!</p>
                    </>
                ) : (
                    <>
                        <button className="button" onClick={() => window.location.href = '/login'}>Login</button>
                        <button className="button" onClick={() => window.location.href = '/register'}>Register</button>
                    </>
                )}
            </div>
            <div className="footer">
                <a href="https://github.com/dellman000">
                    <img src="https://img.shields.io/badge/Kendall-dellman000-orange?style=flat-square&logo=github" alt="GitHub badge for Kendall" />
                </a>
                <a href="https://github.com/jv0321">
                    <img src="https://img.shields.io/badge/Jennie-jv0321-orange?style=flat-square&logo=github" alt="GitHub badge for Jennie" />
                </a>
                <a href="https://github.com/jv0321">
                    <img src="https://img.shields.io/badge/Juan%20Vergas-jv0321-orange?style=flat-square&logo=github" alt="GitHub badge for Juan Vergas" />
                </a>
            </div>
        </div>
    );
};

export default Landing;
