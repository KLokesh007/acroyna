import React from "react";
import "./ai.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const Aiml: React.FC = () => {
  return (
    <div className="ai-ml-container">
      <h1 className="ai-ml-heading">AI & Machine Learning</h1>
      <p className="ai-ml-subheading">
        Accelerate your AI/ML journey with our full-suite of artificial
        intelligence and machine learning services. Our skilled teams develop
        and implement tailored AI/ML solutions, including predictive models,
        language models, generative AI, process automation, and strategic
        consulting.
      </p>
      <div className="ai-ml-content">
      <div className="md: flex h-90 w-full items-center justify-center lg:mr-20 lg:w-1/3">
                    <LottieAnimation
                        animationPath="/lottie/Ai.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
                </div>
        <div className="ai-ml-details">
          <h2>What We Offer:</h2>
          <ul>
            <li>
              <b>Predictive Analytics:</b> Leverage AI to forecast trends and
              make informed decisions.
            </li>
            <li>
              <b>Process Automation:</b> Streamline operations with intelligent
              systems that save time and resources.
            </li>
            <li>
              <b>Custom ML Models:</b> Develop tailored machine learning
              algorithms for your unique business challenges.
            </li>
            <li>
              <b>Natural Language Processing (NLP):</b> Enable smarter
              interactions with conversational AI and language-based systems.
            </li>
          </ul>
        </div>
      </div>
      <div className="ai-ml-footer">
        <h2>Why Choose AI & ML Solutions?</h2>
        <p>By integrating AI and ML into your workflows, you gain:</p>
        <ul>
          <li>Enhanced efficiency and reduced operational costs.</li>
          <li>Deeper insights through data-driven decision-making.</li>
          <li>Scalable and adaptive systems that grow with your business.</li>
        </ul>
        <p>
          <i>
            Embrace the future with intelligent technology—let’s innovate
            together.
          </i>
        </p>
      </div>
    </div>
  );
};

export default Aiml;
