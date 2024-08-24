import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InformationCard from '../../components/InformationCard/InformationCard';
import Historypopup from '../../components/HistoryPopup/historypopup';
import './DonorProfilePage.css';

function DonorProfilePage() {

    const [status, setStatus] = useState('Accepted');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleStatus = () => {
        setStatus(prevStatus => (prevStatus === 'Accepted' ? 'Rejected' : 'Accepted'));
    };

    const buttonClass = status === 'Accepted' ? 'status-button status-accepted' : 'status-button status-rejected';

    const handlePopupOpen = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

  return (
    <div>
      <InformationCard company={"MBS"} name={"Marry"} email={"mbs@gmail.com"} phone={"12345678"} location={"Marina Bay"}/>
      <div className="body-container">
        <div className="body-block">
          <h2 className="block-title">History</h2>
            <div className="block-content">
                <button onClick={handlePopupOpen} className="modal-button">
                    View Donation Details
                </button>
                <p>Beneficiary: </p>
                {/*placeholder can connect to acc/rej donations ltr*/}
                <button onClick={toggleStatus} className={buttonClass}>
                    {status}
                </button>
            </div>
        </div>
        <div className="body-block">
          <h2 className="block-title">Pending Food Donation Details</h2>
          <div className="block-content">
            <p>Quantity: </p>
            <p>Type: </p>
          </div>
        </div>
        
      </div>
      <Link to="/home"><button>Back to Home</button></Link>

       <Historypopup show={isPopupOpen} handleClose={handlePopupClose} bene={"ABC Home"} benedetails={"Established in 2003"} benelocation={"Jurong East"} timing={"Monday 1600-2000h"} quantity={"100 trays fried rice"} type={"Halal"}/>
    </div>
  );
}

export default DonorProfilePage;