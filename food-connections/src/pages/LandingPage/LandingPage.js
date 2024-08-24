import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Navbar from '../../components/Navbar/Navbar';

function LandingPage() {
  return (
    <div id="page">
      <Navbar />
      <div id="content">
        <div className="text-section">
          <h1 className="top">Connecting Donors,</h1>
          <h1 className="top">Feeding Communities</h1>
          <p id="describe">
            Designed to bridge the gap between food donors and beneficiaries in Singapore,
            enabling others to donate surplus food directly to those in need, 
            ensuring that no food goes to waste and every meal finds a plate.
          </p>
          <Link to="/signup" className="cta-button">Join Us to Make a Difference</Link>
        </div>
        <div className="info-sections">
          <div className="info-section" id="donor-section">
            <h2>For Donors</h2>
            <p>
              Whether you're a supermarket, restaurant, or individual, your surplus food can provide meals to those in need. 
              Use our platform to easily schedule pickups and track your contributions. Together, we can reduce food wastage 
              and help the less fortunate in our community.
            </p>
          </div>
          <div className="info-section" id="beneficiary-section">
            <h2>For Beneficiaries</h2>
            <p>
              If you are an individual or organization in need of food, our platform connects you with donors who can provide 
              the food you need. Register as a beneficiary and start receiving food donations directly from local donors, 
              ensuring that you and your loved ones have access to nutritious meals.
            </p>
          </div>
        </div>
      </div>
      <div id="banner-container">
        <img src="/banner.png" alt="Banner" id="banner-image" />
      </div>
    </div>
  );
}

export default LandingPage;
