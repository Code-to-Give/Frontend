import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AgeHistogram = () => {
  const data = {
    labels: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70+'], // Age groups
    datasets: [
      {
        label: 'Age Distribution',
        data: [12, 19, 25, 15, 10, 8, 5, 3], // Data corresponding to age groups
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age Groups',
          font: {
            size: 16,
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of People',
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
    },
  };

  return <Bar data={data} options={options} className='histogram'/>;
};

export default AgeHistogram;