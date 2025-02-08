'use client'
import './career.css'

export default function CareersPage() {
  return (
    <div className="careers-container">

      <h1 className="careers-title" id="career-opening" >Jobs Opening</h1>

      <div className="content-wrapper">
        <div className="jobs-container">
          <div className="job-listing">
            <div className="tags">
              <span className="tag">Internship</span>
              <span className="tag">Full time</span>
            </div>

            <div className="experience">
              <strong>Experience:</strong> 2-4yrs
            </div>

            <div className="role-description">
              <h2>Full-Stack Developers</h2>
              <p>
                The successful candidate will be responsible for developing, testing, and maintaining high-quality mobile applications for both Android and iOS platforms.
              </p>
              <p>
                They will collaborate with cross-functional teams to identify business opportunities, develop project plans, solve engineering problems, and create technical documentation. The ideal candidate should be passionate about technology, detail-oriented, and able to work effectively in a dynamic and fast-paced environment.
              </p>
              <div className="button-wrapper">
                <a href="https://forms.gle/e5EWboVu7XJ3PQTu8" className="apply-button">Apply Now</a>
              </div>
            </div>
          </div>

          <div className="job-listing">
            <div className="tags">
              <span className="tag">Internship</span>
              <span className="tag">Full time</span>
            </div>

            <div className="experience">
              <strong>Experience:</strong> 2-4yrs
            </div>

            <div className="role-description">
              <h2>Application developer (react native)</h2>
              <p>
                The successful candidate will be responsible for developing, testing, and monitoring high-quality mobile applications for both Android and iOS platforms.
              </p>
              <p>
                They will collaborate with cross-functional teams to identify business opportunities, develop project plans, solve engineering problems, and create technical documentation. The ideal candidate should be passionate about technology, detail-oriented, and able to work effectively in a dynamic and fast-paced environment.
              </p>
              <div className="button-wrapper">
                <a href="https://forms.gle/e5EWboVu7XJ3PQTu8" className="apply-button">Apply Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="illustration">
          <img
            src="https://res.cloudinary.com/dt5grsivq/image/upload/v1736881825/ll2_vydduz.png"
            alt="Developer illustration"
            width={300}
            height={400}
            className="illustration-image"
          />
        </div>
      </div>
    </div>
  )
}

