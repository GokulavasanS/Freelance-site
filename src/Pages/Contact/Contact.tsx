import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    let formErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      formErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!message) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs.send('service_wmv0ajo', 'template_ol8bzqk', templateParams, 'lsDY4eKNCSon6eUve')
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
          alert('An error occurred. Please try again.');
        });
    }
  };

  return (
    <div className="page">
      <div className="contact">
        <div className="left">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="type">
              <h2>Your Name</h2>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="input-field" 
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="type">
              <h2>Your Email</h2>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="input-field" 
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="message">
              <h3>Type your message here</h3>
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="input-field" 
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="submit">Submit</button>
          </form>
        </div>
        <div className="right">
          <img src='src/Pages/Contact/svg.svg' alt='SVG'/>
        </div>
      </div>
    </div>
  )
}

export default Contact;
