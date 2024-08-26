import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BeneProfilePage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../utils/AuthContext";

function BeneProfilePage() {
  const [status, setStatus] = useState("Delivered");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { user } = useAuth(); 
  const parsedUser = user ? JSON.parse(user) : {}; // Parsing user data
  const navigate = useNavigate();

  const toggleStatus = () => {
    setStatus((prevStatus) =>
      prevStatus === "Delivered" ? "Rejected" : "Delivered"
    );
  };

  const buttonClass =
    status === "Delivered"
      ? "status-button status-delivered"
      : "status-button status-rejected";

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  const getHomeLink = () => {
    switch (parsedUser.role) {
      case "Donor":
        return "/donor-home";
      case "Beneficiary":
        return "/bene-home";
      case "Volunteer":
        return "/volunteer-home";
      default:
        return "/home";
    }
  };

  return (
    <div>
      <Navbar />
      <div className="profile-page">
        <div className="profile-sidebar">
          <img
            src="path_to_logo_or_profile_picture"
            alt="Company Logo"
            className="profile-logo"
          />
          <div className="profile-info">
            <h2>{parsedUser.company_name ?? "Beneficiary"}</h2>
            <p>{parsedUser.name ?? "Beneficiary"}</p>
            <p>Email: {parsedUser.email ?? "Beneficiary"}</p>
            <p>{parsedUser.phone_number ?? "Beneficiary"}</p>
            <button className="edit-profile-button">Edit Profile</button>
          </div>
        </div>

        <div className="profile-main">
          <div className="header-bar">
            <h1>Welcome, {parsedUser.company_name ?? "Beneficiary"}</h1>
            <Link to={getHomeLink()} className="back-button">
              Back to Home
            </Link>
          </div>
          <div className="dashboard">
            <div className="dashboard-section">
              <h2>History</h2>
              <button onClick={handlePopupOpen} className="modal-button">
                View Donation Details
              </button>
              <p>Donor: MBS</p>
              <button onClick={toggleStatus} className={buttonClass}>
                {status}
              </button>
            </div>
            <div className="dashboard-section">
              <h2>Food Request Details</h2>
              <p>Regularity: 2 times per week</p>
              <p>Quantity: 50 trays</p>
              <p>Type: Perishable, Halal</p>
            </div>
          </div>
        </div>
      </div>
      {/* Popup component */}
      {isPopupOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>
            <h3>Donation Details</h3>
            <p>Donor: MBS</p>
            <p>Details: Established in 2010, located at Bayfront</p>
            <p>Timing: Monday 16:00-20:00h</p>
            <p>Donation: 100 trays of fried rice (Halal)</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeneProfilePage;
