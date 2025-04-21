import React from 'react';
import './get.css';

const Getway: React.FC = () => {
    return (
        <><div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Getway <br />Solution</h1>

            </header>

            <div className="dashboard-image-container">
                <img
                    src="/Images/casestudies/getway.png"
                    alt="Dashboard Overview"
                    className="dashboard-image" />
            </div>
        </div><div className="overview-row">
                <h2 className="overview-title">Brand Overview</h2>
                <p className="overview-text">
                    Getway Solution is a comprehensive platform designed to simplify and streamline transportation services. By enabling users to book vehicles quickly and efficiently, the platform caters to both personal and business needs. From intuitive booking systems to robust admin tools for managing fleets, Getway Solution is the ultimate solution for modern-day transportation challenges.      </p>
            </div><div className="overview-row">
                <h2 className="overview-title">Industry</h2>
                <p className="overview-text">Education & E-Learning</p>
            </div><div className="overview-row">
                <h2 className="overview-title">Acrayna's Services</h2>
                <p className="overview-text">In-House Product Design & Development</p>
            </div><div className="overview-row">
                <h2 className="overview-title">The Challenge</h2>
                <div className="overview-text">
                    <p>
                        Students preparing for exams often face challenges such as:
                    </p>
                    <ul>
                        <li>Limited access to quality study materials</li>
                        <li>Financial constraints that prevent them from purchasing necessary books</li>
                        <li>Difficulty finding resources specific to their syllabus or exam requirements</li>
                    </ul>
                    <p>
                        The goal was to create a centralized platform where students could access relevant books for free, enabling them to focus on their studies without worrying about costs or availability.</p>
                </div>
            </div><div className="overview-row">
                <h2 className="overview-title">The Approach</h2>
                <div className="overview-text">
                    <p>
                        We developed a user-centric website to serve as a digital library for students. Key features include </p>
                    <ol>
                        <li>
                            <strong>Comprehensive Book Collection:</strong>
                            <ul>
                                <li>Curated a vast library of books for exams like UPSC, NEET, JEE and other academic fields</li>
                                <li>
                                    Enabled easy uploading of new materials to keep the collection updated.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Personalized Search & Filters:</strong>

                            <ul>
                                <li>Designed advanced search and filter options to help students find books based on their syllabus, exam, or subject.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                User-Friendly Interface:</strong>
                            <ul>
                                <li>Developed a clean and intuitive interface to ensure accessibility for all students, including those who are not tech-savvy</li>

                            </ul>
                        </li>
                        <li>
                            <strong>
                                Completely Free Access:</strong>
                            <ul>
                                <li>Made all resources available without subscription fees or hidden charges</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                Scalability:</strong>
                            <ul>
                                <li>Built the platform to accommodate a growing number of users and expanding book collections.</li>
                            </ul>
                        </li>

                    </ol>
                </div>
            </div></>

    );
};

export default Getway;
