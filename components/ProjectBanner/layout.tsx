'use client'
import React from 'react';
import './banner.css';
import ContactFormModal from '../Contact us/layout';

const ProjectBanner: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="project-banner">
      <div className="content">
      <h1 className="title">Have a Project in Mind?</h1>
        <button className="cta-button" onClick={() => setShowModal(true)}>Get in touch</button>
        {showModal && <ContactFormModal isVisible={showModal} onClose={() => setShowModal(false)} />}
      </div>
      <div className="image-section">
        <img
          src="https://res.cloudinary.com/dt5grsivq/image/upload/v1737062889/0e59d351e04e3a8c6c6e33aa8d37477e_tvyfkm.jpg"
          alt="Woman thinking with a light bulb"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default ProjectBanner;
