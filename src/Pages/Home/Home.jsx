import React, { useState } from "react";
import './Home.css';
import AnimatedBg from "../../Components/Header/AnimatedBg";
import ThemeToggle from "../../Components/Header/ThemeToggle";

const Home = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <ThemeToggle onThemeChange={handleThemeChange} />
      <div className="home-container">
        <AnimatedBg theme={theme} />
        <div className="content">
          <h1>EVOLVE . INITIATE . EXPAND</h1>
          <p>We are a team of talented designers</p>
          <button className='btn'>Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
