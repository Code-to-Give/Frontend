import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './DonorApprovalPage.css';

function DonorApprovalPage() {
  return (
    <div className="donor-approval-page">
      <div className="approval-content">
        <h1>Your approval for registration is on its way!</h1>
        <p>Our team is reviewing it and you will be notified.</p>
        <Link to="/" className="back-to-home-button">Back to LandingPage</Link>
      </div>
    </div>
  );
}

export default DonorApprovalPage;
