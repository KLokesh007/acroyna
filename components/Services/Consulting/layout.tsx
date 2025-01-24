import React from "react";
import "./consult.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const Consulting: React.FC = () => {
    return (
        <div className="consulting-container">
            <h1 className="consulting-heading">Consulting &<br/>
            Strategy</h1>
            <p className="consulting-subheading">
                Turn your business challenges into opportunities with our Consulting & Strategy services. We partner with you to craft actionable strategies that drive growth, innovation, and success. Whether you’re launching a new initiative or optimizing existing processes, our team delivers insights and solutions tailored to your unique goals and industry dynamics.            </p>
            <div className="consulting-content">
                <div className="consulting-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li>
                            <b>Business Analysis: </b> In-depth evaluations to identify opportunities and pain points.
                        </li>
                        <li>
                            <b>Strategic Planning: </b> Customized roadmaps to align your business with its goals.
                        </li>
                        <li>
                            <b>Technology Consulting: </b> Guidance on adopting and implementing the right tech solutions.
                        </li>
                        <li>
                            <b>Process Optimization: </b> Streamlined workflows to enhance efficiency and productivity.
                        </li>
                        <li>
                            <b>Market Insights: </b> Data-driven recommendations to stay ahead of the competition.
                        </li>
                    </ul>
                </div>
                <div className="md:mt-30 flex h-90 w-full items-center justify-center lg:mr-40  lg:w-1/3">
                    <LottieAnimation
                        animationPath="/lottie/consulting.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
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
                    <i>
                    Let’s collaborate to transform your vision into a reality—unlock new possibilities with us.                    </i>
                </p>
            </div>
        </div>
    );
};

export default Consulting;
