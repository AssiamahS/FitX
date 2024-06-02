import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar'; 
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import './Landing.css';

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="landing-content">
                <div className="content">
                    <h1>FitX</h1>
                    <div className="image-container">
                        <img className="hero-image" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWF5YjBkM2Rsc2g5ZWxoenRsNHZ3OGxrZjZucjBoZmh5N2sxYWFvdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2kQCAiFgev5Fas87JL/giphy.webp" alt="Logo" />
                    </div>
                    <div className="button-container">
                        <p>Your Ultimate Fitness Companion</p>
                        <NavLink className="button" to="/login">Login</NavLink>
                        <NavLink className="button" to="/register">Register</NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Landing;
