import React from 'react';
import { Link } from 'react-router-dom';
import InformationCard from '../../components/InformationCard/InformationCard';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div>
      <InformationCard company={"MBS"} name={"Marry"} email={"mbs@gmail.com"} phone={"12345678"} location={"Marina Bay"}/>
      <div className="body-container">
        <div className="body-block">
          <h2 className="block-title">History</h2>
        </div>
        <div className="body-block">
          <h2 className="block-title">Food Request Details</h2>
          <div className="block-content">
            <p>Regularity: </p>
            <p>Quantity: </p>
            <p>Type: </p>
          </div>
        </div>
        
      </div>
      <Link to="/home"><button>Back to Home</button></Link>
    </div>
  );
}

export default ProfilePage;