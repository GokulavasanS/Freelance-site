//import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="page">
      <div className="contact">
        <div className="left">
          <h1>Contact Us</h1>
          <div className="type">
            <h2>Your name</h2>
          </div>
          <div className="type">
            <h2>Your Email</h2>
          </div>
          <div className="message">
            <h3>Type your message here</h3>
          </div>
          <div className="submit">Submit</div>
        </div>
        <div className="right">
          <img src='src/Pages/Contact/svg.svg' alt='SVG'/>
        </div>
      </div>
    </div>
  )
}

export default Contact
