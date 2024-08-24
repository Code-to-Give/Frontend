import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormPage.css';

function FormPage() {
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [remark, setRemark] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [selectedFoodType, setSelectedFoodType] = useState("");
  const [selectedDietaryRequirements, setSelectedDietaryRequirements] = useState("");

  return (
    <div style={{ backgroundColor: "#D8BFD8", minHeight: "750px" }}>
      <div className="form">
        <h1 className="form-title">Food Supply Form</h1>
        <div className="form-content">
          <div className="input-fields">
            <label className="details">Location:</label>
              <input 
                type="text" 
                placeholder="Where is the food located?" 
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
              />
          </div>
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
                value={selectedFoodType}
                onChange={(e) => {setSelectedFoodType(e.target.value);}}
              >
                <option  value="" disabled selected>Select the food type.</option>
                <option  value="perishable">Perishable</option>
                <option  value="non-perishable">Non-perishable</option>
              </select>
          </div>
          <div className="input-fields">
            <label className="details">Dietary Requirements:</label>
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
              <input 
                type="text" 
                placeholder="When was the food cooked and how long will it last?" 
                value={expiryTime}
                onChange={(e) => setExpiryTime(e.target.value)} 
              />
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
        </div>
        <Link to="/home"><button className="submit-button">Submit</button></Link>
      </div>
    </div>
  );
}

export default FormPage;
