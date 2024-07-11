import React, { useState } from 'react';
import './Navbar.css';
import Home from './icons/home.svg';
import About from './icons/about.svg';
import Services from './icons/service.svg';
import Portfolio from './icons/portfolio.svg';
import Contact from './icons/contact.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (document.querySelector('.header-show')) {
      toggleNavbar();
    }
  };

  return (
    <div className="navbar">
      <nav className="navmenu">
        <ul>
          <li><a href="#home" className={`active ${isOpen ? 'dropdown-active' : ''}`} onClick={handleClick}><img src={Home} className="navicon" alt="Home" /><span>Home</span></a></li>
          <li><a href="#about" className={`${isOpen ? 'dropdown-active' : ''}`} onClick={handleClick}><img src={About} className="navicon" alt="About" /><span>About</span></a></li>
          <li><a href="#portfolio" className={`${isOpen ? 'dropdown-active' : ''}`} onClick={handleClick}><img src={Portfolio} className="navicon" alt="Portfolio" /><span>Portfolio</span></a></li>
          <li><a href="#services" className={`${isOpen ? 'dropdown-active' : ''}`} onClick={handleClick}><img src={Services} className="navicon" alt="Services" /><span>Services</span></a></li>
          <li><a href="#contact" className={`${isOpen ? 'dropdown-active' : ''}`} onClick={handleClick}><img src={Contact} className="navicon" alt="Contact" /><span>Contact</span></a></li>
        </ul>
      </nav>
      <div className="header-toggle" onClick={toggleNavbar}>
        {isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </div>
    </div>
  );
};

export default Navbar;