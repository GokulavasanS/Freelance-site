import React, { useState } from "react";
import Logo from "./BrandomLogo.svg";
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
        <div className="logo-title">
          <img src={Logo} alt="Logo" className="image" />
          <h2 className="title">Brandom</h2>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>How we do</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
        <ThemeToggle onThemeChange={handleThemeChange} />
      </nav>
    </div>
  );
};

export default Navbar;
