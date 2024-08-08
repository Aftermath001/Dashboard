import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../styles/locationconsumption.css';

// Register the necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

const LocationConsumption = () => {
    // Data for the pie charts
    const data1 = {
        labels: ['Consumed', 'Remaining'],
        datasets: [
            {
                label: 'Highest Consumption',
                data: [325, 375], 
                backgroundColor: ['rgba(2, 60, 82)', 'rgba(255, 255, 255, 0.2)'],
                borderColor: ['rgba(2, 60, 82)', 'rgba(255, 255, 255, 0.2)'],
                borderWidth: [8, 2], 
                borderRadius: [10, 10],
                borderAlign: 'inner',
            },
        ],
    };

    const data2 = {
        labels: ['Consumed', 'Remaining'],
        datasets: [
            {
                label: 'Second Highest Consumption',
                data: [283, 417], 
                backgroundColor: ['rgba(2, 60, 82)', 'rgba(255, 255, 255, 0.2)'],
                borderColor: ['rgba(2, 60, 82)', 'rgba(255, 255, 255, 0.2)'],
                borderWidth: [8, 2], 
                borderRadius: [10, 10],
                borderAlign: 'inner',
            },
        ],
    };

    // Options for the pie charts
    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const percentage = Math.round((tooltipItem.raw / (tooltipItem.raw + 1)) * 100);
                        return `${tooltipItem.label}: ${percentage}%`;
                    }
                }
            },
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${percentage}%`;
                },
                color: '#000',
                font: {
                    weight: 'bold',
                    size: 24,
                },
                align: 'center',
                anchor: 'center',
            },
        },
        cutout: '60%', // Adjust as needed
    };

    return (
        <div className='container'>
            <div className="list--header">
                <h2>Location Based by Consumption</h2>
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
