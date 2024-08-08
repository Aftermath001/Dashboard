import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../styles/locationconsumption.css';

// Register the necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const LocationConsumption = () => {
    // Data for the pie charts
    const data1 = {
        labels: ['Consumption', 'Remaining'],
        datasets: [
            {
                label: 'Highest Consumption',
                data: [325, 375], // 325 is the consumed, 375 is the remaining (100% - 46% = 54%)
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 255, 255, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 255, 255, 1)'],
                borderWidth: [6, 0], // Thicker border for consumed part
                borderRadius: [10, 10], // Rounded borders
                borderAlign: 'inner', // Border inside the chart
            },
        ],
    };

    const data2 = {
        labels: ['Consumption', 'Remaining'],
        datasets: [
            {
                label: 'Second Highest Consumption',
                data: [283, 417], // 283 is the consumed, 417 is the remaining (100% - 41% = 59%)
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 255, 255, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 255, 255, 1)'],
                borderWidth: [6, 0], // Thicker border for consumed part
                borderRadius: [10, 10], // Rounded borders
                borderAlign: 'inner', // Border inside the chart
            },
        ],
    };

    // Options for the pie charts
    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const percentage = Math.round(tooltipItem.raw / (tooltipItem.raw + 1) * 100);
                        return `${tooltipItem.label}: ${percentage}%`;
                    }
                }
            },
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                color: 'black',
                formatter: (value) => {
                    const total = data1.datasets[0].data.reduce((acc, val) => acc + val, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${percentage}%`;
                },
                font: {
                    weight: 'bold',
                    size: 16,
                },
            },
        },
        cutout: '60%', // Adjust as needed
    };

    return (
        <div className='container'>
            <div className="list--header">
                <h2>Consumption Data</h2>
            </div>
            <div className="cards-container">
                <div className="card">
                    <h3>Highest Consumption (325kg)</h3>
                    <div className="chart-container">
                        <Pie data={data1} options={options} />
                    </div>
                </div>
                <div className="card">
                    <h3>Second Highest Consumption (283kg)</h3>
                    <div className="chart-container">
                        <Pie data={data2} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationConsumption;
