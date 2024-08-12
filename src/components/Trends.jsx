import React from 'react'
import '../styles/trends.css'
import Sidebar from '../components/Sidebar'
import { BiUserCircle } from "react-icons/bi";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import image46Percent from '../assets/46percent.png';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
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
    <div className="main">
        <div className="main-side-left">
            <Sidebar />
        </div>
        <div className="main-side-right">
            <div className="upper-side">
                <h2>Trends</h2>
               <i> <BiUserCircle /></i>
            </div>
            <div className="upper-cards">
            <Card sx={{ width: 355, backgroundColor: "rgba(184, 182, 182)",  height: '150px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        By Time Period
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        234kg
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">From 12:30PM to 2:45PM</Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 355,  backgroundColor: "rgba(184, 182, 182)",  height: '150px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        By Day of the Week
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        420kg
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Friday</Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 355,  backgroundColor: "rgba(184, 182, 182)", height: '150px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        By Date of the Month
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        467kg
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">23rd Each Month</Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        By Month
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        1.2 Tons
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">May</Button>
                </CardActions>
        </Card>

            </div>

        <div className="middle">
            <div className="middle-top">
                <div className="middle-header">
                    Total Consumption
                </div>
                <div className="middle-btns">
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
                <option value='Online'>All Days</option>
                <option value='Online'>Monday</option>
                <option value='Offline'>Tuesday</option>
                <option value='Offline'>Wednesday</option>
                <option value='Offline'>Thursday</option>
               
            </select>
            </div>
            </div>
            <div className="bar-graph">
                 <Bar data={data} options={options} />
            </div>
        </div>

        <div className="lower">
            <div className="middle-top">
                <div className="middle-header">
                    Consumption By Cylinders
                </div>
                <div className="lower-btns">
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
              
                </div>
            </div>
            <div className="middle-bottom">
            <Card sx={{ display: 'flex' , width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px',borderRadius:'20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                       Total Consumed
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        200 Cylinders
                    </Typography>
                    
                    </CardContent>
                </Box>
                <Typography sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} variant="subtitle1" color="text.secondary" component="div" >
                    9 tons
                </Typography>

            </Card>

            
            <Card sx={{ display: 'flex' , width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px',borderRadius:'20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                       Weekly Consumed
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        4 Cylinders
                    </Typography>
                    
                    </CardContent>
                </Box>
                <Typography sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} variant="subtitle1" color="text.secondary" component="div" >
                  180kg
                </Typography>

            </Card>


            <Card sx={{ display: 'flex' , width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px',borderRadius:'20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                       Monthly
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        16 Cylinders
                    </Typography>
                    
                    </CardContent>
                </Box>
                <Typography sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} variant="subtitle1" color="text.secondary" component="div" >
                    720kg
                </Typography>

            </Card>

            <Card sx={{ display: 'flex' , width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px',borderRadius:'20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                       Yearly Consumed
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        192 Cylinders
                    </Typography>
                    
                    </CardContent>
                </Box>
                <Typography sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} variant="subtitle1" color="text.secondary" component="div" >
                    8.6 tons
                </Typography>

            </Card>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default Dashboard