import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./GEEKZ.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li data-section="#home">Home</li>
        <li data-section="#About">About Us</li>
        <li data-section="#portfolio">Portfolio</li>
        <li data-section="#services">Services</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
