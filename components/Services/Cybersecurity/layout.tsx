import React from "react";
import "./cyber.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const CYBER: React.FC = () => {
    return (
        <div className="cybersecurity-container">
            <h1 className="cybersecurity-heading">Cybersecurity <br /> Services</h1>
            <p className="cybersecurity-subheading">
                Cybersecurity services are a range of practices and solutions
                designed to protect computer systems, networks, and data
                from digital threats, including hacking, malware, data breaches,
                and identity theft.        </p>
            <div className="cybersecurity-content">
            <div className="md:mt-30 flex h-90 w-full items-center justify-center lg:mr-40  lg:w-1/3">
                    <LottieAnimation
                        animationPath="/lottie/cybersecurity.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className="cybersecurity-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li>
                            <b>Threat Detection:</b> Identify potential risks with advanced threat detection systems.
                        </li>
                        <li>
                            <b>Data Protection:</b> Secure sensitive information with robust encryption and access controls.
                        </li>
                        <li>
                            <b>Incident Response:</b> Swiftly address security breaches with our expert response team.
                        </li>
                        <li>
                            <b>Compliance Assurance:</b> Stay compliant with industry regulations and standards.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cybersecurity-footer">
                <h2>Why Choose Cybersecurity Solutions?</h2>
                <p>With our cybersecurity services, you gain:</p>
                <ul>
                    <li>Proactive Defense: Stay ahead of evolving threats with cutting-edge technologies.</li>
                    <li>Tailored Solutions: Customized strategies to meet your industry’s unique challenges</li>
                    <li>Expert Support: A team of seasoned professionals dedicated to your security.</li>
                </ul>
                <p>
                    <i>
                    Don’t leave your security to chance—trust us to safeguard your business every step of the way.
                    </i>
                </p>
            </div>
        </div>

    );
};

export default CYBER;
