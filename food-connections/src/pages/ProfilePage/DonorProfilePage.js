import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DonorProfilePage.css';
import LoggedInNavbar from "../../components/LoggedInNavBar/LoggedInNavBar";

function DonorProfilePage() {
    // state for the profile details (currently default values - can see if wanna connect to DB backend params)
    const [companyName] = useState('Company X');
    const [ceoName] = useState('Marry, CEO');
    const [email] = useState('mbs@gmail.com');
    const [phone] = useState('123-456-7890');
    const [location, setLocation] = useState('Marina Bay');

    // temp state for editing location
    const [tempLocation, setTempLocation] = useState(location);

    // state for edit location model
    const [isEditLocationModalOpen, setIsEditLocationModalOpen] = useState(false);

    // other states!
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

    const handleEditLocationOpen = () => {
        setTempLocation(location);
        setIsEditLocationModalOpen(true);
    };

    const handleEditLocationClose = () => {
        setIsEditLocationModalOpen(false);
    };

    const handleSaveLocation = () => {
        setLocation(tempLocation);
        console.log('Location updated:', tempLocation);
        handleEditLocationClose();
    };

    return (
      <div>
        <LoggedInNavbar />
        <div className="profile-page">
            <div className="profile-sidebar">
                <img src="path_to_logo_or_profile_picture" alt="Company Logo" className="profile-logo" />
                <div className="profile-info">
                    <h2>{companyName}</h2>
                    <p>{ceoName}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    {/* <p>Location: {location}</p> */}
                </div>
                <button className="edit-profile-button" onClick={handleEditLocationOpen}>Edit Location</button>
            </div>
            <div className="profile-main">
                <div className="header-bar">
                    <h1>Welcome, {companyName}</h1>
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

            {/* Edit Location Modal */}
            {isEditLocationModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleEditLocationClose}>&times;</span>
                        <h3>Edit Location</h3>
                        <div className="input-group">
                            <label>Location:</label>
                            <input
                                type="text"
                                value={tempLocation}
                                onChange={(e) => setTempLocation(e.target.value)}
                            />
                        </div>
                        <button onClick={handleSaveLocation} className="modal-button">Save</button>
                    </div>
                </div>
            )}

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
