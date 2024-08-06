import React from 'react'
import {
    BiHome, 
    BiBookAlt, 
    BiMessage, 
    BiSolidReport, 
    BiStats, 
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
        <a href="#" className="item">
            <BiHome className='icon'/>
            Overview
        </a>
        <a href="#" className="item">
            <BiHome className='icon'/>
            Trends
        </a>
        <a href="#" className="item">
            <BiHome className='icon'/>
            matX AI
        </a>
        <a href="#" className="item">
            <BiHome className='icon'/>
            Locations
        </a>
        <a href="#" className="item">
            <BiMessage className='icon'/>
            Notifications
        </a>
        <a href="#" className="item">
            <BiHome className='icon'/>
            Settings
        </a>

      </div>
    </div>
  )
}

export default Sidebar