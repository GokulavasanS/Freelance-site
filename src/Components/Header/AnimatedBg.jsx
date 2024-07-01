import React from 'react';
import './AnimatedBg.css';

const AnimatedBg = ({ theme }) => {
  return (
    <div className={`background-container ${theme}`}>
      <div className="blue"></div>
      <div className="multiply"></div>
      <div className="emp"></div>
      <div className="layer layer1"></div>
      <div className="layer layer2"></div>
      <div className="layer layer3"></div>
      <div className="layer layer4"></div>
      <div className="layer layer5"></div>
    </div>
  );
};

export default AnimatedBg;
