import React from 'react';

function Home() {
    return (
        <div className="container">
            <h1>FitX</h1>
            <img className="h-1 lg:w-1" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWF5YjBkM2Rsc2g5ZWxoenRsNHZ3OGxrZjZucjBoZmh5N2sxYWFvdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2kQCAiFgev5Fas87JL/giphy.webp" alt="Logo" />
            <p>Your Ultimate Fitness Companion</p>
            <button className="button" onClick={() => window.location.href='#'}>Login</button>
            <button className="button" onClick={() => window.location.href='#'}>Register</button>
        </div>
    );
}

export default Home;
