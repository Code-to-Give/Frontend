import React from "react";
import "./BenePendingDonations.css";
import { acceptDonation, rejectDonation } from "../../api/donationApi";

const Button = ({ label, onClick, disabled, className }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

const DonationItem = ({
  food_type,
  status,
  quantity,
  location,
  expiry_time,
  onAccept,
  onDecline,
}) => {
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
          <strong>Food Type:</strong> {food_type}
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

        {/* Conditional rendering based on status */}
        {status === "Ready" || status === "Allocated" ? (
          <div className="buttonGroup">
            <Button
              label="Accept"
              onClick={onAccept}
              className="acceptButton"
            />
            <Button
              label="Decline"
              onClick={onDecline}
              className="declineButton"
            />
          </div>
        ) : (
          <Button label={label} disabled={true} className={className} />
        )}
      </div>
    </div>
  );
};

const BenePendingDonations = ({ donations }) => {
  console.log(donations);

  const handleAccept = async (id) => {
    try {
      console.log(`${id} accepted`);
      const response = await acceptDonation({ id });
      console.log("Accept response:", response);
    } catch (error) {
      console.error("Failed to accept donation:", error);
      alert("Failed to accept the donation. Please try again.");
    }
  };

  const handleDecline = async (id) => {
    try {
      console.log(`${id} declined`);
      const response = await rejectDonation({ id });
      console.log("Decline response:", response);
    } catch (error) {
      console.error("Failed to decline donation:", error);
      alert("Failed to decline the donation. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Donations</h2>
      {donations.map((donation, index) => (
        <DonationItem
          key={index}
          food_type={donation.food_type}
          status={donation.status}
          quantity={donation.quantity}
          location={donation.location}
          expiry_time={donation.expiry_time}
          onAccept={() => handleAccept(donation.id)}
          onDecline={() => handleDecline(donation.id)}
        />
      ))}
    </div>
  );
};

export default BenePendingDonations;
