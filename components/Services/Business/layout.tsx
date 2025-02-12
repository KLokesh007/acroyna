'use client'

import React from "react";
import dynamic from "next/dynamic";
import "./business.css";

// Dynamically import LottieAnimation to prevent SSR issues
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

const Automation: React.FC = () => {
    return (
        <div className="business-container">
            <div className="business-header">
                <div className="business-heading">
                    <span className="business-bold">Business Process <br /> Automation</span> 
                </div>
                <p className="business-subheading">
                    Optimize your operations with our Business Automation Services, 
                    designed to eliminate inefficiencies, reduce manual workloads, and enhance productivity. 
                    By leveraging advanced technologies, we help you automate repetitive tasks and focus 
                    on what truly matters—growing your business. From workflow automation to intelligent 
                    process optimization, we create solutions that adapt to your unique needs.
                </p>
            </div>

            <div className="business-content">
                <div className="business-image">
                    <LottieAnimation animationPath="/lottie/business.json" loop autoplay />
                </div>

                <div className="business-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li><b>Workflow Automation:</b> Automate routine tasks to save time and resources.</li>
                        <li><b>Intelligent Process Optimization:</b> Use AI and machine learning to make smarter decisions faster.</li>
                        <li><b>CRM & ERP Integration:</b> Enhance collaboration and data flow across your organization.</li>
                        <li><b>Custom Automation Solutions:</b> Tailored strategies to streamline operations for specific industries.</li>
                        <li><b>Data-Driven Insights:</b> Leverage analytics to refine processes and maximize efficiency.</li>
                    </ul>
                </div>
            </div>

            <div className="business-footer">
                <h2>Why Choose Our Business Solutions?</h2>
                <p>With our tailored business services, you gain:</p>
                <ul>
                    <li><b>Increased Efficiency:</b> Achieve more with fewer resources and reduced errors.</li>
                    <li><b>Scalability:</b> Adapt and grow with automated systems that evolve with your business.</li>
                    <li><b>Cost Savings:</b> Reduce operational costs through optimized processes.</li>
                </ul>
                <p><i>Revolutionize your business operations—embrace automation and unlock your true potential.</i></p>
            </div>
        </div>
    );
};

export default Automation;
