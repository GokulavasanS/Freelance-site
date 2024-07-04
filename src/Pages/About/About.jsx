import React, { useState, useEffect } from 'react';
import './About.css';



const contentItems = [
  { title: "Our Mission", text: "We aim to provide the best services...",image: "[image]" },
  { title: "Our Vision", text: "We envision a world where...",image: "./public/how-1.svg" },
  { title: "Our Values", text: "Integrity, Innovation, and Excellence...",image: "./public/how-1.svg" },
  { title: "Our Team", text: "We have a diverse team of...",image: "./public/how-1.svg" },
  { title: "Our Story", text: "Founded in 2021, we have...",image: "./public/how-1.svg" },
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
        <h2>{contentItems[currentIndex].title}</h2>
        <p>{contentItems[currentIndex].text}</p>
        <img src={process.env.PUBLIC_URL + contentItems[currentIndex].image} alt={contentItems[currentIndex].title} />
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
