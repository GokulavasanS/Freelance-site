import React, { useState } from 'react';
import './Navbar.css';
import HomeIcon from './icons/home.svg';
import AboutIcon from './icons/about.svg';
import ServicesIcon from './icons/service.svg';
import PortfolioIcon from './icons/portfolio.svg';
import ContactIcon from './icons/contact.svg';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="navbar">
      <nav className="navmenu">
        <ul>
          <li>
            <a href="#home"
               className={`nav-link ${hoveredItem === 'home' ? 'active' : ''}`}
               onMouseEnter={() => handleMouseEnter('home')}
               onMouseLeave={handleMouseLeave}>
              <img src={HomeIcon} className="navicon" alt="Home" />
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#about"
               className={`nav-link ${hoveredItem === 'about' ? 'active' : ''}`}
               onMouseEnter={() => handleMouseEnter('about')}
               onMouseLeave={handleMouseLeave}>
              <img src={AboutIcon} className="navicon" alt="About" />
              <span className="nav-text">About</span>
            </a>
          </li>
          <li>
            <a href="#portfolio"
               className={`nav-link ${hoveredItem === 'portfolio' ? 'active' : ''}`}
               onMouseEnter={() => handleMouseEnter('portfolio')}
               onMouseLeave={handleMouseLeave}>
              <img src={PortfolioIcon} className="navicon" alt="Portfolio" />
              <span className="nav-text">Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#services"
               className={`nav-link ${hoveredItem === 'services' ? 'active' : ''}`}
               onMouseEnter={() => handleMouseEnter('services')}
               onMouseLeave={handleMouseLeave}>
              <img src={ServicesIcon} className="navicon" alt="Services" />
              <span className="nav-text">Services</span>
            </a>
          </li>
          <li>
            <a href="#contact"
               className={`nav-link ${hoveredItem === 'contact' ? 'active' : ''}`}
               onMouseEnter={() => handleMouseEnter('contact')}
               onMouseLeave={handleMouseLeave}>
              <img src={ContactIcon} className="navicon" alt="Contact" />
              <span className="nav-text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
