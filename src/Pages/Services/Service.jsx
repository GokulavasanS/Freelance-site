import React from 'react';
import gd from './GraphicDesign.svg';
import uiux from './UX & UI design.svg'
import dm from './Digital marketing.svg'
import cw from './GraphicDesign.svg'
import seo from './Digital marketing.svg'
import webdev from './Web development.svg'
import './Service.css';

const Service = () => {
  return (
    <div className="service_page">
      <h1>Our Services</h1>
      <div className="flex">
        <div className="group">
          <div className="box">
            <div className="circle" onClick={() => window.location.href='#graphic-design'}>
              <img src={gd} alt="Graphic Design" />
            </div>
            <h2>Graphic design & Illustration</h2>
          </div>
          <div className="box">
            <div className="circle" onClick={() => window.location.href='#ui-ux-design'}>
              <img src={uiux} alt="UI/UX Design" />
            </div>
            <h2>UI & UX design</h2>
          </div>
        </div>
        <div className="group">
          <div className="box">
            <div className="circle" onClick={() => window.location.href='#web-dev'}>
              <img src={webdev} alt="Web Development" />
            </div>
            <h2>Web design & Development</h2>
          </div>
          <div className="box">
            <div className="circle" onClick={() => window.location.href='#content-writing'}>
              <img src={cw} alt="Content Writing" />
            </div>
            <h2>Content Writing</h2>
          </div>
        </div>
        <div className="group">
          <div className="box">
            <div className="circle" onClick={() => window.location.href='#digital-marketing'}>
              <img src={dm} alt="Digital Marketing" />
            </div>
            <h2>Digital marketing</h2>
          </div>
          <div className="box">
            <div className="circle" onClick={() => window.location.href='#seo'}>
              <img src={seo} alt="SEO" />
            </div>
            <h2>SEO</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;