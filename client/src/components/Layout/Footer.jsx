import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-names">
                <a href="https://github.com/dellman000">
                    <img src="https://img.shields.io/badge/Kendall-dellman000-orange?style=flat-square&logo=github" alt="GitHub badge for Kendall" />
                </a>
                <a href="https://github.com/jv0321">
                    <img src="https://img.shields.io/badge/Juan%20J%20Vergas-jv0321-orange?style=flat-square&logo=github" alt="GitHub badge for Juan" />
                </a>
                <a href="https://github.com/jv0321">
                    <img src="https://img.shields.io/badge/Sylvester-AssiamahS-orange?style=flat-square&logo=github" alt="GitHub badge for Sylvester" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
