import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isActive, setActive] = useState(false);

  const openHam = () => {
    setActive(!isActive);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <>
      <div className={`hamburger-menu ${isActive ? 'change' : ''}`} onClick={openHam}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <div className={`header-links-container ${isActive ? 'change' : ''}`}>
        <div className="header-links">
          <a href="/" onClick={closeMenu}>Luxury Suites</a>
          <a href="/" onClick={closeMenu}>Exclusive Clubs</a>
          <a href="/" onClick={closeMenu}>Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Header;
