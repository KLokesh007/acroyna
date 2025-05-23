'use client'
import React from "react";
import dynamic from "next/dynamic";
import "./quality.css";

// Dynamically import LottieAnimation to prevent SSR errors
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

const QualityAssurance: React.FC = () => {
    return (
        <div className="qualityassurance-container">
            <div className="qualityassurance-header">
                <h1 className="qualityassurance-heading">Quality<br /> Assurance</h1>
                <p className="qualityassurance-subheading">
                    Ensure your software meets the highest standards with our Quality Assurance (QA) Services. 
                    We provide end-to-end testing solutions to identify and resolve issues early, ensuring a flawless 
                    user experience. From functional testing to performance optimization, our QA experts help you 
                    deliver reliable, high-performing software that exceeds expectations.
                </p>
            </div>

            {/* Lottie Animation (Visible below heading in responsive mode) */}
            <div className="qualityassurance-animation-responsive">
                <LottieAnimation animationPath="/lottie/QA.json" loop={true} autoplay={true} />
            </div>

            <div className="qualityassurance-content">
                <div className="qualityassurance-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li><b>Manual & Automated Testing:</b> Comprehensive testing strategies tailored to your project’s needs.</li>
                        <li><b>Performance Testing:</b> Ensure your applications perform seamlessly under any load.</li>
                        <li><b>Functional Testing:</b> Validate your software’s features and functionalities.</li>
                        <li><b>Security Testing:</b> Protect your software from vulnerabilities and threats.</li>
                        <li><b>Regression Testing:</b> Maintain quality with consistent testing after updates or changes.</li>
                    </ul>
                </div>

                {/* Lottie Animation (Hidden in responsive mode, shown only on large screens) */}
                <div className="qualityassurance-animation">
                    <LottieAnimation animationPath="/lottie/QA.json" loop={true} autoplay={true} />
                </div>
            </div>

            <div className="qualityassurance-footer">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li><b>Proactive Issue Resolution:</b> Detect and fix problems before they impact users.</li>
                    <li><b>Enhanced User Experience:</b> Deliver flawless, bug-free applications.</li>
                    <li><b>Customized Solutions:</b> Tailored QA strategies to fit your software and business goals.</li>
                    <li><b>Expert Team:</b> Leverage the expertise of seasoned QA professionals.</li>
                </ul>
                <p><i>Deliver confidence with every release—our Quality Assurance services ensure your software is reliable, secure, and ready to impress.</i></p>
            </div>
        </div>
    );
};

export default QualityAssurance;
