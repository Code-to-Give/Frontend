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
const DonationItem = ({ name, status, quantity, location, expiry_time }) => {
  let label;
  let className;

  switch (status) {
    case "Ready":
      label = "Ready";
      className = "statusButton ready";
      break;
    case "Allocated":
      label = "Matching";
      className = "statusButton allocated";
      break;
    case "Accepted":
      label = "Accepted";
      className = "statusButton accepted";
      break;
    case "Collected":
      label = "Collected";
      className = "statusButton collected";
      break;
    case "Rejected":
      label = "Rejected";
      className = "statusButton rejected";
      break;
    default:
      label = "Unknown";
      className = "statusButton unknown";
      break;
  }

  return (
    <div className="donationItem">
      <span className="donationName">{name}</span>
      <span className="donationName">{quantity}</span>
      <span className="donationName">{location}</span>
      <span className="donationName">{expiry_time}</span>
      <Button label={label} disabled={true} className={className} />
    </div>
  );
};

const DonorPendingDonations = ({ donations }) => {
  console.log("test", donations);
  return (
    <div className="container">
      <h2 className="title">Pending donations</h2>
      {donations === undefined || donations.length === 0 ? (
        <p>No pending donations</p>
      ) : (
        donations.map((donation, index) => (
          <DonationItem
            key={index}
            name={donation.food_type}
            quantity={donation.quantity}
            location={donation.location}
            expiry_time={donation.expiry_time}
            status={donation.status}
          />
        ))
      )}
    </div>
  );
};

export default DonorPendingDonations;
