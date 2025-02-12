'use client'

import React from "react";
import dynamic from "next/dynamic";
import "./ai.css";

// Dynamically import LottieAnimation to prevent SSR issues
const LottieAnimation = dynamic(() => import("@/components/Lottie/LottieAnimation"), { ssr: false });

const Aiml: React.FC = () => {
  return (
    <div className="ai-ml-container">
      <div className="ai-ml-header">
        <div className="ai-ml-heading">
          <span className="ai-bold">AI & <br /> Machine Learning</span>
        </div>
        <p className="ai-ml-subheading">
          Accelerate your AI/ML journey with our full-suite of artificial intelligence and machine learning services. 
          Our skilled teams develop and implement tailored AI/ML solutions, including predictive models, 
          language models, generative AI, process automation, and strategic consulting.
        </p>
      </div>

      <div className="ai-ml-content">
        {/* Left side: Lottie Animation */}
        <div className="ai-ml-image">
          <LottieAnimation animationPath="/lottie/Ai.json" loop autoplay />
        </div>

        {/* Right side: AI Offerings */}
        <div className="ai-ml-details">
          <h2>What We Offer:</h2>
          <ul>
            <li><b>Predictive Analytics:</b> Leverage AI to forecast trends and make informed decisions.</li>
            <li><b>Process Automation:</b> Streamline operations with intelligent systems that save time and resources.</li>
            <li><b>Custom ML Models:</b> Develop tailored machine learning algorithms for your unique business challenges.</li>
            <li><b>Natural Language Processing (NLP):</b> Enable smarter interactions with conversational AI and language-based systems.</li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="ai-ml-footer">
        <h2>Why Choose AI & ML Solutions?</h2>
        <p>By integrating AI and ML into your workflows, you gain:</p>
        <ul>
          <li><b>Enhanced Efficiency:</b> Reduce operational costs and optimize performance.</li>
          <li><b>Data-Driven Insights:</b> Make smarter decisions with predictive analytics.</li>
          <li><b>Scalability:</b> Adaptive AI models that grow with your business.</li>
        </ul>
        <p><i>Embrace the future with intelligent technology—let’s innovate together.</i></p>
      </div>
    </div>
  );
};

export default Aiml;
