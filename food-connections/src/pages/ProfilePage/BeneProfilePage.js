import React from 'react';
import { Link } from 'react-router-dom';
import InformationCard from '../../components/InformationCard/InformationCard';
import './BeneProfilePage.css';

function BeneProfilePage() {
    return (
        <div>
            <InformationCard company={"ABC Home"} name={"Tom"} email={"abchome@gmail.com"} phone={"91234567"} location={"Jurong East"}/>
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

export default BeneProfilePage;