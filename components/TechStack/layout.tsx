'use client';

import { TechCard } from "../Tech-card/techcard";
import './tech.css';
export default function TechStack() {
  const technologies = [
    {
      icon: "flutter.svg",
      title: "Flutter",
      description: "A UI toolkit by Google for building natively compiled cross-platform applications for iOS, Android, web, and desktop using a single codebase."
    },
    {
      icon: "react.svg",
      title: "React",
      description: "A JavaScript library for building fast and interactive user interfaces, primarily for single-page web applications like Facebook."
    },
    {
      icon: "java.svg",
      title: "Java",
      description: "A versatile and widely used object-oriented programming language known for its 'write once, run anywhere' capability, used in building web, mobile, and enterprise applications."
    },
    {
      icon: "js.svg",
      title: "Java Script",
      description: "A dynamic programming language that enables interactive and complex features on websites, such as animated updates, interactive maps, and forms."
    },
    {
      icon: "html5.svg",
      title: "HTML",
      description: "The standard markup language for structuring content on the web, defining the core elements of web pages."
    },
    {
      icon: "css3.svg",
      title: "CSS",
      description: "A style sheet language used for describing the presentation and styling of a web page, including layouts, colors, and fonts."
    },
    {
      icon: "springboot.svg",
      title: "Spring Boot",
      description: "A popular framework for building robust and scalable web and enterprise applications, simplifying development with pre-configured settings."
    },
    {
      icon: "django.svg",
      title: "Django",
      description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design, ideal for building secure and scalable web applications."
    },
    {
      icon: "flask.svg",
      title: "Flask",
      description: "A lightweight Python web framework known for its simplicity and flexibility suitable for small to medium sized web applications and APIs."
    },
    {
      icon: "xml.svg",
      title: "XML",
      description: "A markup language used to define and transport data in a structured format, often used in web and software applications."
    },
    {
      icon: "dart.svg",
      title: "Dart",
      description: "A programming language developed by Google, optimized for building fast, especially when using Flutter for cross-platform development."
    },
    {
      icon: "sql.svg",
      title: "Sql",
      description: "A domain-specific language used to manage and query relational databases to retrieve, update, and manipulate data."
    },
    {
      icon: "firebase.svg",
      title: "Firebase",
      description: "A backend-as-a-service platform by Google providing tools for authentication, real-time databases, cloud storage, and analytics for web and mobile apps."
    },
    {
      icon: "firestore.svg",
      title: "Firestore",
      description: "A NoSQL database by Firebase designed for scalable, real-time data storage and synchronization across devices."
    }
  ];

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-header">
        <h2 className="tech-stack-title">Our Tech Stack</h2>
        <h3 className="tech-stack-subtitle">Technologies we work on</h3>
      </div>
      <div className="tech-stack-grid">
        {technologies.map((tech) => (
          <TechCard
            key={tech.title}
            icon={tech.icon}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </div>
    </section>
  );
}

