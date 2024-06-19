// src/Services.tsx
//import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div>
      <div className="service_page">
        <h1>OUR SERVICES</h1>
        <div className="flex">
          <div className="group">
            <div className="box">
              <div className="circle">
              <img src='src/Pages/ServicePage/Graphic design.svg' alt='icon'/>
              </div>
              <h2>Graphic design & Illustration</h2>
            </div>
            <div className="box">
              <div className="circle">
              <img src='src/Pages/ServicePage/UX & UI design.svg' alt='icon'/>
              </div>
              <h2>UX & UI design</h2>
            </div>
          </div>
          <div className="group">
            <div className="box">
              <div className="circle">
              <img src='src/Pages/ServicePage/Web development.svg' alt='icon'/>
              </div>
              <h2>Web design & web development</h2>
            </div>
            <div className="box">
              <div className="circle">
              <img src='src/Pages/ServicePage/Web development.svg' alt='icon'/>
              </div>
              <h2>Web design & Web development</h2>
            </div>
          </div>
          <div className="group">
            <div className="box">
              <div className="circle">
              <img src='src/Pages/ServicePage/Digital marketing.svg' alt='icon'/>
              </div>
              <h2>Digital marketing</h2>
            </div>
            <div className="box">
              <div className="circle">
              <img src='src/Pages/ServicePage/Graphic design.svg' alt='icon'/>
              </div>
              <h2>Graphic design & Illustration</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service

