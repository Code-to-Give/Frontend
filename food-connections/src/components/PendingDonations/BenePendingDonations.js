import React from "react";
import "./BenePendingDonations.css";

const Button = ({ label, onClick, disabled, className }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

const DonationItem = ({ name, status, onAccept, onDecline }) => {
  return (
    <div className="donationItem">
      <span className="donationName">{name}</span>
      {status === "pending" ? (
        <div className="buttonGroup">
          <Button label="Accept" onClick={onAccept} className="acceptButton" />
          <Button
            label="Decline"
            onClick={onDecline}
            className="declineButton"
          />
        </div>
      ) : (
        <Button
          label="On the way..."
          disabled={true}
          className="statusButton"
        />
      )}
    </div>
  );
};

const BenePendingDonations = () => {
  const donations = [
    { name: "MBS", status: "onTheWay" },
    { name: "NUS", status: "pending" },
    { name: "NTUC", status: "pending" },
  ];

  const handleAccept = (name) => {
    console.log(`${name} accepted`);
    // Handle accept logic
  };

  const handleDecline = (name) => {
    console.log(`${name} declined`);
    // Handle decline logic 
  };

  return (
    <div className="container">
      <h2 className="title">Pending donations</h2>
      {donations.map((donation) => (
        <DonationItem
          key={donation.name}
          name={donation.name}
          status={donation.status}
          onAccept={() => handleAccept(donation.name)}
          onDecline={() => handleDecline(donation.name)}
        />
      ))}
    </div>
  );
};

export default BenePendingDonations;
