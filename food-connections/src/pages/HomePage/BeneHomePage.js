import React from "react";
import "./BeneHomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Piechart from "../../components/Piechart/Piechart";
import Histogram from "../../components/Histogram/Histogram";
import DonutChart from "../../components/DonutChart/DonutChart";
import StackedBarChart from "../../components/StackedBarChart/StackedBarChart";
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
            <BenePendingDonations />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeneHomePage;
