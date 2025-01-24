import { Globe, CheckSquare, Cloud, Server, Building, Database } from 'lucide-react'
import './web.css';
import LottieAnimation from "@/components/Lottie/LottieAnimation";

export default function WebDevelopment() {
  return (
    <section className="web-development">
    <div className="container">
      <div className="header">
        <h1>Web Development</h1>
        <p>
          In the digital age, your website is often the first impression of your business.
          Our Web Development Services are designed to create fast, secure, and visually
          stunning websites that captivate your audience and drive results.
        </p>
      </div>
  
      <div className="md:mt-30 flex h-90 w-full items-center justify-center lg:mr-20 lg:w-1/2">
        <LottieAnimation
          animationPath="/lottie/appDevelopment.json" // Animation for another use
          loop={true}
          autoplay={true}
        />
      </div>

        <div className="full-stack">
          <h2>Full-stack Development</h2>

          <div className="services-grid">
            <div className="service-card">
              <Globe className="icon" />
              <h3>Websites</h3>
              <p>
                We design and develop responsive, user-friendly websites tailored to your brand. Modern and seamless experiences that allow your business to leave a lasting impression on your audience.
              </p>
            </div>

            <div className="service-card">
              <CheckSquare className="icon" />
              <h3>Quality Assurance</h3>
              <p>
                We maintain the quality, functionality, and performance of your software through rigorous testing, delivering high-quality solutions that meet your business standards.
              </p>
            </div>

            <div className="service-card">
              <Cloud className="icon" />
              <h3>SaaS application</h3>
              <p>
                Our SaaS applications development focuses on creating scalable, adaptable, and feature-rich solutions to empower businesses with flexibility and efficiency in the cloud.
              </p>
            </div>

            <div className="service-card">
              <Server className="icon" />
              <h3>Cloud Based Applications</h3>
              <p>
                Our cloud-based application services offer secure, scalable, and accessible solutions designed to streamline your business operations and enhance collaboration.
              </p>
            </div>

            <div className="service-card">
              <Building className="icon" />
              <h3>Enterprise Applications</h3>
              <p>
                We build robust and scalable enterprise applications to optimize workflow, improve efficiency, and support large-scale business operations with minimal disruption.
              </p>
            </div>

            <div className="service-card">
              <Database className="icon" />
              <h3>Deployment & Launch</h3>
              <p>
                Once the app passes all testing phases, we deploy it to the relevant platforms (App Store, Google Play, or web). We also offer post-launch support to ensure a smooth transition.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

