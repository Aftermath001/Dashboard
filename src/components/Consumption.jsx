import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Consumption = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Tons Consumed',
        data: [5.6, 4.8, 6.3, 5.5, 7, 6.5, 3.5, 0.5, 0.5, 0.5, 0.5, 0.5],
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
        <h2>Total Consumption</h2>
        <select>
          <option value='Full'>All Types</option>
          <option value='Full'>Full</option>
          <option value='Express'>Express</option>
        </select>
        <select>
          <option value="Nairobi">All Locations</option>
          <option value="Nairobi">Nairobi</option>
          <option value='Kisumu'>Kisumu</option>
          <option value='Malindi'>Malindi</option>
          <option value='Mombasa'>Mombasa</option>
          <option value='Eldoret'>Eldoret</option>
        </select>
        <select>
          <option value='Online'>This Year</option>
          <option value='Online'>2023</option>
          <option value='Offline'>2022</option>
        </select>
      </div>
      <div className="bar-graph">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Consumption;
