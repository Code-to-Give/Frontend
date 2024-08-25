import React from "react";
import "./VolunteerNotif.css";

const Button = ({ label, onClick, disabled, className }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

const VolunteerItem = ({ name, status, onAccept, onDecline }) => {
  return (
    <div className="volunteerItem">
      <span className="volunteerItem">{name}</span>
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
          label="Accepted & Confirmed!"
          disabled={true}
          className="statusButton"
        />
      )}
    </div>
  );
};

const VolunteerNotif = () => {
  const donations = [
    { name: "MBS to SengKang", status: "accepted" },
    { name: "NUS to Bedok", status: "pending" },
    { name: "NTUC to Simei", status: "pending" },
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
      <h2 className="title">Current Volunteer Opportunities</h2>
      {donations.map((donation) => (
        <VolunteerItem
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

export default VolunteerNotif;
