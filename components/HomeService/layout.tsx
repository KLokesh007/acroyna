import React from "react";
import "./service.css";


interface Service {
  title: string;
  url: string;
}

export default function ServicesSection() {
  const leftColumnServices: Service[] = [
    { title: "Web Development", url: "/Services/Webdev" },
    { title: "Cloud Solutions", url: "/Services/CloudSolutions" },
    { title: "AI & Machine Learning", url: "/Services/AI" },
    { title: "Mobile App Design", url: "/Services/MobileApp" },
    { title: "E-Commerce Solutions", url: "/Services/Ecommerce" },
    { title: "Quality Assurance (QA)Testing", url: "/Services/QualityAssurance" }
  ];

  const rightColumnServices: Service[] = [
    { title: "Custom Software Development", url: "/Services/SoftwareDevelopment" },
    { title: "Cybersecurity Services", url: "/Services/Cybersecurity" },
    { title: "Business Process Automation", url: "/Services/BusinessAutomation" },
    { title: "Consulting & Strategy", url: "/Services/Consulting" },
    { title: "DevOps & Continuous Integration", url: "/Services/DevOps" },
    { title: "IT Support & Managed Services", url: "/Services/ITservices" }
  ];

  return (
    <section id='Services' className="services-section">
      <div className="container1">
        <div className="heading">
          <h2>Services we can help you with</h2>
        </div>
        <div className="content">
          <h3 className="subheading">Services Provided by Acroyna</h3>
          <div className="services-grid">
            <div className="services-column">
              {leftColumnServices.map((service, index) => (
                <a key={index} href={service.url} className="service-item" aria-label={`Learn more about ${service.title}`}>
                  <span className="bullet">•</span>
                  {service.title}
                </a>
              ))}
            </div>
            <div className="services-column">
              {rightColumnServices.map((service, index) => (
                <a key={index} href={service.url} className="service-item" aria-label={`Learn more about ${service.title}`}>
                  <span className="bullet">•</span>
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

