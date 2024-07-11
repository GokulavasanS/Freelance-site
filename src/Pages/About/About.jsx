import React, { useState, useEffect } from 'react';
import './About.css';

const contentItems = [
  { 
    title: "How we work Our work flow and tools", 
    text: "Our process always focuses on on-time delivery of quality software to the utmost satisfaction of our customer which has passed rounds of complex testing. To assist us through this process we utilize different tools and workflow to help track our progress.", 
    img: "/aboutus.svg" 
  },
  { 
    title: "Initial Discussion", 
    text: "During the first contact, we want to learn your business goals and product vision and collect the information on the most important functionalities. We also answer the first questions and inform you about the predicted project cost. We review the materials you provide and form a team that will conduct the project analysis..", 
    img: "/aboutus.svg" 
  },
  { 
    title: "Scope Conformation", 
    text: "During this stage we would like to establish what the plans were made on the initial discussion and bring together structure to the project so that both we and the client can accept. This includes all the technical functionalities and screen or page by page expectations and a technical document is created so that we can agree upon and start our initial work.", 
    img: "/aboutus.svg" 
  },
  { 
    title: "BrainStorming", 
    text: "During this stage we would like to establish what the plans were made on the initial discussion and bring together structure to the project so that both we and the client can accept. This includes all the technical functionalities and screen or page by page expectations and a technical document is created so that we can agree upon and start our initial work.", 
    img: "/aboutus.svg" 
  },
  { 
    title: "Development", 
    text: "Multiple teams work on different aspects of the project development and serious testing will be undergoing, both from the technical as well as the functional streams. During this stage we would be releasing the software for the customer to be tested as well so as to take feedback and incorporate them to already done or the upcoming tasks.", 
    img: "/aboutus.svg" 
  },
  { 
    title: "UAT and Testing", 
    text: "At this stage we would create the UAT server and deploy the built solution into it for the customer to be tested and simultaneously out technical testing team would be doing rigorous load tests, functionality and technical glit testing just to eliminate any issues prevailing in the system. This process continues until the customer agrees and certifies with confidence that the application is ready to be moved to the next stage.", 
    img: "/aboutus.svg" 
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
          <h2 className='head'>{contentItems[currentIndex].title}</h2>
          <p className='para'>{contentItems[currentIndex].text}</p>
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
        <div className="image-container">
          <img src={contentItems[currentIndex].img} alt={contentItems[currentIndex].title} />
        </div>
      </div>
    </div>
  );
};

export default About;
