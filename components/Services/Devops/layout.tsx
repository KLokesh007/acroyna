import React from "react";
import "./dev.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const Ops: React.FC = () => {
    return (
        <div className="devops-container">
            <h1 className="devops-heading">DevOps & Continous<br />
                Integration/Continuous<br/>
                Deployment (CI/CD) </h1>
            <p className="devops-subheading">
                Accelerate your software development lifecycle with our DevOps & CI/CD Services. By combining development and operations into a unified workflow, we help you build, test, and deploy applications faster and more efficiently. Whether you’re modernizing legacy systems or starting a new project, our solutions ensure reliable, scalable, and high-quality software delivery.
            </p>
            <div className="devops-content">
            <div className="md: flex h-90 w-full items-center justify-center lg:mr-40  lg:w-1/3">
                    <LottieAnimation
                        animationPath="/lottie/devops.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className="devops-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li>
                            <b>DevOps Implementation: </b> Bridge the gap between
                            development and operations teams for better collaboration.
                        </li>
                        <li>
                            <b>CI/CD Pipelines: </b> Automate build, test, and deployment
                            processes for faster releases
                        </li>
                        <li>
                            <b>CI/CD Integration:</b> Streamline your development pipeline with
                            automated builds, tests, and deployments.
                        </li>
                        <li>
                            <b>Infrastructure as Code (IaC):</b> Simplify infrastructure management with automated provisioning.
                        </li>
                        <li>
                            <b>Monitoring & Logging: </b>Gain real-time insights to ensure system reliability and performance.
                        </li>
                        <li>
                            <b>Cloud Integration: </b>Deploy and manage applications seamlessly
                            across cloud platforms.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="devops-footer">
                <h2>Why Choose Our DevOps Solutions?</h2>
                <p>With our tailored DevOps services, you gain:</p>
                <ul>
                    <li>Faster Time-to-Market: Streamline workflows to deliver features quickly.</li>
                    <li>Improved Quality: Catch issues early with automated testing and continuous feedback.</li>
                    <li>Scalability: Build systems that grow with your business needs.</li>
                    <li>Reliability: Minimize downtime and ensure seamless user experiences.</li>
                </ul>
                <p>
                    <i>
                    Transform your development processes—embrace DevOps and CI/CD for agile, efficient, and reliable software delivery.
                    </i>
                </p>
            </div>
        </div>



    );
};

export default Ops;