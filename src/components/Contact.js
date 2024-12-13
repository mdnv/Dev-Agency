import React, { useState } from 'react';
import '../components/css/Contact.css';
import globus from '../components/images/circle.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out!');
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <img src={globus} alt="globus" className="globus_1" />
      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="form_group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form_group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form_group">
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="button_group">
          <button type="submit" className="btn btn_gradient">
            Send Message
          </button>
          <button
            type="button"
            className="btn btn_clear"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
