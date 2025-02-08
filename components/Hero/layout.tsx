"use client"
import React from "react"
import { SparklesCore } from "../ui/sparkles"
import './hero.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-main">
        <div className="hero-text">
          <h1 className="hero-title">
            Building innovative digital experiences,
            {/* <br /> */}
            <br />
            tailored for your success
          </h1>
        </div>

        <div className="sparkles-container">
          {/* Gradients */}
          <div className="gradient gradient-1" />
          <div className="gradient gradient-2" />
          <div className="gradient gradient-3" />
          <div className="gradient gradient-4" />

          {/* Core sparkles component */}
          <SparklesCore
            background="white"
            minSize={0.7}
            maxSize={3}
            particleDensity={1600}
            className="sparkles"
            particleColor="#14142B"
          />

          {/* Radial gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="cta-container">
          <div className="button-group">
            <button className="btn btn-primary" onClick={() => window.open("https://forms.gle/c18A2HmzV19E5SJB7", "_blank")}>
              Get a project quote
            </button>
            <a href="#CaseStudy" className="btn btn-secondary">
              See our work
            </a>
          </div>
        </div>

        <div className="trusted-section">
          <p className="trusted-title">TRUSTED BY FUNDED STARTUPS</p>
          <div className="trusted-logos">
            <img
              className="trusted-logo"
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736801385/alba_mart_yttys4.png"
              alt="Alba Mart Logo"
            />
            <img
              className="trusted-logo"
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1737369654/jyps_vhy9os.jpg"
              alt="Placeholder Logo 1"
            />
            <img
              className="trusted-logo"
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1739051382/merage_suubzs.jpg"
              alt="Placeholder Logo 2"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

