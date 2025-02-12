"use client";
import { useState, useRef } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); // Delay before hiding dropdown
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <a href="/">
          <img
            src="https://res.cloudinary.com/dt5grsivq/image/upload/v1737187370/Acroyna_i5qex2.jpg"
            alt="Acroyna Logo"
            className="logo-image"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        {/* Services Dropdown */}
        <div
          className="ndropdown"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/#Services" className="nav-link">
            SERVICES
            <span className="ndropdown-arrow">&#9662;</span>
          </a>
          <div className={`ndropdown-menu ${activeDropdown === "services" ? "active" : ""}`}>
            <a href="/Services/Webdev" className="ndropdown-item">Web Development</a>
            <a href="/Services/AI" className="ndropdown-item">AI & Machine Learning</a>
            <a href="/Services/MobileApp" className="ndropdown-item">Mobile App Design</a>
            <a href="/Services/Ecommerce" className="ndropdown-item">E-Commerce Solutions</a>
            <a href="/Services/QualityAssurance" className="ndropdown-item">QA Testing</a>
            <a href="/Services/SoftwareDevelopment" className="ndropdown-item">Custom Software Development</a>
            <a href="/Services/CloudSolutions" className="ndropdown-item">Cloud Solutions</a>
            <a href="/Services/Cybersecurity" className="ndropdown-item">Cybersecurity Services</a>
            <a href="/Services/BusinessAutomation" className="ndropdown-item">Business Process Automation</a>
            <a href="/Services/Consulting" className="ndropdown-item">Consulting & Strategy</a>
            <a href="/Services/DevOps" className="ndropdown-item">DevOps & CI/CD</a>
            <a href="/Services/ITservices" className="ndropdown-item">IT Support & Managed Services</a>
          </div>
        </div>

        <span className="divider">|</span>

        {/* Case Studies Dropdown */}
        <div
          className="ndropdown"
          onMouseEnter={() => handleMouseEnter("casestudy")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/#CaseStudy" className="nav-link">
            CASE STUDIES
            <span className="ndropdown-arrow">&#9662;</span>
          </a>
          <div className={`ndropdown-menu ${activeDropdown === "casestudy" ? "active" : ""}`}>
            <a href="/CaseStudies/CaseStudy1" className="ndropdown-item">Alba Mart</a>
            <a href="/CaseStudies/CaseStudy2" className="ndropdown-item">Alba Mart Admin</a>
            <a href="/CaseStudies/CaseStudy3" className="ndropdown-item">VTU Fee Receipt</a>
            <a href="/CaseStudies/CaseStudy4" className="ndropdown-item">Getway Solution</a>
          </div>
        </div>

        <span className="divider">|</span>
        <a href="/Aboutus" className="nav-link">ABOUT US</a>
        <span className="divider">|</span>
        <a href="/#testimonials" className="nav-link">CLIENTS</a>
      </div>

      {/* Buttons Section */}
      <div className="nav-buttons">
        <button className="work-button" onClick={() => window.open("https://forms.gle/c18A2HmzV19E5SJB7")}>
          Work with us
        </button>
        <button
          className={`menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-icon"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="dropdown-header">
          <div className="logo-container">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dt5grsivq/image/upload/v1737187370/Acroyna_i5qex2.jpg"
                alt="Acroyna Logo"
                className="logo-image"
              />
            </a>
          </div>
          <button className="close-button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        <a href="/">Work</a>
        <a href="/Aboutus">About Us</a>
        <a href="/#Services" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="/CareerSection">Careers</a>
        <a href="https://forms.gle/c18A2HmzV19E5SJB7" target="_blank" rel="noopener noreferrer">Contact Us</a>
      </div>
    </nav>
  );
}