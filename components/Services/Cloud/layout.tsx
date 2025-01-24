import React from "react";
import "./cloud.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const Ccloud: React.FC = () => {
    return (
        <div className="cloud-container">
            <h1 className="cloud-heading">Cloud Solutions</h1>
            <p className="cloud-subheading">
                Unlock the true potential of your business with our Cloud Solutions. We help you migrate, manage, and optimize your operations on the cloud, ensuring you stay ahead in today’s fast-paced digital landscape. Whether you're looking for a seamless transition to cloud-based infrastructure or need customized solutions for your unique requirements, we've got you covered.
            </p>
            <div className="cloud-content">
            <div className="md:mt-30 flex h-90 w-full items-center justify-center lg:mr-40  lg:w-1/3">
                    <LottieAnimation
                        animationPath="/lottie/cloud.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className="cloud-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li>
                            <b>Cloud Migration:</b>  Smoothly transition your existing systems to the cloud with minimal disruption.
                        </li>
                        <li>
                            <b>Cloud Management:</b> Ongoing support and optimization to ensure your cloud infrastructure runs efficiently.
                        </li>
                        <li>
                            <b> Scalability:</b>Expand resources effortlessly to meet growing demands without hefty investments.
                        </li>
                        <li>
                            <b>Enhanced Security:</b> Protect your data with state-of-the-art cloud security protocols and solutions.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cloud-footer">
                <h2>Why Choose Cloud Solutions?</h2>
                <p>With our cloud services, you gain:</p>
                <ul>
                    <li>Cost savings by reducing dependency on physical infrastructure.</li>
                    <li>Greater accessibility, allowing your team to work from anywhere.</li>
                    <li>The ability to focus on growth while we handle the complexities of the cloud.</li>
                </ul>
                <p>
                    <i>
                    Take your business to new heights—embrace the power of the cloud with confidence.
                    </i>
                </p>
            </div>
        </div>

    );
};

export default Ccloud;
