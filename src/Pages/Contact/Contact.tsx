//import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="page">
      <div className="contact">
        <div className="box"></div>
        <div className="content">
            <div className="type">
                <h1>Your name</h1>
            </div>
            <div className="type">
                <h1>Your Email</h1>
            </div>
            <div className="message">
                <h1>Type your message here</h1>
            </div>
            <div className="send">
                <h1>Send message</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
