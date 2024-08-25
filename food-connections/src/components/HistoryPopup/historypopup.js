import React from 'react'
import { Helmet } from 'react-helmet'
import './historypopup.css'

function Historypopup({ show, handleClose, bene, benedetails, benelocation, timing, quantity, type}) {
    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Donation Information</h2>
                <div className="beneficiary-section">
                    <p><strong>Beneficiary:</strong> {bene}</p>
                    <p><strong>About Beneficiary:</strong> {benedetails}</p>
                    <p><strong>Location:</strong> {benelocation}</p>
                    <p><strong>Food Safe for Consumption Timings:</strong> {timing}</p>
                </div>
                <h3>Donation Details</h3>
                <div className="donation-section">
                    <p><strong>Quantity:</strong> {quantity}</p>
                    <p><strong>Type:</strong> {type}</p>
                </div>
            </div>
        </div>
    );
}

export default Historypopup;
