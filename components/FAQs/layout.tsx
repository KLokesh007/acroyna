import React from "react";
import "./lay.css";

const FAQLayout: React.FC = () => {
  const faqItems = [
    "How can we start a project together?",
    "What sectors do you specialise in?",
    "What is your working model?",
    "What would you need from me to get started?",
  ];

  return (
    <div className="faq-container">
      {faqItems.map((item, index) => (
        <div className="faq-item" key={index}>
          <span className="faq-number">{`0${index + 1}`}</span>
          <span className="faq-question">{item}</span>
          <span className="faq-toggle">+</span>
        </div>
      ))}
    </div>
  );
};

export default FAQLayout;
