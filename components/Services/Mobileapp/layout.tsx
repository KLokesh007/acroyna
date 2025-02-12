'use client'
import React from "react";
import dynamic from "next/dynamic";
import "./mobile.css";

// Dynamically import LottieAnimation to prevent SSR issues
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

const MobileApp: React.FC = () => {
    return (
        <div className="mobileapp-container">
            <h1 className="mobileapp-heading">
                Crafting intuitive and <br />
                user-centric mobile app<br />
                designs that seamlessly<br />
                merge functionality,<br />
                aesthetics, and innovation
            </h1>
            <p className="mobileapp-subheading">
                Mobile App Design for iOS & Android
            </p>
            <div className="mobileapp-content">
                <div className="md:flex h-90 w-full items-center justify-center lg:mr-20 lg:w-1/2">
                    <LottieAnimation
                        animationPath="/lottie/mobileapp.json"
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className="mobileapp-details">
                    <h2>
                        What is<br />
                        Mobile App Design<br />
                        for iOS & Android
                    </h2>
                    <p>
                        Mobile app design for iOS and Android involves creating user interfaces and experiences that are tailored to the specific design guidelines and user expectations of each platform. In designing for both platforms, understanding these nuances will help ensure that the app is well-received by users familiar with each operating system.
                    </p>
                </div>
            </div>
            <div className="mobileapp-footer">
                <h2>Our Role</h2>
                <p>
                    Our role in mobile app design is to provide a tailored approach that focuses on understanding
                    the unique needs of users, the functionality of the app, and the brand identity. We take the time
                    to research the target audience, ensuring the app is not only visually appealing but also intuitive
                    and user-friendly.
                </p>
                <p>
                    <i>All/Development/Maintenance/E-Commerce/DevOps</i>
                </p>
            </div>
        </div>
    );
};

export default MobileApp;
