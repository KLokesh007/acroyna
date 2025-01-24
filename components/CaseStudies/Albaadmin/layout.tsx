import React from 'react';
import './admin.css';

const AdminDashboard: React.FC = () => {
    return (
        <><div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Alba Mart Admin</h1>
                <h2>Web App</h2>
            </header>

            <div className="dashboard-image-container">
                <img
                    src="https://res.cloudinary.com/dt5grsivq/image/upload/v1737056786/Group_1309_wyfbzx.png"
                    alt="Dashboard Overview"
                    className="dashboard-image" />
            </div>
        </div><div className="overview-row">
                <h2 className="overview-title">Brand Overview</h2>
                <p className="overview-text">
                    The Alba Mart Admin Panel serves as the backbone of the Alba Mart ecosystem. It empowers
                    administrators to manage inventory, oversee customer orders, and handle product listings with
                    ease. With features like real-time updates, analytics, and user management, the admin panel
                    ensures smooth operations and excellent service delivery on the Alba Mart platform.              </p>
            </div><div className="overview-row">
                <h2 className="overview-title">Industry</h2>
                <p className="overview-text">Retail and E-Commerce</p>
            </div><div className="overview-row">
                <h2 className="overview-title">Acrayna's Services</h2>
                <p className="overview-text">Admin Panel Design & Development</p>
            </div><div className="overview-row">
                <h2 className="overview-title">The Challenge</h2>
                <div className="overview-text">
                    <p>
                        To efficiently manage Alba Mart’s growing customer base and streamline operations, they required a robust admin panel to oversee:                    </p>
                    <ul>
                        <li>Product inventory and updates</li>
                        <li>Order tracking and fulfillment</li>
                        <li>Real-time analytics for business decisions</li>
                    </ul>
                    <p>
                        The challenge was to create an intuitive and feature-rich dashboard that allowed admins to manage the platform seamlessly.                    </p>
                </div>
            </div><div className="overview-row">
                <h2 className="overview-title">The Approach</h2>
                <div className="overview-text">
                    <p>
                        Our team at Acroyna designed and developed a comprehensive admin panel to empower Alba Mart’s backend operations: </p>
                    <ol>
                        <li>
                            <strong>Custom Dashboard:</strong>
                            <ul>
                                <li>Designed an easy-to-navigate interface with a focus on data visualization</li>
                                <li>Provided admins with instant access to KPIs, order summaries, and customer activity</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Inventory Management:</strong>

                            <ul>
                                <li>Real-time inventory updates with automated stock alerts</li>
                                <li>Bulk product uploads and easy editing options</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                Order Management:</strong>
                            <ul>
                                <li>End-to-end visibility of orders from placement to delivery</li>
                                <li>Features for tracking order status, handling cancellations, and managing refunds</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                Customer Management::</strong>
                            <ul>
                                <li>Centralized access to user profiles, purchase history, and queries</li>
                                <li>Tools to send personalized promotions and resolve support tickets efficiently</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                Analytics & Reporting:</strong>
                            <ul>
                                <li>Integrated analytics for tracking sales performance, delivery efficiency, and customer satisfaction</li>
                                <li>Exportable reports for strategic planning</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                Role-Based Access:</strong>
                            <ul>
                                <li> Multi-level access for admins, managers, and support teams with customized permissions</li>
                           </ul>
                        </li>
                    </ol>
                </div>
            </div><div className="overview-image-container">
                <img
                    src="https://res.cloudinary.com/dt5grsivq/image/upload/v1737056786/Group_1309_wyfbzx.png"
                    alt="Alba Mart Screenshot"
                    className="overview-image" />
            </div></>

    );
};

export default AdminDashboard;
