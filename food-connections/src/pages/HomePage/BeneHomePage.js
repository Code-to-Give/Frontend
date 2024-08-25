import React from "react";
import "./BeneHomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Piechart from "../../components/Piechart/Piechart";
import Histogram from "../../components/Histogram/Histogram";
import DonutChart from "../../components/DonutChart/DonutChart";
import BenePendingDonations from "../../components/PendingDonations/BenePendingDonations";
import { useAuth } from "../../utils/AuthContext";

function BeneHomePage() {
  
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Hello there, { JSON.parse(user).company_name}</h1>
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
            <BenePendingDonations />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeneHomePage;
