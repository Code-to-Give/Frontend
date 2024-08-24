import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InformationCard from '../../components/InformationCard/InformationCard';
import './DonorProfilePage.css';

// pop up of past donations
function Modal({ show, handleClose, children }) {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                {children}
            </div>
        </div>
    );
}

function DonorProfilePage() {

    const [status, setStatus] = useState('Accepted');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleStatus = () => {
        setStatus(prevStatus => (prevStatus === 'Accepted' ? 'Rejected' : 'Accepted'));
    };

    const buttonClass = status === 'Accepted' ? 'status-button status-accepted' : 'status-button status-rejected';

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

  return (
    <div>
      <InformationCard company={"MBS"} name={"Marry"} email={"mbs@gmail.com"} phone={"12345678"} location={"Marina Bay"}/>
      <div className="body-container">
        <div className="body-block">
          <h2 className="block-title">History</h2>
            <div className="block-content">
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

      {/* Modal for the Beneficiary popup */}
       <Modal show={isModalOpen} handleClose={handleModalClose}>
        <h2>Beneficiary Information</h2>
        <p>Details about the beneficiary...</p>
       </Modal>
    </div>
  );
}

export default DonorProfilePage;