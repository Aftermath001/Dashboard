import React from 'react'
import '../styles/locationList.css'
import Profile from '../components/Profile'
import Sidebar from './Sidebar'
import { CiEdit } from "react-icons/ci";
import { VscEye } from "react-icons/vsc";
import { CiTrash } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

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
        location:"Adams",
        region:'Nairobi',
        type:'full',
        device:'JH-Adams',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"Aga Khan Dr.Plaza",
        region:'Nairobi',
        type:'express',
        device:'JH-Agakhan',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"Airport View",
        region:'Nairobi',
        type:'full',
        device:'JH-Airview',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"Airside",
        region:'Nairobi',
        type:'full',
        device:'JH-Airside',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"Capital",
        region:'Nairobi',
        type:'full',
        device:'JH-Capital',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"Ciata Mall",
        region:'Kaimbu',
        type:'full',
        device:'JH-Ciatamall',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"Centre Point",
        region:'Diani',
        type:'full',
        device:'JH-Centrepoint',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"Mama Ngina Street",
        region:'Diani',
        type:'full',
        device:'JH-Mamangina',
        status:'Online',
        icon1: <CiEdit/>,
        icon2: <VscEye/>,
        icon3: <CiTrash/>,
    },
    {
        location:"Embassy House",
        region:'Diani',
        type:'full',
        device:'JH-Mamangina',
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
    <div className="list">
        <div className="teacher--detail">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Regions/Towns</th>
                        <th>Types</th>
                        <th>Device</th>
                        <th>Status</th>
                        <th className='table-icons'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map((item, index) => (
                        <tr key={index}>
                            <td>{item.location}</td>
                            <td>{item.region}</td>
                            <td>{item.type}</td>
                            <td>{item.device}</td>
                            <td><span className='table-status'>{item.status}</span></td>
                            <td className='table-icons'>
                                {item.icon1}
                                {item.icon2}
                                {item.icon3}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="buttons">
                <button>10 Per PAge</button>
                <button><FaArrowLeft/> <FaArrowRight/></button>
           
            </div>
        </div>
    </div>
</div>


    </div>
    </div>
   </div>
  )
}

export default LocationList


