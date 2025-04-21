import React from 'react';
import './vtu.css';

const VTU: React.FC = () => {
    return (
        <><div className="dashboard-container">
            <header className="dashboard-header">
                <h1>VTU FEE <br/>RECIEPT</h1>

            </header>

            <div className="dashboard-image-container">
                <img
                    src="/Images/casestudies/vtu.png"
                    alt="Dashboard Overview"
                    className="dashboard-image" />
            </div>
        </div><div className="overview-row">
                <h2 className="overview-title">Brand Overview</h2>
                <p className="overview-text">
                    Our VTU Fee Receipt Solution was designed to transform the fee collection process for Karnataka University. It introduced a teacher-led fee submission system, allowing teachers to collect and deposit fees on behalf of students. This approach reduced crowding, improved efficiency, and made fee management more organized, ensuring a smoother experience for both students and administrative staff.            </p>
            </div><div className="overview-row">
                <h2 className="overview-title">Industry</h2>
                <p className="overview-text">Education</p>
            </div><div className="overview-row">
                <h2 className="overview-title">Acrayna's Services</h2>
                <p className="overview-text">Custom Software Development</p>
            </div><div className="overview-row">
                <h2 className="overview-title">The Challenge</h2>
                <div className="overview-text">
                    <p>
                        Karnataka University faced significant challenges in managing its fee collection process, particularly for:
                        Regular Fees: College entrance fees paid by new admissions

                        Occasional Fees: Fees for backlog exams, overdue payments, or special charges
                    </p>
                    <ul>
                        <li>Long queues and crowded offices</li>
                        <li>Delays in processing payments</li>
                        <li>Administrative inefficiencies for teachers and staff</li>
                    </ul>
                    <p>
                        The university needed a streamlined solution to handle fee collection, reduce crowding, and improve operational efficiency.</p>
                </div>
            </div><div className="overview-row">
                <h2 className="overview-title">The Approach</h2>
                <div className="overview-text">
                    <p>
                        Our team at Acroyna designed and developed a comprehensive admin panel to empower Alba Mart’s backend operations: </p>
                    <ol>
                        <li>
                            <strong>Bunch-Based Fee Collection:</strong>
                            <ul>
                                <li>Implemented a system where groups of 15–20 students were assigned to a teacher</li>
                                <li>
                                    Teachers collected fees from their assigned students and submitted the total amount to the bank in bulk, ensuring accountability and efficiency</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Payment Recording System:</strong>

                            <ul>
                                <li>Designed a module to track payments made by students and teachers, providing real-time updates for transparency</li>
                                <li>Ensured that all payments—regular or occasional—were accurately recorded</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                User-Friendly Dashboard:</strong>
                            <ul>
                                <li>Created dashboards for teachers to manage their assigned students’ fee records</li>
                                <li>Built an admin panel for the university staff to oversee collections and generate reports</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                Notification System:</strong>
                            <ul>
                                <li>Integrated notifications to remind students and teachers of pending dues and submission deadlines</li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                Scalable Infrastructure:</strong>
                            <ul>
                                <li>Ensured the system could handle the large number of students and multiple fee types efficiently</li>
                            </ul>
                        </li>

                    </ol>
                </div>
            </div></>

    );
};

export default VTU;
