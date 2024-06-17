// src/Services.tsx
//import React from 'react';
import './Service.css';

const Services = () => {
  return (
    <div className="services">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-container">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="service-box">
            <h2 className="service-title">Service {index + 1}</h2>
            <p className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
