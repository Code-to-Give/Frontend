import React from "react";
import "./HomePage.css";
import LoggedInNavbar from "../../components/LoggedInNavBar/LoggedInNavBar";
import Piechart from "../../components/Piechart/Piechart";
import Histogram from "../../components/Histogram/Histogram";
import DonutChart from "../../components/DonutChart/DonutChart";
import PendingDonations from "../../components/PendingDonations/PendingDonations";

function HomePage() {
  return (
    <div>
      <LoggedInNavbar />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Hello there, Company X</h1>
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
            <PendingDonations />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
