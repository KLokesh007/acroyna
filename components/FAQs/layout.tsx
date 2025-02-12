'use client';

import React, { useState } from "react";
import "./lay.css";

const FAQLayout: React.FC = () => {
  const faqItems = [
    {
      question: "How can we start a project together?",
      answer:
        "You can start by reaching out to us via our contact form or email. We will schedule a meeting to discuss your requirements and project scope.",
    },
    {
      question: "What sectors do you specialise in?",
      answer:
        "We specialize in various sectors, including e-commerce, healthcare, finance, and SaaS businesses.",
    },
    {
      question: "What is your working model?",
      answer:
        "We follow an agile development process with regular updates, feedback loops, and iterative development to ensure project success.",
    },
    {
      question: "What would you need from me to get started?",
      answer:
        "We would need a clear project brief, your business goals, preferred technology stack (if any), and initial design references.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle logic
  };

  return (
    <div className="faq-container">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`} // Add 'open' class when active
        >
          <div
            className={`faq-header ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="faq-number">{`0${index + 1}`}</span>
            <span className="faq-question">{item.question}</span>
            <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQLayout;