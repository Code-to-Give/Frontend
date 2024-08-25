import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DonorProfilePage.css';
import LoggedInNavbar from "../../components/LoggedInNavBar/LoggedInNavBar";

function DonorProfilePage() {
    const [status, setStatus] = useState('Accepted');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleStatus = () => {
        setStatus(prevStatus => (prevStatus === 'Accepted' ? 'Rejected' : 'Accepted'));
    };

    const buttonClass = status === 'Accepted' ? 'status-button status-accepted' : 'status-button status-rejected';

    const handlePopupOpen = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    return (
      <div>
        <LoggedInNavbar />
        <div className="profile-page">
            <div className="profile-sidebar">
                <img src="path_to_logo_or_profile_picture" alt="Company Logo" className="profile-logo" />
                <div className="profile-info">
                    <h2>Company X</h2>
                    <p>Marry, CEO</p>
                    <p>Email: mbs@gmail.com</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Location: Marina Bay</p>
                    <button className="edit-profile-button">Edit Profile</button>
                </div>
            </div>
            <div className="profile-main">
                <div className="header-bar">
                    <h1>Welcome, Company X</h1>
                    <Link to="/home" className="back-button">Back to Home</Link>
                </div>
                <div className="dashboard">
                    <div className="dashboard-section">
                        <h2>History</h2>
                        <button onClick={handlePopupOpen} className="modal-button">
                            View Donation Details
                        </button>
                        <p>Beneficiary: ABC Home</p>
                        <button onClick={toggleStatus} className={buttonClass}>
                            {status}
                        </button>
                    </div>
                    <div className="dashboard-section">
                        <h2>Pending Donations</h2>
                        <p>Quantity: 100 trays</p>
                        <p>Type: Halal</p>
                    </div>
                </div>
            </div>

            {/* Popup component */}
            {isPopupOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handlePopupClose}>&times;</span>
                        <h3>Donation Details</h3>
                        <p>Beneficiary: ABC Home</p>
                        <p>Details: Established in 2003, located at Jurong East</p>
                        <p>Timing: Monday 16:00-20:00h</p>
                        <p>Donation: 100 trays of fried rice (Halal)</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    );
}

export default DonorProfilePage;
