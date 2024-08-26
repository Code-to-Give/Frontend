import React, { useEffect, useState } from "react";
import "./BeneHomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Piechart from "../../components/Piechart/Piechart";
import Histogram from "../../components/Histogram/Histogram";
import DonutChart from "../../components/DonutChart/DonutChart";
import StackedBarChart from "../../components/StackedBarChart/StackedBarChart";
import BenePendingDonations from "../../components/PendingDonations/BenePendingDonations";
import { useAuth } from "../../utils/AuthContext";
import { getDonations } from "../../api/donationApi";
import { getAgencyInformation } from "../../api/agencyApi";

function BeneHomePage() {
  const { user } = useAuth();
  const [donorData, setDonorData] = useState(null);
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);

  const fetchDonations = async () => {
    try {
      console.log("Fetching donations");
      const data = await getDonations();
      if (data.error) {
        setError(data.error);
      } else {
        setDonations(data);
        console.log(data);
      }
    } catch (err) {
      setError("Failed to get donations.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const beneficiaryData = await getAgencyInformation();
        if (beneficiaryData.error) {
          setError(beneficiaryData.error);
          return;
        } else {
          setDonorData(beneficiaryData);
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

    const intervalId = setInterval(fetchDonations, 20000); // 20 s
    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  let companyName = "Beneficiary";
  try {
    const parsedUser = JSON.parse(user);
    if (parsedUser && parsedUser.company_name) {
      companyName = parsedUser.company_name;
    }
  } catch (error) {
    console.error("Failed to parse user JSON:", error);
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Hello there, {companyName}</h1>
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
            <BenePendingDonations
              donations={donations}
              refresh={fetchDonations}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeneHomePage;
