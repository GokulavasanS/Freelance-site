import React, { useState } from "react";
import Logo from "./Brandombluelogo.svg";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <nav className="navbar">
        {/* <div className="logo-title">
          <img src={Logo} alt="Logo" className="image" />
          <h2 className="title">BRANDOM</h2>
        </div> */}
        <ul className="nav-links">
          <li className="link">HOME</li>
          <li className="link">HOW WE DO</li>
          <li className="link">SERVICES</li>
          <li className="link">CONTACT US</li>
          <div className="button">PORTFOLIO</div>
        </ul>
        {/* <ThemeToggle onThemeChange={handleThemeChange} /> */}
      </nav>
    </div>
  );
};

export default Navbar;
