import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./DonutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const LocationDonutChart = () => {
  const data = {
    labels: ["West", "South", "North", "Central", "East"],
    datasets: [
      {
        label: "Location",
        data: [37, 25, 15, 10, 13],
        backgroundColor: [
          "#3f00ff", // Blue
          "#c700ff", // Purple
          "#ff0049", // Red
          "#c4d31b", // Green
          "#ff9900", // Orange
        ],
        borderColor: ["#ffffff"],
        borderWidth: 1,
        cutout: "80%",
      },
    ],
  };

  // added code to ensure the chart is responsive
  const options = {
    plugins: {
      legend: {
        font: {
          size: 20,
        },
        display: false,
      },
      tooltip: {
        enabled: true,
        size: 16,
      },
    },
    maintainAspectRatio: false, 
    // responsive: true, 
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     // update the component if needed to ensure correct centering
  //     window.dispatchEvent(new Event('resize'));
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div className="chart-container">
      <Doughnut data={data} options={options} />
      <div className="chart-center-text">
        37%
        <br />
        <span className="center-subtext">stay in the West</span>
      </div>
    </div>
  );
};

export default LocationDonutChart;
