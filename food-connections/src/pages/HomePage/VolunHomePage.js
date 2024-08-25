import React from "react";
import "./VolunHomePage.css";
import Piechart from "../../components/Piechart/Piechart";
import Histogram from "../../components/Histogram/Histogram";
import DonutChart from "../../components/DonutChart/DonutChart";
import VolunteerNotif from "../../components/VolunteerNotif/VolunteerNotif";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../utils/AuthContext";


function VolunHomePage() {
  const { user } = useAuth();
  
  // console.log(user);
  console.log(user.name);
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Hello there, {JSON.parse(user).name}</h1>
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
            <VolunteerNotif />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunHomePage;
