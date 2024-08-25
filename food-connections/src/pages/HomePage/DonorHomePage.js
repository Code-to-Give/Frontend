import React, { useState, useEffect } from "react";
import "./DonorHomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Piechart from "../../components/Piechart/Piechart";
import Histogram from "../../components/Histogram/Histogram";
import StackedBarChart from "../../components/StackedBarChart/StackedBarChart";
import DonutChart from "../../components/DonutChart/DonutChart";
import DonorPendingDonations from "../../components/PendingDonations/DonorPendingDonations";
import FormPage from "../../pages/FormPage/FormPage";
import { getDonorInformation } from "../../api/donorApi";
import { useAuth } from "../../utils/AuthContext";
import { getDonations } from "../../api/donationApi";

function DonorHomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [donorData, setDonorData] = useState(null);
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const toggleFormPopup = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const donorData = await getDonorInformation();
        if (donorData.error) {
          setError(donorData.error);
          return;
        } else {
          setDonorData(donorData);
        }

        const donationData = await getDonations();
        if (donationData.error) {
          setError(donationData.error);
        } else {
          setDonations(donationData);
          console.log(donationData);
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!donorData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Hello there, {JSON.parse(user).company_name ?? "Donor"}</h1>
          <button className="open-form-button" onClick={toggleFormPopup}>
            Food to donate?
          </button>
        </header>
        <div className="dashboard-content">
          <div className="charts">
            <div className="chart-item">
              <h2>Overall Percentage of Food Delivered</h2>
              <Piechart />
            </div>

            <div className="chart-item">
              <h2>Food Type</h2>
              <DonutChart />
            </div>

            <div className="chart-item">
              <h2>Food Delivered This Week</h2>
              <Histogram />
            </div>

            <div className="chart-item">
              <h2>Number of meals Donated and Delivered</h2>
              <StackedBarChart />
            </div>
          </div>
          <div className="pending-donations">
            <div className="donations-banner">
              <h3>Donations</h3>
            </div>
            <DonorPendingDonations donations={donations} />
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={toggleFormPopup}>
              &times;
            </span>
            <FormPage onSubmit={toggleFormPopup} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DonorHomePage;
