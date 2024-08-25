import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = () => {
  const data = {
    labels: ['East', 'West', 'North', 'South', 'Central'], // Food types
    datasets: [
      {
        label: 'Delivered',
        data: [100, 80, 50, 40, 70], // Fake data for total food donated
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for donated portion
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Donated',
        data: [80, 60, 40, 30, 50], // Fake data for food delivered
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Color for delivered portion
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true, // Stack the x-axis
        title: {
          display: true,
          text: 'Region',
          font: {
            size: 16,
          },
        },
      },
      y: {
        stacked: true, // Stack the y-axis
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Items',
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 16,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
