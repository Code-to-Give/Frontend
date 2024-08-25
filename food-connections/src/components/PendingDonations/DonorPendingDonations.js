import React from "react";
import "./DonorPendingDonations.css";

const Button = ({ label, disabled, className }) => {
  return (
    <button className={className} disabled={disabled}>
      {label}
    </button>
  );
};

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
    <div className="donationCard">
      <div className="donationDetails">
        <div className="donationDetailItem">
          <strong>Food Type:</strong> {name}
        </div>
        <div className="donationDetailItem">
          <strong>Quantity:</strong> {quantity} sets
        </div>
        <div className="donationDetailItem">
          <strong>Location:</strong> [{location[0]}, {location[1]}]
        </div>
        <div className="donationDetailItem">
          <strong>Expiry Time:</strong> {expiry_time}
        </div>
        <Button label={label} disabled={true} className={className} />
      </div>
    </div>
  );
};

const DonorPendingDonations = ({ donations }) => {
  return (
    <div className="donationsContainer">
      <h2 className="donationsTitle">Donations</h2>
      {donations === undefined || donations.length === 0 ? (
        <p className="noDonationsText">No pending donations</p>
      ) : (
        <div className="donationsGrid">
          {donations.map((donation, index) => (
            <DonationItem
              key={index}
              name={donation.food_type}
              quantity={donation.quantity}
              location={donation.location}
              expiry_time={donation.expiry_time}
              status={donation.status}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DonorPendingDonations;
