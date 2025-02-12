'use client'

import React from "react";
import dynamic from 'next/dynamic';
import "./consult.css";

// Dynamically import LottieAnimation to prevent SSR issues
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

const Consulting: React.FC = () => {
    return (
        <div className="consulting-container">
            <div className="consulting-header">
                <h1 className="consulting-heading">Consulting &<br /> Strategy</h1>
                <p className="consulting-subheading">
                    Turn your business challenges into opportunities with our Consulting & Strategy services. 
                    We partner with you to craft actionable strategies that drive growth, innovation, and success. 
                    Whether you’re launching a new initiative or optimizing existing processes, our team delivers 
                    insights and solutions tailored to your unique goals and industry dynamics.
                </p>
            </div>

            {/* Lottie Animation (Visible below heading in responsive mode) */}
            <div className="consulting-animation-responsive">
                <LottieAnimation animationPath="/lottie/consulting.json" loop autoplay />
            </div>

            <div className="consulting-content">
                <div className="consulting-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li><b>Business Analysis:</b> In-depth evaluations to identify opportunities and pain points.</li>
                        <li><b>Strategic Planning:</b> Customized roadmaps to align your business with its goals.</li>
                        <li><b>Technology Consulting:</b> Guidance on adopting and implementing the right tech solutions.</li>
                        <li><b>Process Optimization:</b> Streamlined workflows to enhance efficiency and productivity.</li>
                        <li><b>Market Insights:</b> Data-driven recommendations to stay ahead of the competition.</li>
                    </ul>
                </div>

                {/* Lottie Animation (Hidden in responsive mode, shown only on large screens) */}
                <div className="consulting-animation">
                    <LottieAnimation animationPath="/lottie/consulting.json" loop autoplay />
                </div>
            </div>

            <div className="consulting-footer">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li><b>Personalized Approach:</b> Every solution is crafted to meet your specific needs.</li>
                    <li><b>Expert Guidance:</b> Work with seasoned professionals with industry expertise.</li>
                    <li><b>Sustainable Results:</b> Focused on long-term growth and success.</li>
                </ul>
                <p>
                    <i>Let’s collaborate to transform your vision into a reality—unlock new possibilities with us.</i>
                </p>
            </div>
        </div>
    );
};

export default Consulting;
