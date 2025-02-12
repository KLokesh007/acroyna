import React from "react";
import "./banner.css";

const ProjectSection: React.FC = () => {
  return (
    <div className="project-container">
      <div className="project-text">
        <h2>Have a Project in Mind?</h2>
        <button className="project-button">Get in touch</button>
      </div>
      <div className="project-image">
        <img src="https://res.cloudinary.com/dt5grsivq/image/upload/v1737062889/0e59d351e04e3a8c6c6e33aa8d37477e_tvyfkm.jpg"  alt="Creative Thinking" />
      </div>
    </div>
  );
};

export default ProjectSection;
