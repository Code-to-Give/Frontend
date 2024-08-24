import React from 'react';
import './InformationCard.css';

const InformationCard = ({ company, name, email, phone, location }) => {
    return (
        <div className="container">
            <div className="palette" />
            <img className="profile-image" src="https://via.placeholder.com/150" alt="profile" />
            <div className="info-container">
                <h1>{company}</h1>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Location: {location}</p>
            </div>
        </div>
    );
};

export default InformationCard;