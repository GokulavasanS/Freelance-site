import React, { useState } from "react";
import HomeIcon from './home.svg';
import Chatbot from './public/Chatbot.svg'
import "./Navbar.css";
import Arrow from './public/RightArrow.svg'

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
          <div className="button">
            Lets talk
          <img src={Arrow} alt="Arrow"/> 
          </div>
          </div>
        </ul>
        {/* <ThemeToggle onThemeChange={handleThemeChange} /> */}
      </nav>
    </div>
  );
};

export default Navbar;
