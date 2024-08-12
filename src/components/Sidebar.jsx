import React from 'react'
import {
    BiGridAlt, 
    BiBookAlt, 
    BiPulse, 
    BiChart, 
    BiLocationPlus,
    BiBell,
    BiSolidWrench, 
    BiTask
} from 'react-icons/bi'
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className ='menu'>
      <div className="logo">
        <BiBookAlt className='logo-icon' />
        <h2>matX</h2>
      </div>
      <div className="menu--list">
        <a href="/dashboard" className="item">
            <BiGridAlt className='icon'/>
            Overview
        </a>
        <a href="/trends" className="item">
            <BiPulse className='icon'/>
            Trends
        </a>
        <a href="/matxai" className="item">
            <BiChart className='icon'/>
            matX AI
        </a>
        <a href="/locations" className="item">
            <BiLocationPlus className='icon'/>
            Locations
        </a>
        <a href="#" className="item">
            <BiBell className='icon'/>
            Notifications
        </a>
        <a href="#" className="item">
            <BiSolidWrench className='icon'/>
            Settings
        </a>

      </div>
    </div>
  )
}

export default Sidebar