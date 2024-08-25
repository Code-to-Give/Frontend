import React from 'react';
import './Piechart.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {
    const data = {
        labels: ['Delivered to Families', 'Not Delivered'],
        datasets: [
            {
                data: [89, 11], // 89% delivered, 11% not delivered
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)', // Color for delivered portion
                    'rgba(255, 99, 132, 0.6)', // Color for not delivered portion
                ],
                hoverBackgroundColor: [
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14, // Adjust the font size for the labels
                    },
                },
                display: false, // Hide the legend to reduce size
            },
            tooltip: {
                bodyFont: {
                    size: 12, // Adjust the font size for the tooltip body
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="chart-container">
            <Pie data={data} options={options} />
        </div>
    );
}

export default Piechart;
