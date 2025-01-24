'use client';

import './casestudy.css';
import React from 'react';

export default function CaseStudy() {
  return (
    <section id='CaseStudy' className="case-study-section">
      <div className="container">
        <div className="header">
          <h2 className="main-title">HOW WE HELP OTHERS SUCCEED</h2>
          <h1 className="sub-title">Recent Case Studies</h1>
        </div>
        {/* casestudy card 1st*/}
        <div className="case-study-card">
          <div className="case-study-image" onClick={() => window.location.href = '/CaseStudies/CaseStudy1'}>
            <img
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736806700/Mockup_7_jqiw8d.png"
              alt="Alba Mart mobile app interface screenshots"
              className="case-study-img"
            />
          </div>
          <div className="case-study-content">
            <h3 className="case-title"  onClick={() => window.location.href = '/CaseStudies/CaseStudy1'}>Alba Mart</h3>
            <p className="case-description" onClick={() => window.location.href = '/CaseStudies/CaseStudy1'}>
              Alba Mart is an innovative platform similar to City Mall and Zepto,
              providing customers with a seamless online grocery shopping experience.
              It offers a wide range of products, ensuring convenience, affordability,
              and timely delivery. Our team worked on designing and developing the
              Alba Mart platform to enhance user experience and meet the growing
              demand for online grocery solutions.
            </p>
          </div>
        </div>
        {/* casestudy card 2nd  */}
        <div className="case-study-card">
          <div className="case-study-content">
            <h3 className="case-title" onClick={() => window.location.href = '/CaseStudies/CaseStudy2'}>Alba Mart Admin</h3>
            <p className="case-description" onClick={() => window.location.href = '/CaseStudies/CaseStudy2'}>
              The Alba Mart Admin Panel serves as the backbone of
              the Alba Mart ecosystem. It empowers administrators
              to manage inventory, oversee customer orders, and
              handle product listings with ease. With features like
              real-time updates, analytics, and user management,
              the admin panel ensures smooth operations and
              excellent service delivery on the Alba Mart platform.
            </p>
          </div>
          <div className="case-study-image" onClick={() => window.location.href = '/CaseStudies/CaseStudy2'}>
            <img
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736809365/11_wmpcw4.png"
              alt="Alba Mart mobile app interface screenshots"
              className="case-study-img"
            />
          </div>
        </div>
        {/* casestudy card 3rd */}
        <div className="case-study-card">
          <div className="case-study-image" onClick={() => window.location.href = '/CaseStudies/CaseStudy3'}>
            <img
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736807049/Capture_r1x9nl.png"
              alt="Alba Mart mobile app interface screenshots"
              className="case-study-img"
            />
          </div>
          <div className="case-study-content">
            <h3 className="case-title" onClick={() => window.location.href = '/CaseStudies/CaseStudy3'}>VTU Fee Receipt</h3>
            <p className="case-description" onClick={() => window.location.href = '/CaseStudies/CaseStudy3'}>
              VTU Fee Receipt Solution was designed to transform
              the fee collection process for Karnataka University.
              It introduced a teacher-led fee submission system,
              allowing teachers to collect and deposit fees on behalf
              of students. This approach reduced crowding, improved
              efficiency, and made fee management more organized,
              ensuring a smoother experience for both students and
              administrative staff.
            </p>
          </div>
        </div>
        {/* casestudy card 4th  */}
        <div className="case-study-card">
          <div className="case-study-content">
            <h3 className="case-title" onClick={() => window.location.href = '/CaseStudies/CaseStudy4'}>Getway Solution</h3>
            <p className="case-description" onClick={() => window.location.href = '/CaseStudies/CaseStudy4'}>
              Getway Solution is a comprehensive platform designed
              to simplify and streamline transportation services. By
              enabling users to book vehicles quickly and efficiently,
              the platform caters to both personal and business needs.
              From intuitive booking systems to robust admin tools for
              managing fleets, Getway Solution is the ultimate solution
              for modern-day transportation challenges.
            </p>
          </div>
          <div className="case-study-image"onClick={() => window.location.href = '/CaseStudies/CaseStudy4'}>
            <img
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736807049/1_pg5mdv.png"
              alt="Alba Mart mobile app interface screenshots"
              className="case-study-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

