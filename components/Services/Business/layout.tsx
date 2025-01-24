import React from "react";
import "./business.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const Automation: React.FC = () => {
    return (
        <div className="business-container">
            <h1 className="business-heading">Business Process<br /> Automation</h1>
            <p className="business-subheading">
                Optimize your operations with our Business Automation
                Services, designed to eliminate inefficiencies, reduce manual
                workloads, and enhance productivity. By leveraging advanced
                technologies, we help you automate repetitive tasks and focus
                on what truly matters—growing your business. From workflow
                automation to intelligent process optimization, we create solutions
                that adapt to your unique needs.            </p>
            <div className="business-content">
            <div className="md: flex h-90 w-full items-center justify-center lg:mr-20 lg:w-1/2">
                    <LottieAnimation
                        animationPath="/lottie/business.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className="business-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li>
                            <b> Workflow Automation: </b>Automate routine tasks to save time
                            and resources.
                        </li>
                        <li>
                            <b>Intelligent Process Optimization: </b> Use AI and machine learning to make smarter decisions faster.
                        </li>
                        <li>
                            <b>CRM & ERP Integration: </b> Enhance collaboration and data flow across your organization.
                        </li>
                        <li>
                            <b>Custom Automation Solutions: </b> Tailored strategies to streamline operations for specific industries.
                        </li>
                        <li>
                            <b>Data-Driven Insights:</b> Leverage analytics to refine processes and maximize efficiency.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="business-footer">
                <h2>Why Choose Our Business Solutions?</h2>
                <p>With our tailored business services, you gain:</p>
                <ul>
                    <li>Increased Efficiency: Achieve more with fewer resources and reduced errors.</li>
                    <li>Scalability: Adapt and grow with automated systems that evolve with your business.</li>
                    <li>Cost Savings: Reduce operational costs through optimized processes</li>
                </ul>
                <p>
                    <i>
                    Revolutionize your business operations—embrace automation and unlock your true potential.
                    </i>
                </p>
            </div>
        </div>


    );
};

export default Automation;