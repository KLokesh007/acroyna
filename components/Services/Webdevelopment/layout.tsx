'use client';
import { Globe, CheckSquare, Cloud, Server, Building, Database } from 'lucide-react';
import dynamic from 'next/dynamic';
import './web.css';

// Dynamically import LottieAnimation to prevent SSR errors
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

export default function WebDevelopment() {
  return (
    <section className="web-development">
      <div className="container">
        <div className="web-header">
          <div className="web-heading">
            <span className="web-bold">Web <br />Development</span> 
          </div>
          <p className="web-subheading">
            In the digital age, your website is often the first impression of your business.
            Our Web Development Services are designed to create fast, secure, and visually
            stunning websites that captivate your audience and drive results.
          </p>
        </div>

        {/* Web Content Section */}
        <div className="web-content">
          <div className="web-image">
            <LottieAnimation
              animationPath="/lottie/appdevelopment.json"
              loop={true}
              autoplay={true}
            />
          </div>
          <div className="web-details">
            <h2>What We Offer:</h2>
            <ul>
              <li><b>Responsive Websites:</b> We build user-friendly and engaging websites optimized for all devices.</li>
              <li><b>SEO & Performance:</b> Enhance visibility and loading speed to maximize traffic and engagement.</li>
              <li><b>E-commerce Development:</b> Build secure and scalable online stores to drive sales.</li>
              <li><b>Custom Web Apps:</b> Tailored solutions to meet your specific business needs.</li>
            </ul>
          </div>
        </div>

        {/* Full-Stack Development Section BELOW Web Content */}
        <div className="full-stack">
          <h2>Full-Stack Development</h2>

          <div className="services-grid">
            <div className="service-card">
              <Globe className="icon" />
              <h3>Websites</h3>
              <p>We design and develop responsive, user-friendly websites tailored to your brand.</p>
            </div>

            <div className="service-card">
              <CheckSquare className="icon" />
              <h3>Quality Assurance</h3>
              <p>We maintain the quality, functionality, and performance of your software through rigorous testing.</p>
            </div>

            <div className="service-card">
              <Cloud className="icon" />
              <h3>SaaS Applications</h3>
              <p>We create scalable, adaptable, and feature-rich SaaS solutions for businesses.</p>
            </div>

            <div className="service-card">
              <Server className="icon" />
              <h3>Cloud-Based Applications</h3>
              <p>Our cloud-based application services offer secure, scalable, and accessible solutions.</p>
            </div>

            <div className="service-card">
              <Building className="icon" />
              <h3>Enterprise Applications</h3>
              <p>We build robust enterprise applications to optimize workflow and business efficiency.</p>
            </div>

            <div className="service-card">
              <Database className="icon" />
              <h3>Deployment & Launch</h3>
              <p>We deploy and launch applications with post-launch support for a smooth transition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
