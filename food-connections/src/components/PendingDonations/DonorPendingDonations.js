import React from "react";
import "./DonorPendingDonations.css";

const Button = ({ label, onClick, disabled, className }) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

//need to add another button for declined? if auto rematch, then dunnid, can b considered the matching... beneficiary
const DonationItem = ({ name, status }) => {
    return (
        <div className="donationItem">
            <span className="donationName">{name}</span>
            {status === "pending" ? (
                <Button
                    label="Matching..."
                    disabled={true}
                    className="statusButton"
                />
            ) : (
                <Button
                    label="Accepted"
                    disabled={true}
                    className="statusButton"
                />
            )}
        </div>
    );
};

const DonorPendingDonations = () => {
    const donations = [
        { name: "ABC Home", status: "Accepted" },
        { name: "DEF Home", status: "pending" },
    ];

    return (
        <div className="container">
            <h2 className="title">Pending donations</h2>
            {donations.map((donation) => (
                <DonationItem
                    key={donation.name}
                    name={donation.name}
                    status={donation.status}
                />
            ))}
        </div>
    );
};

export default DonorPendingDonations;
