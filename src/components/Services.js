import React from 'react';
import '../components/css/Services.css';
import dev from '../components/images/webdevelopment-ai-brush-removebg-0lkt3ixu.png';
import uix from '../components/images/UX-UI-removebg-preview.png';

const Services = () => {
  return (
    <section className="services">
      <div className="container_service" id="services">
        <h2>Our Services</h2>
        <div className="service_items">
          <div className="service_item">
            <img src={dev} alt="Web Development" />
            <h3>Web Development</h3>
            <p>We create responsive and modern websites tailored to your needs.</p>
          </div>
          <div className="service_item">
            <img src={uix} alt="UI/UX Design" />
            <h3>UI/UX Design</h3>
            <p>Beautiful and intuitive designs to enhance user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;