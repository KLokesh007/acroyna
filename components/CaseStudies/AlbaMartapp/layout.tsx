import React from 'react';
import './alba.css';

const AlbaMartOverview = () => {
    return (
        <div className="overview-container">
            <div className="overview-mockup-container">
        <img
          src="/Images/casestudies/albamartcase.png"
          alt="Alba Mart Mockup"
          className="overview-mockup-image"
        />
      </div>
            <div className="overview-row">
                <h2 className="overview-title">Brand Overview</h2>
                <p className="overview-text">
                    Alba Mart is an innovative platform similar to City Mall and Zepto, providing customers with a seamless online grocery shopping experience. It offers a wide range of products, ensuring convenience, affordability, and timely delivery. Our team worked on designing and developing the Alba Mart platform to enhance user experience and meet the growing demand for online grocery solutions.
                </p>
            </div>

            <div className="overview-row">
                <h2 className="overview-title">Industry</h2>
                <p className="overview-text">Retail and E-Commerce</p>
            </div>

            <div className="overview-row">
                <h2 className="overview-title">Acrayna's Services</h2>
                <p className="overview-text">UI/UX Design, Website & App Development</p>
            </div>

            <div className="overview-row">
                <h2 className="overview-title">The Challenge</h2>
                <div className="overview-text">
                    <p>
                        Alba Mart, a fast-growing online grocery platform, aimed to revolutionize grocery shopping in urban areas. They wanted an intuitive platform to handle:
                    </p>
                    <ul>
                        <li>Seamless browsing for products</li>
                        <li>Quick and reliable online grocery delivery</li>
                        <li>Efficient inventory management for real-time updates</li>
                    </ul>
                    <p>
                        They needed a solution that could cater to thousands of users daily, ensuring reliability, speed, and an outstanding user experience.
                    </p>
                </div>
            </div>

            <div className="overview-row">
                <h2 className="overview-title">The Approach</h2>
                <div className="overview-text">
                    <p>
                        Our team at Acrayna delivered a fully integrated solution, handling the project from concept to launch:
                    </p>
                    <ol>
                        <li>
                            <strong>UI/UX Design:</strong>
                            <ul>
                                <li>Designed a user-friendly interface for both web and mobile platforms, focusing on simplicity and ease of navigation.</li>
                                <li> Highlighted features like category filters, personalized recommendations, and a one-click checkout system.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Website & App Development:</strong>  
                            <ul>
                                <li>Built a scalable e-commerce platform with seamless performance across devices.</li>
                                <li>Integrated features like:</li>
                                <ul>
                                <li>Real-time inventory tracking</li>
                                <li>Secure payment gateways</li>
                                <li>Geo-based delivery scheduling</li>
                            </ul>
                            </ul>
                           
                        </li>
                        <li>
                            <strong>Backend System:</strong> Developed a robust backend system for:
                            <ul>
                                <li>Efficient order management</li>
                                <li>Delivery tracking</li>
                                <li>Instant notifications for order updates</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="overview-image-container">
        <img
          src="/Images/casestudies/albamart1.png"
          alt="Alba Mart Screenshot"
          className="overview-image"
        />
      </div>
        </div>
    );
};

export default AlbaMartOverview;
