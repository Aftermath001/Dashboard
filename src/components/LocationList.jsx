import React from 'react'
import '../styles/locationList.css'
import Profile from '../components/Profile'
import Sidebar from './Sidebar'
import { CiEdit } from "react-icons/ci";
import { VscEye } from "react-icons/vsc";
import { CiTrash } from "react-icons/ci";


const locations = [
    {
        location:"ABC PLace",
        region:'Nairobi',
        type:'full',
        device:'JH-ABC',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"ABC PLace",
        region:'Nairobi',
        type:'full',
        device:'JH-ABC',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"ABC PLace",
        region:'Nairobi',
        type:'full',
        device:'JH-ABC',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"ABC PLace",
        region:'Nairobi',
        type:'full',
        device:'JH-ABC',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"ABC PLace",
        region:'Nairobi',
        type:'full',
        device:'JH-ABC',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"ABC PLace",
        region:'Nairobi',
        type:'full',
        device:'JH-ABC',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"ABC PLace",
        region:'Nairobi',
        type:'full',
        device:'JH-ABC',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    }
]
const LocationList = () => {
  return (
   <div className="content">
    <div className="side-left">
        <Sidebar />
    </div>
    <div className="side-right">
    <div className= 'location--list'>
        <div className="list--header">
            <h2>Locations</h2>
            <Profile />
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
                <option value='Online'>All Status</option>
                <option value='Online'>Online</option>
                <option value='Offline'>Offline</option>
               
            </select>
        </div>
        
    <div className="list--container">
    {locations.map((item) => (
        <div className="list" key={item.id}>
            <div className="teacher--detail">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Regions/Towns</th>
                            <th>Types</th>
                            <th>Device</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.location}</td>
                            <td>{item.address}</td>
                            <td>{item.type}</td>
                            <td>{item.device}</td>
                            <td ><span className='table-status'>{item.status}</span></td>
                            <td className='table-icons'>{item.icon1}{location.icon2} {location.icon3}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    ))}
</div>

    </div>
    </div>
   </div>
  )
}

export default LocationList


