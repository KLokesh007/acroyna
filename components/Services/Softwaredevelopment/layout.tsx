import React from "react";
import "./soft.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const SoftwareDevelopment: React.FC = () => {
    return (
        <div className="softwaredevelopment-container">
            <h1 className="softwaredevelopment-heading">Custom Software<br />
                Development</h1>
            <p className="softwaredevelopment-subheading">
                Unlock your business's true potential with our Custom Software Development services. We design and develop software solutions that are precisely tailored to meet your unique business needs, challenges, and goals. Whether you need to streamline operations, enhance productivity, or create new opportunities, our team ensures the final product aligns perfectly with your vision.            </p>
            <div className="softwaredevelopment-content">
                <div className="softwaredevelopment-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li>
                            <b>End-to-End Development: </b> From ideation and design to deployment and maintenance, we handle the entire development lifecycle.
                        </li>
                        <li>
                            <b>Scalability: </b> Solutions that grow with your business and adapt to evolving needs.
                        </li>
                        <li>
                            <b>Cutting-Edge Technology: </b> We leverage the latest tools and frameworks to deliver high-performance applications.
                        </li>
                        <li>
                            <b>Seamless Integration: </b> Ensure compatibility with your existing systems for a smooth transition.
                        </li>
                    </ul>
                </div>
                <div className="md:  flex h-90 w-full items-center justify-center lg:mr-40  lg:w-1/2">
                    <LottieAnimation
                        animationPath="/lottie/software.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
                </div>
            </div>
            <div className="softwaredevelopment-footer">
                <h2>Why Choose Us?</h2>
               
                <p>
                    With our user-focused approach and expertise in various industries, we ensure that every line of code we write serves a purpose – to add value to your business. Experience software that is not only functional but also reliable and future-ready.
                </p>
                <p>
                    <i>
                    Ready to build software as unique as your business? Let’s start crafting your solution today.
                    </i>
                </p>
            </div>
        </div>
    );
};

export default SoftwareDevelopment;
