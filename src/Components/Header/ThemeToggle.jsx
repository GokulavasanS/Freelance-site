import React, { useState, useEffect } from 'react';
import SunIcon from './sun.svg';
import MoonIcon from './moon.svg';
import './ThemeToggle.css';

const ThemeToggle = ({ onThemeChange }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    onThemeChange(theme); // Notify parent component about theme change
  }, [theme, onThemeChange]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? (
        <img src={SunIcon} alt="Sun Icon" className="icon" />
      ) : (
        <img src={MoonIcon} alt="Moon Icon" className="icon" />
      )}
    </div>
  );
};

export default ThemeToggle;
