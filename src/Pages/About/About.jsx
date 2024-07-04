import React, { useState, useEffect } from 'react';
import './About.css';

const contentItems = [
  { 
    title: "Our Mission", 
    text: "We aim to provide the best services...", 
    img: "/mission.svg" 
  },
  { 
    title: "Our Vision", 
    text: "We envision a world where...", 
    img: "/mission.svg" 
  },
  { 
    title: "Our Values", 
    text: "Integrity, Innovation, and Excellence...", 
    img: "/mission.svg" 
  },
  { 
    title: "Our Team", 
    text: "We have a diverse team of...", 
    img: "/mission.svg" 
  },
  { 
    title: "Our Story", 
    text: "Founded in 2021, we have...", 
    img: "/mission.svg" 
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      <div className="slide">
        <div className="content">
          <h2>{contentItems[currentIndex].title}</h2>
          <p>{contentItems[currentIndex].text}</p>
        </div>
        <div className="image-container">
          <img src={contentItems[currentIndex].img} alt={contentItems[currentIndex].title} />
        </div>
      </div>
      <div className="indicators">
        {contentItems.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default About;
