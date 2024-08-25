import React, { useState } from 'react';
import './FormPage.css';
import Map from "../../components/Map/Map";
import { submitDonationForm } from "../../api/donationApi";

function FormPage({onSubmit}) {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");  
  const [quantity, setQuantity] = useState("");
  const [remark, setRemark] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [selectedDietaryRequirements, setSelectedDietaryRequirements] = useState("");

  // Function to handle the location selection from the map
  const handleLocation = (lat, lng) => {
    console.log('Location selected:', lat, lng);
    setLongitude(lng);
    setLatitude(lat);
  };

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    const convertDatetimeToUTC = (expiryTime) => {
      const date = new Date(expiryTime);
      const utcDateTime = date.toISOString();
      return utcDateTime;
    };

    const formData = {
      food_type: selectedDietaryRequirements,
      quantity: parseInt(quantity),
      location: [parseFloat(latitude), parseFloat(longitude)],
      status: "Ready",
      expiry_time: convertDatetimeToUTC(expiryTime),
    };
  
    console.log('Form Data:', formData);

    submitDonationForm(formData);

    if (onSubmit) {
      console.log('Form submitted');
      onSubmit();
    }

    setLatitude("");
    setLongitude("");
    setQuantity("");
    setRemark("");
    setExpiryTime("");
    setSelectedDietaryRequirements("");
  };

  return (
    <div style={{ backgroundColor: "#D8BFD8", minHeight: "750px" }}>
      <div className="form">
        <h1 className="form-title">Food Supply Form</h1>
        <div className="form-content">
          <div className="input-fields">
            <label className="details">Quantity:</label>
              <input 
                type="number" 
                placeholder="Quantity of the Food" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} 
              />
          </div>
          <div className="input-fields">
            <label className="details">Food Type:</label>
              <select
                value={selectedDietaryRequirements}
                onChange={(e) => {setSelectedDietaryRequirements(e.target.value);}}
              >
                <option  value="" disabled selected>Select the dietary requirements that the food fulfills.</option>
                <option  value="halal">Halal</option>
                <option  value="vegetarian">Vegetarian</option>
                <option  value="no-beef">No Beef</option>
                <option  value="none">None of the Above</option>
              </select>
          </div>
          <div className="input-fields">
            <label className="details">Expiry Time:</label>
              <input aria-label="Date and time" type="datetime-local" value={expiryTime} onChange={(e) => setExpiryTime(e.target.value)}/>
          </div>
          <div className="input-fields">
            <label className="details">Any remarks for beneficiaries?</label>
              <input 
                type="text" 
                placeholder="Remarks:" 
                value={remark}
                onChange={(e) => setRemark(e.target.value)} 
              />
          </div>
          <div className="input-fields">
            <label className="details">Choose Your Location from the Map:</label>
            <Map onLocationSelect={handleLocation}/>
          </div>
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default FormPage;
