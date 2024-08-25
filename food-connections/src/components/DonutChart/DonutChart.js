import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./DonutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const FoodTypeDonutChart = () => {
  const data = {
    labels: ["Halal", "Vegetarian", "Vegan", "Gluten-Free", "Non-Vegetarian"],
    datasets: [
      {
        label: "Food Types",
        data: [40, 25, 15, 10, 10], // Fake data for food types
        backgroundColor: [
          "#FF6384", // Pink for Halal
          "#36A2EB", // Blue for Vegetarian
          "#FFCE56", // Yellow for Vegan
          "#4BC0C0", // Teal for Gluten-Free
          "#9966FF", // Purple for Non-Vegetarian
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        borderColor: ["#ffffff"],
        borderWidth: 1,
        cutout: "80%",
      },
    ],
  };

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
  };

  return (
    <div className="chart-container">
      <Doughnut data={data} options={options} />
      <div className="chart-center-text">
        40%
        <br />
        <span className="center-subtext">are Halal</span>
      </div>
    </div>
  );
};

export default FoodTypeDonutChart;
