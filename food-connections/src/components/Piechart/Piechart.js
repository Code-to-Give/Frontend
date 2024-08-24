import React from 'react';
import './Piechart.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);
function Piechart() {
    // const [data, setData] = React.useState({"Male": 70, "Female": 30});
    
    const data = {
        labels: ['Female', 'Male'],
        datasets: [
        {
            data: [30, 70], // Data for each segment
            backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            ],
            hoverBackgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
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
                size: 50, // Adjust the font size for the labels
            },
            },
        },
        tooltip: {
            bodyFont: {
            size: 16, // Adjust the font size for the tooltip body
            },
        },
        },
    };

    return <Pie data={data} options={options}/>;
}

export default Piechart;