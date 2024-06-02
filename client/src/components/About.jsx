import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import './About.css'; // Import CSS file

const About = () => {
  return (
    <>
      <Navbar />
      <div className="landing-content">
        <div className="content">
          <h1>About Us</h1>
          <p>Welcome to our fitness community!</p>
          <p>We strive to provide you with the best tools and resources to help you achieve your fitness goals.</p>
          <p>Join us today and start your journey to a healthier lifestyle.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
