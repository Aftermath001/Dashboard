import React from 'react'
import '../styles/trends.css'
import Sidebar from '../components/Sidebar'
import { 
    BiStopwatch,
    BiBriefcase,
    BiCalendarAlt,
    BiArch,
    BiStats 

 } from "react-icons/bi";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Trends = () => {
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
    const datas = [
        {
            title: 'By Time Period',
            amount:'234kg',
            icon: <BiStopwatch/>,
            time:'From 12:30PM to 2:45PM',
        },
        {
            title: 'By Day of the Week',
            amount:'470kg',
            icon: <BiArch/>,
            time:'As at 12:30PM',
        },
        {
            title: 'By Date of the Month',
            amount:'467kg',
            icon: <BiCalendarAlt/>,
            time:'23rd Each Month',
        },
        {
            title: 'By Month',
            amount:'1.25 tons',
            icon: <BiBriefcase/>,
            time:'May',
        },
    ];
    const datasets = [
        {
            title: 'Total',
            amount:'234 Cylinders',
            icon: '9 tons',
        },
        {
            title: 'Weekly',
            amount:'4 Cylinders',
            icon: '180 kg',
        },
        {
            title: 'Monthly',
            amount:'16 Cylinders',
            icon: '720 kg',
        },
        {
            title: 'Yearly',
            amount:'192 Cylinders',
            icon: '8.6 tons',
        },
    ];
  return (

    <div className='content'>
      <div className="side-left-trends">
        <Sidebar/>
      </div>
      <div className="side-right">
      <h1 className="header--title">Trends</h1>
       <div className="upper-1">
          <div className='trends-details'>
            <button className='btn-active'>Highest Consumptions</button>
            <button className='btn-trends'>Lowest Consumptions</button>
        </div>
        <div className="card-info">
        {datas.map((item)=>(
            <div className="card">
                <div className="card--title">
                    <h2>{item.title}</h2>
                </div>
                <div className="card--cover">
                    <p>{item.amount}   {item.icon}</p>
                </div>
                <div className="card--content">
                    <p>{item.time}</p>
                </div>
            </div>
        ))}
        </div>
      </div>
      </div>
    </div>
    // <div className='content-header'>
    //     <h1 className="header--title">Trends</h1>

    //     <div className='trends-details'>
    //         <button className='btn-active'>Highest Consumptions</button>
    //         <button className='btn-trends'>Lowest Consumptions</button>
    //     </div>
    //     <div className='card--container'>
    //     {datas.map((item)=>(
    //         <div className="card">
    //             <div className="card--title">
    //                 <h2>{item.title}</h2>
    //             </div>
    //             <div className="card--cover">
    //                 <p>{item.amount}   {item.icon}</p>
    //             </div>
    //             <div className="card--content">
    //                 <p>{item.time}</p>
    //             </div>
    //         </div>
    //     ))}
    // </div>
    // <div className='container'>
    //   <div className="list--header">
    //     <h2>Consumption within 24hrs  <br/>1PM & 2PM: Highest consuption times</h2> 
    //     <select>
    //       <option value='Full'>All Types</option>
    //       <option value='Full'>Full</option>
    //       <option value='Express'>Express</option>
    //     </select>
    //     <select>
    //       <option value="Nairobi">All Locations</option>
    //       <option value="Nairobi">Nairobi</option>
    //       <option value='Kisumu'>Kisumu</option>
    //       <option value='Malindi'>Malindi</option>
    //       <option value='Mombasa'>Mombasa</option>
    //       <option value='Eldoret'>Eldoret</option>
    //     </select>
    //     <select>
    //       <option value='Online'>All Days</option>
    //       <option value='Online'>2023</option>
    //       <option value='Offline'>2022</option>
    //     </select>
    //   </div>
    //   <div className="bar-graph">
    //     <Bar data={data} options={options} />
    //   </div>
    // </div>
    // <div className='container'>
    //   <div className="list--header">
    //     <h2>Consumption by Cylinders</h2> 
    //     <select>
    //       <option value='Full'>All Types</option>
    //       <option value='Full'>Full</option>
    //       <option value='Express'>Express</option>
    //     </select>
    //     <select>
    //       <option value="Nairobi">All Locations</option>
    //       <option value="Nairobi">Nairobi</option>
    //       <option value='Kisumu'>Kisumu</option>
    //       <option value='Malindi'>Malindi</option>
    //       <option value='Mombasa'>Mombasa</option>
    //       <option value='Eldoret'>Eldoret</option>
    //     </select>
    
    //   </div>
    //   <div className='card--container'>
    //     {datasets.map((item)=>(
    //         <div className="card">
    //             <div className="card--title">
    //                 <h2>{item.title}</h2>
    //             </div>
    //             <div className="card--cover">
    //                 <p>{item.amount}   {item.icon}</p>
    //             </div>
    //             <div className="card--content">
    //                 <p>{item.time}</p>
    //             </div>
    //         </div>
    //     ))}
    // </div>
     
    // </div>
        
    // </div>
  )
}

export default Trends