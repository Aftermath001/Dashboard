import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Entrypage from './components/Entrypage';
import Trends from './components/Trends';
import Identity from './components/Identity';
import LocationList from './components/LocationList'
import MatAi from './components/MatAi'
import Login from './components/Login';
import './App.css';
import Dashboard from './components/Dashboard';


const App = () => {
  const isAuthenticated = true; // Replace with your actual authentication check

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login/>}/>
        <Route index element={<Entrypage/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='trends' element={<Trends/>}/>
        <Route path='matxai' element={<MatAi/>}/>
        <Route path='locations' element={<LocationList/>}/>
      </Routes>
      </BrowserRouter>
  
  );
};

export default App;
