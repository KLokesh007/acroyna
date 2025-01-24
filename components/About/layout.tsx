import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import './about.css'

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            At Acroyna, our mission is to empower businesses by leveraging 
            technology to streamline operations, enhance customer engagement, 
            and drive growth. We believe that every organization deserves access 
            to solutions that not only solve problems but also inspire success.
          </p>
        </div>

        <h2 className="about-subtitle">We are Acroyna</h2>
        

        <div className="team-members">
          <div className="team-member">
            <div className="member-image-container">
            <img
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736874898/meraj_r6mnov.jpg"
                alt="Co-Founder & CEO"
                 width={300}
                height={400}
                className="member-image"
            />
            </div>
            <div className="member-info">
              <h3 className="member-name">Md. Meraj Alam</h3>
              <p className="member-title">Co-Founder & CEO</p>
              <p className="member-bio">
                A Visionary Leader with a Passion for Innovation Md. Meraj Alam is the heart and 
                mind behind Acroyna Software Solutions, bringing over 15 years of experience in 
                Bachelor of Engineering, Computer Science. From the early days of coding late 
                into the night to leading transformative projects for global businesses, he has 
                always been driven by a single goal: to create technology that empowers people 
                and organizations.
              </p>
              <a href="https://www.linkedin.com/in/md-meraj-alam-843957182/" className="linkedin-link" aria-label="Connect on LinkedIn">
                <Linkedin className="linkedin-icon" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <div className="member-image-container">
            <img
              src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736874909/2nd_wbfzyj.jpg"
                alt="Co-Founder & CEO"
                 width={300}
                height={400}
                className="member-image"
            />
            </div>
            <div className="member-info">
              <h3 className="member-name">Najmus Seemab</h3>
              <p className="member-title">Co-Founder & CEO</p>
              <p className="member-bio">
                A Creative Problem-Solver with a Flair for Technology Najmus Seemab has 
                always been fascinated by how technology can simplify life complexly. With a 
                background in Bachelor of Engineering, Computer Science, and a hands-on 
                approach to development, He ensures every solution designed by Acroyna 
                Software Solutions is efficient, scalable, and ahead of its time.
              </p>
              <a href="https://www.linkedin.com/in/najmus-seemab/" className="linkedin-link" aria-label="Connect on LinkedIn">
                <Linkedin className="linkedin-icon" />
              </a>
            </div>
            
          </div>
          <div className="trusted-by1">
        <p>TRUSTED BY FUNDED STARTUPS</p>
        <img src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736801385/alba_mart_yttys4.png" alt="Alba Mart Logo" />
      </div>
        </div>
      </div>
    </section>
  )
}

