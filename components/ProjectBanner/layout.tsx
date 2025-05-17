"use client";
import React from "react";
import "./banner.css";

const ProjectSection: React.FC = () => {
  return (
    <div className="project-container">
      <div className="project-text">
        <h2>Have a Project in Mind?</h2>
        <button
          className="project-button"
          onClick={() =>
            window.open("https://forms.gle/c18A2HmzV19E5SJB7", "_blank")
          }
        >
          Get in touch
        </button>

      </div>
      <div className="project-image">
        <img src="/Images/project.jpg"  alt="Creative Thinking" />
      </div>
    </div>
  );
};

export default ProjectSection;
