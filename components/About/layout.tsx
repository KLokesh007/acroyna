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
                // src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736874898/meraj_r6mnov.jpg"
                src='/Images/about/habibullah.jpeg'
                alt="Co-Founder & CEO"
                width={300}
                height={400}
                className="member-image"
              />
            </div>
            <div className="member-info">
              {/* <h3 className="member-name">Md. Meraj Alam</h3> */}
              <h3 className="member-name">Md. Habibullah</h3>
              <p className="member-title">Co-Founder & CEO</p>
              <p className="member-bio">
                {/* A Visionary Leader with a Passion for Innovation Md. Meraj Alam is the heart and 
                mind behind Acroyna Software Solutions, bringing over 15 years of experience in 
                Bachelor of Engineering, Computer Science. From the early days of coding late 
                into the night to leading transformative projects for global businesses, he has 
                always been driven by a single goal: to create technology that empowers people 
                and organizations. */}
                A Strategic Thinker Bridging Ideas and Innovation
                brings a unique perspective to Acroyna Software Solutions with his background
                in Political Science (B.A, M.A). His expertise in critical thinking, research,
                and strategic analysis enables him to understand complex challenges and drive innovative solutions.
                With a deep passion for technology and its impact on society,
                he plays a vital role in shaping the company’s vision, fostering collaboration, and ensuring that Acroyna delivers technology-driven
                solutions that align with real-world needs.
              </p>
              {/* <a href="https://www.linkedin.com/in/md-meraj-alam-843957182/" className="linkedin-link" aria-label="Connect on LinkedIn"> */}
              <a href="https://www.linkedin.com/in/md-habibullah-9284602ab/" className="linkedin-link" aria-label="Connect on LinkedIn">
                <Linkedin className="linkedin-icon" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <div className="member-image-container">
              <img
                src="/Images/about/najmus.jpeg"
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
          <div className="trusted1-section">
            <p className="trusted1-title">TRUSTED BY FUNDED STARTUPS</p>
            <div className="trusted1-logos">
              <img
                className="trusted1-logo"
                src="/Images/alba mart.png"
                alt="Alba Mart Logo"
              />
              <img
                className="trusted1-logo"
                src="/Images/jyps.png"
                alt="Placeholder Logo 1"
              />
              <img
                className="trusted1-logo"
                src="/Images/merage.png"
                alt="Placeholder Logo 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

