import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formState.name) errors.name = 'Name is required';
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formState.message) errors.message = 'Message is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        setSuccessMessage('Your message has been sent successfully!');
        setFormState({ name: '', email: '', message: '' });
      }, (error) => {
        setErrors({ api: 'Failed to send message, please try again later.' });
      });
  };

  return (
    <div className="contact-page">
      <div className="details">
        <h1>Let's Talk</h1>
      <h2>Contact Us</h2>
      <p></p>
      </div>
      <div className="container">
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.api && <p className="error-message">{errors.api}</p>}
        <div className="forms">
          <form onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
            <h3>Email</h3>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
            <h3>Your Message</h3>
            <textarea
              name="message"
              className="message"
              value={formState.message}
              onChange={handleInputChange}
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
            <div className="button">
              <button type="submit" className="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
