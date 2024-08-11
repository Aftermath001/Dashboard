import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import Entrypage from './components/Entrypage';
import Trends from './components/Trends';
import Identity from './components/Identity';
import LocationList from './components/LocationList'
import MatAi from './components/MatAi'
import Login from './components/Login';
import './App.css';


const App = () => {
  const isAuthenticated = true; // Replace with your actual authentication check

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login/>}/>
        <Route index element={<Entrypage/>}/>
        <Route path='content' element={<Content/>}/>
        <Route path='trends' element={<Trends/>}/>
        <Route path='matxai' element={<MatAi/>}/>
        <Route path='locations' element={<LocationList/>}/>
      </Routes>
      </BrowserRouter>
    

    // <Router>
    //   <div className="dashboard">
    //     {isAuthenticated && <Sidebar />}
    //     <div className="dashboard--content">
    //       <Routes>
    //         <Route path="/login" element={<Login />} />
    //         <Route
    //           path="/dashboard"
    //           element={isAuthenticated ? <Entrypage /> : <Navigate to="/login" />}
    //         />
    //         <Route
    //           path="/identity"
    //           element={isAuthenticated ? <Identity /> : <Navigate to="/login" />}
    //         />
    //         <Route
    //           path="/content"
    //           element={isAuthenticated ? <Content /> : <Navigate to="/login" />}
    //         />
    //         <Route
    //           path="/profile"
    //           element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
    //         />
    //         <Route
    //           path="*"
    //           element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
    //         />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
};

export default App;
