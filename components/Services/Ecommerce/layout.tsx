'use client'

import React from "react";
import dynamic from 'next/dynamic';
import "./commerce.css";

// Dynamically import LottieAnimation to prevent SSR issues
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

const Ecommerce: React.FC = () => {
    return (
        <div className="ecommerce-container">
            <div className="ecommerce-header">
                <div className="ecommerce-heading">
                    <span className="ecommerce-bold">E-commerce <br /> Solutions</span>
                </div>
                <p className="ecommerce-subheading">
                    Transform your business with our E-commerce Solutions,
                    designed to create seamless shopping experiences and
                    drive online success. From intuitive storefront designs to
                    robust backend systems, we offer end-to-end solutions
                    tailored to your unique business needs. Whether you're
                    starting fresh or scaling an existing platform, we ensure
                    your online store stands out and performs at its best.
                </p>
            </div>

            <div className="ecommerce-content">
                <div className="ecommerce-image">
                    <LottieAnimation
                        animationPath="/lottie/ecommerce.json"
                        loop={true}
                        autoplay={true}
                    />
                </div>

                <div className="ecommerce-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li><b>Ecommerce Platform Development:</b> Build feature-rich platforms tailored to your business needs.</li>
                        <li><b>CI/CD Pipelines:</b> Automate build, test, and deployment processes for faster updates.</li>
                        <li><b>Payment Gateway Integration:</b> Secure and seamless payment processing for your customers.</li>
                        <li><b>Infrastructure as Code (IaC):</b> Simplify infrastructure management with automated provisioning.</li>
                        <li><b>Monitoring & Analytics:</b> Gain real-time insights to enhance customer experience and optimize operations.</li>
                        <li><b>Cloud Integration:</b> Deploy and manage ecommerce platforms seamlessly across cloud environments.</li>
                    </ul>
                </div>
            </div>

            <div className="ecommerce-footer">
                <h2>Why Choose Our Ecommerce Solutions?</h2>
                <p>With our tailored ecommerce services, you gain:</p>
                <ul>
                    <li><b>Scalability:</b> Platforms that grow alongside your business.</li>
                    <li><b>User-Centric Design:</b> Enhance customer satisfaction and retention.</li>
                    <li><b>Reliability:</b> Robust systems built to handle high traffic and transactions.</li>
                </ul>
                <p><i>Your online success starts here—let’s build the future of your e-commerce business together.</i></p>
            </div>
        </div>
    );
};

export default Ecommerce;
