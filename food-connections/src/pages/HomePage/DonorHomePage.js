import React, {useState} from "react";
import "./DonorHomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Piechart from "../../components/Piechart/Piechart";
import Histogram from "../../components/Histogram/Histogram";
import DonutChart from "../../components/DonutChart/DonutChart";
import DonorPendingDonations from "../../components/PendingDonations/DonorPendingDonations";
import FormPage from "../../pages/FormPage/FormPage";

function DonorHomePage() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleFormPopup = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <div>
            <LoggedInNavbar />
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <h1>Hello there, MBS</h1>
                    <button className="open-form-button" onClick={toggleFormPopup}>
                        Food to donate?
                    </button>
                </header>
                <div className="dashboard-content">
                    <div className="charts">
                        <div className="chart-item">
                            <h2>Gender</h2>
                            <Piechart />
                        </div>

                        <div className="chart-item">
                            <h2>Location</h2>
                            <DonutChart />
                        </div>

                        <div className="chart-item">
                            <h2>Age</h2>
                            <Histogram />
                        </div>

                        <div className="chart-item">
                            <h2>Organisation</h2>
                            <DonutChart />
                        </div>
                    </div>
                    <div className="pending-donations">
                        <DonorPendingDonations />
                    </div>
                </div>
            </div>
            {isFormOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={toggleFormPopup}>&times;</span>
                        <FormPage />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DonorHomePage;
