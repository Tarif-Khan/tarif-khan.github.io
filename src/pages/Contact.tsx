import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="content-wrapper">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" id="name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" rows={4} className="form-input" />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;