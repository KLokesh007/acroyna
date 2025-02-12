'use client'

import React from "react";
import dynamic from 'next/dynamic';
import "./dev.css";

// Dynamically import LottieAnimation to prevent SSR issues
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

const Ops: React.FC = () => {
    return (
        <div className="devops-container">
            <div className="devops-header">
                <div className="devops-heading">
                    <span className="devops-bold">
                        DevOps & Continuous<br />
                        Integration/Continuous <br />
                        Deployment (CI/CD)
                    </span>
                </div>
                <p className="devops-subheading">
                    Accelerate your software development lifecycle with our DevOps & CI/CD Services.
                    By combining development and operations into a unified workflow, we help you build,
                    test, and deploy applications faster and more efficiently. Whether you’re modernizing
                    legacy systems or starting a new project, our solutions ensure reliable, scalable,
                    and high-quality software delivery.
                </p>
            </div>

            <div className="devops-content">
                <div className="devops-image">
                    <LottieAnimation
                        animationPath="/lottie/devops.json"
                        loop={true}
                        autoplay={true}
                    />
                </div>

                <div className="devops-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li><b>DevOps Implementation:</b> Bridge the gap between development and operations teams for better collaboration.</li>
                        <li><b>CI/CD Pipelines:</b> Automate build, test, and deployment processes for faster releases.</li>
                        <li><b>Infrastructure as Code (IaC):</b> Simplify infrastructure management with automated provisioning.</li>
                        <li><b>Monitoring & Logging:</b> Gain real-time insights to ensure system reliability and performance.</li>
                        <li><b>Cloud Integration:</b> Deploy and manage applications seamlessly across cloud platforms.</li>
                    </ul>
                </div>
            </div>

            <div className="devops-footer">
                <h2>Why Choose Our DevOps Solutions?</h2>
                <p>With our tailored DevOps services, you gain:</p>
                <ul>
                    <li><b>Faster Time-to-Market:</b> Streamline workflows to deliver features quickly.</li>
                    <li><b>Improved Quality:</b> Catch issues early with automated testing and continuous feedback.</li>
                    <li><b>Scalability:</b> Build systems that grow with your business needs.</li>
                    <li><b>Reliability:</b> Minimize downtime and ensure seamless user experiences.</li>
                </ul>
                <p><i>Transform your development processes—embrace DevOps and CI/CD for agile, efficient, and reliable software delivery.</i></p>
            </div>
        </div>
    );
};

export default Ops;
