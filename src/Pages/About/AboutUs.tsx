//import React from 'react'
import './AboutUs.css'
import happy from './happy-svgrepo-com.svg'
import project from "./projects-svgrepo-com.svg"
import time from "./time-svgrepo-com.svg"
import tick from "./bullet-points-list-svgrepo-com.svg"

const AboutUs = () => {
  return (
    <div className='container'>
      <div className="about">
      <div className='about_us'>
      <div className='icons'>
      <img src ={happy} alt='emoji' className='icon_image'/>
      <div className="icon_text">
      <h1>30</h1>
      <p>Happy clients</p>
      </div>
      </div>
      <div className='icons'>
      <img src ={project} alt='emoji' className='icon_image'/>
      <div className="icon_text">
      <h1>55</h1>
      <p>Projects</p>
      </div>
      </div>
      <div className='icons'>
      <img src ={time} alt='emoji' className='icon_image'/>
      <div className="icon_text">
      <h1>2</h1>
      <p>Years of knowledge</p>
      </div>
      </div>
      </div>
      <div className="main">
        <h1>Freelancing Hub</h1>
        <h2>Our platform hosts a diverse community of freelancers from various fields such as web development, graphic design, content writing, and more</h2>
        <div className="para">
        <img src={tick} alt='bullet points'/>
        <p>We are committed to ensuring the highest quality of work.</p>
        </div>
        <div className="para">
        <img src={tick} alt='bullet points'/>
        <p>We facilitate seamless communication between clients and freelancers.</p>
        </div>
        <div className="para">
        <img src={tick} alt='bullet points'/>
        <p>We strive to exceed your expectations and provide excellent customer service.</p>
        </div>
        <h3>Crafting dynamic websites, we bring your digital presence to life. Our graphics visualize your vision, adding a creative touch. Through digital marketing, we connect your brand to the world</h3>
      </div>
      </div>
    </div>
  )
}

export default AboutUs


