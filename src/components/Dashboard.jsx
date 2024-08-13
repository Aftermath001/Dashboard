import React from 'react'
import '../styles/dashboard.css'
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
    <div className="main">
        <div className="main-side-left">
            <Sidebar />
        </div>
        <div className="main-side-right">
            <div className="upper-side">
                <h2>Overview</h2>
               <i> <BiUserCircle /></i>
            </div>
            <div className="upper-cards">
            <Card sx={{ width: 355, backgroundColor: "rgba(184, 182, 182)",  height: '150px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Current Available
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        345kg
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">As at 12:10PM</Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 355,  backgroundColor: "rgba(184, 182, 182)",  height: '150px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Todays Consumption
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        15kg
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">As at 12:10PM</Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 355,  backgroundColor: "rgba(184, 182, 182)", height: '150px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        This Month Consumption
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        545kg
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">12 Days</Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Monthly Average
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        245kg
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">20 Months</Button>
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
                <option value='Online'>This Year</option>
                <option value='Online'>2023</option>
                <option value='Offline'>2022</option>
                <option value='Offline'>2021</option>
                <option value='Offline'>2020</option>
               
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
                    Location Based by Consumption
                </div>
                <div className="lower-btns">
                    <button className='btn-time'>Yearly</button>
                    <button className='btn-time'>Monthly</button>
                    <button className='active'>Weekly</button>
                </div>
            </div>
            <div className="middle-bottom">
            <Card sx={{ display: 'flex' , width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px',borderRadius:'20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                       Highest Consumer
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        325kg
                    </Typography>
                    
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={image46Percent}
                    alt="46% Image"
                />

            </Card>

            
            <Card sx={{ display: 'flex' , width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px',borderRadius:'20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Second Highest
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={image46Percent}
                    alt="46% Image"
                />

            </Card>


            <Card sx={{ display: 'flex' , width: 355, backgroundColor: "rgba(184, 182, 182)", height: '150px',borderRadius:'20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Lowest Consumer
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={image46Percent}
                    alt="46% Image"
                />

            </Card>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default Dashboard