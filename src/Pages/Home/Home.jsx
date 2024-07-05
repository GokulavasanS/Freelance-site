import React, { useState, useEffect } from "react";
import "./Home.css";
import AnimatedBg from "../../Components/Header/AnimatedBg";
import Logo from "./Brandomblue.svg";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options).split(' ')[0];
  };

  const formatAmPm = (date) => {
    return date.getHours() >= 12 ? 'pm' : 'am';
  };

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <div className="home-container">
        <div className="header">
          <div className="logo-title">
            <img src={Logo} alt="Logo" className="home-logo" />
            <h2 className="home-title">BRANDOM</h2>
          </div>
          <div className="date">
            <div className="date_column">
              <p id="time" className="date_time">{formatTime(currentTime)}</p>
            </div>
            <div className="date_column">
              <p id="ampm" className="date_am-pm">{formatAmPm(currentTime)}</p>
              <p id="date" className="date_date">{formatDate(currentTime)}</p>
            </div>
          </div>
        </div>
        <AnimatedBg />
        <div className="content">
          <h1>EVOLVE . INITIATE . EXPAND</h1>
          <p>We are a team of talented designers</p>
          <button className="btn">Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
