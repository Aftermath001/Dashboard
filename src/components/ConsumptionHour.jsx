import React from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ConsumptionHour = () => {
  const data = {
    labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'],
    datasets: [
      {
        label: 'Tons Consumed',
        data: [0.01, 0.01, 0.01, 0.01, 0.01,0.01, 0.1, 0.3, 0.4, 0.5, 0.6, 0.7,0.8,0.9, 0.9, 0.8,0.7,0.5,0.3,0.05,0.01,0.01,0.01],
        backgroundColor: 'rgba(2, 60, 82)',
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE, // Ensures rounded corners all around
        barPercentage: 0.8, // Optional: Adjusts the width of the bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Tons Consumed',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#333',
        },
        grid: {
          display: false,
        },
        offset: true, // Adds a gap between x-axis and the chart area
      },
      y: {
        display: false, // Hides y-axis
        offset: true, // Adds a gap between y-axis and the chart area
      },
    },
  };
  return (
    <div className='container'>
      <div className="list--header">
            <h2>Consumption within 24hrs</h2>
        </div>
        <div className="list--header-2">
        <select>
                <option value="Nairobi">All Regions/Towns</option>
                <option value="Nairobi">Nairobi</option>
                <option value='Kisumu'>Kisumu</option>
                <option value='Malindi'>Malindi</option>
                <option value='Mombasa'>Mombasa</option>
                <option value='Eldoret'>Eldoret</option>
            </select>

            <select>
                <option value='Full'>All Types</option>
                <option value='Full'>Full</option>
                <option value='Express'>Express</option>
               
            </select>
            <select>
                <option value='Online'>All Days</option>
                <option value='Online'>Monday</option>
                <option value='Offline'>Tuesday</option>
                <option value='Offline'>Wdnesday</option>
                <option value='Offline'>Thusrday</option>
               
            </select>
        </div>
      <div className="bar-graph">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ConsumptionHour;
