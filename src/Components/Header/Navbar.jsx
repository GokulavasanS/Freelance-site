import React, { useState } from "react";
import HomeIcon from './home.svg';
import Chatbot from './public/Chatbot.svg'
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
        <div className="home">
          <img src={HomeIcon} alt="Home Icon"/>
        </div>
          <div className="text">
          <li className="link">HOW WE DO</li>
          <li className="link">SERVICES</li>
          <li className="link">CONTACT US</li>
          </div>
          <div className="button">
          <img src={Chatbot} alt="Chatbot Icon"/> 
          </div>
        </ul>
        {/* <ThemeToggle onThemeChange={handleThemeChange} /> */}
      </nav>
    </div>
  );
};

export default Navbar;
