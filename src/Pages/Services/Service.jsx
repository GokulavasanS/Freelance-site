import React from 'react';
import './Service.css';
import GD from './GraphicDesign.svg';
import UxUi from './UX & UI design.svg';
import WebDev from './Web development.svg';
import DigitalMarketing from './Digital marketing.svg';

const Service = () => {
  return (
    <div className="service_page">
      <h1>OUR SERVICES</h1>
      <div className="flex">
        <div className="group">
          <div className="box">
            <div className="circle">
              <img src={GD} alt='Graphic design & Illustration' />
            </div>
            <h2>Graphic design & Illustration</h2>
          </div>
          <div className="box">
            <div className="circle">
              <img src={UxUi} alt='UX & UI design' />
            </div>
            <h2>UX & UI design</h2>
          </div>
        </div>
        <div className="group">
          <div className="box">
            <div className="circle">
              <img src={WebDev} alt='Web design & web development' />
            </div>
            <h2>Web design & web development</h2>
          </div>
        </div>
        <div className="group">
          <div className="box">
            <div className="circle">
              <img src={DigitalMarketing} alt='Digital marketing' />
            </div>
            <h2>Digital marketing</h2>
          </div>
        </div>
        <div className="group">
          <div className="box">
            <div className="circle">
              <img src={DigitalMarketing} alt='Digital marketing' />
            </div>
            <h2>SEO</h2>
          </div>
        </div>
        <div className="group">
          <div className="box">
            <div className="circle">
              <img src={DigitalMarketing} alt='Digital marketing' />
            </div>
            <h2>Content writing</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;
