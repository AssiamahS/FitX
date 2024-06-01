import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import More from './components/More';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><NavBar /><Home /></>} />
        <Route path="/about" element={<><NavBar /><About /></>} />
        <Route path="/contact" element={<><NavBar /><Contact /></>} />
        <Route path="/more" element={<><NavBar /><More /></>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
