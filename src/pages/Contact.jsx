import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p className="contact-intro">
            We're here to help you on your journey to wellness. Reach out to book a consultation or ask any questions you may have.
          </p>
          
          <div className="info-item">
            <h3>Our Address</h3>
            <p>204, Sun Gravitas, Near Shyamal Cross Road, Shyamal, Ahmedabad, Gujarat 380015</p>
          </div>

          <div className="info-item">
            <h3>Phone</h3>
            <p><a href="tel:7575086742">+91 75750 86742</a></p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d564.8380906465303!2d72.53121519999999!3d23.0111325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85791c48a85d%3A0x48a584472ae3a49e!2sWholistic%20Homeopathy%20Clinic!5e1!3m2!1sen!2sin!4v1754315606355!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;