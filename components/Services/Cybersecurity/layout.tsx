'use client'

import React from "react";
import dynamic from 'next/dynamic';
import "./cyber.css";

// Dynamically import LottieAnimation to prevent SSR issues
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

const Cybersecurity: React.FC = () => {
    return (
        <div className="cybersecurity-container">
            <div className="cybersecurity-header">
                <div className="cybersecurity-heading">
                    <span className="cybersecurity-bold">
                        Cybersecurity & <br /> Services
                    </span>
                </div>
                <p className="cybersecurity-subheading">
                    Cybersecurity services are a range of practices and solutions
                    designed to protect computer systems, networks, and data
                    from digital threats, including hacking, malware, data breaches,
                    and identity theft.
                </p>
            </div>

            <div className="cybersecurity-content">
                <div className="cybersecurity-image">
                    <LottieAnimation
                        animationPath="/lottie/cybersecurity.json"
                        loop={true}
                        autoplay={true}
                    />
                </div>

                <div className="cybersecurity-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li><b>Threat Detection:</b> Identify potential risks with advanced threat detection systems.</li>
                        <li><b>Data Protection:</b> Secure sensitive information with robust encryption and access controls.</li>
                        <li><b>Incident Response:</b> Swiftly address security breaches with our expert response team.</li>
                        <li><b>Compliance Assurance:</b> Stay compliant with industry regulations and standards.</li>
                    </ul>
                </div>
            </div>

            <div className="cybersecurity-footer">
                <h2>Why Choose Our Cybersecurity Solutions?</h2>
                <p>With our cybersecurity services, you gain:</p>
                <ul>
                    <li><b>Proactive Defense:</b> Stay ahead of evolving threats with cutting-edge technologies.</li>
                    <li><b>Tailored Solutions:</b> Customized strategies to meet your industry’s unique challenges.</li>
                    <li><b>Expert Support:</b> A team of seasoned professionals dedicated to your security.</li>
                </ul>
                <p><i>Don’t leave your security to chance—trust us to safeguard your business every step of the way.</i></p>
            </div>
        </div>
    );
};

export default Cybersecurity;
