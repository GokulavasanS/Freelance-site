import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./GEEKZ.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const links = document.querySelectorAll("ul li");
    links.forEach((link) => {
      link.classList.remove("active");
      const sectionId = link.getAttribute("data-section");
      if (sectionId) {
        const section = document.querySelector(sectionId) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const scrollPosition = window.pageYOffset;

          if (
            scrollPosition >= sectionTop - sectionHeight / 3 &&
            scrollPosition <= sectionTop + sectionHeight / 3
          ) {
            link.classList.add("active");
            setActiveLink((link as HTMLElement).innerText);
          }
        }
      }
    });

    // Change background color on scroll
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li data-section="#home">
          <a href="#home">Home</a>
        </li>
        <li data-section="#about">
          <a href="#about">About Us</a>
        </li>
        <li data-section="#services">
          <a href="#services">Services</a>
        </li>
        <li data-section="#contactus">
          <a href="#contactus">Contact Us</a>
        </li>
        <li>
          <Link to="/portfolio">
            <button className="btn">Portfolio</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
