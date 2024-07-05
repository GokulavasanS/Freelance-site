import React, { useState } from "react";
import HomeIcon from './Home-Icon.svg';
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="small">
        <div className="logo-title">
          <img src={HomeIcon} alt="Home Icon" className="home-icon" />
        </div>
        <ul className="nav-links">
          <li className="home">HOME</li>
          <li className="about">HOW WE DO</li>
          <li className="services">SERVICES</li>
          <li className="contact">CONTACT US</li>
          <div className="button">PORTFOLIO</div>
        </ul>
        {/* <ThemeToggle onThemeChange={handleThemeChange} /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
