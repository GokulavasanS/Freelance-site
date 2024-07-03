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
    <div>
      <div className="service_page">
        <h1>OUR SERVICES</h1>
        <div className="flex">
          <div className="group">
            <div className="box">
              <div className="circle">
              <img src={gd} alt='icon'/>
              </div>
              <h2>Graphic design & Illustration</h2>
            </div>
            <div className="box">
              <div className="circle">
              <img src={uiux} alt='icon'/>
              </div>
              <h2>UI & UX design</h2>
            </div>
          </div>
          <div className="group">
            <div className="box">
              <div className="circle">
              <img src={webdev} alt='icon'/>
              </div>
              <h2>Web design & Development</h2>
            </div>
            <div className="box">
              <div className="circle">
              <img src={cw} alt='icon'/>
              </div>
              <h2>Content Writing</h2>
            </div>
          </div>
          <div className="group">
            <div className="box">
              <div className="circle">
              <img src={dm} alt='icon'/>
              </div>
              <h2>Digital marketing</h2>
            </div>
            <div className="box">
              <div className="circle">
              <img src={seo} alt='icon'/>
              </div>
              <h2>SEO</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service