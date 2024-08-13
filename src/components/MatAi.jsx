import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import '../styles/matAi.css'
import { 
    BiStopwatch,
    BiBriefcase,
    BiCalendarAlt,
    BiArch,
    BiStats,
    BiUserCircle 

 } from "react-icons/bi";
import Sidebar from './Sidebar';
import { IoSend } from "react-icons/io5";


const MatAi = () => {
    const datas = [
        {
            title: 'Compare Usage',
            icon: <BiStopwatch/>,
            time:'See how each location stacks up against the others in terms of gas consumption',
        },
        {
            title: 'Identify Patterns',
            icon: <BiArch/>,
            time:'Understand the typical gas usage behaviour to optimize operations and plan ahead',
        },
        {
            title: 'Spot Anomilies',
            amount:'467kg',
            icon: <BiCalendarAlt/>,
            time:'Detect unsusual gas usage and promptly to avoid waste and ensure safety',
        },
    ];
  return (

    <div className="main">
        <div className="main-side-left">
            <Sidebar/>
        </div>

        <div className="main-right">
            <div className="upper-right-side">
                <h2>matX AI</h2>
               <i> <BiUserCircle /></i>
            </div>
            <div className="lower-side">
                <div className="lower-side-left">
                    <div className="chat">
                        <div className="lower-2">
                        {datas.map((item)=>(
                            <div className="card">
                                <div className="card--title">
                                    <span>{item.icon}</span>
                                </div>
                                <div className="card--cover">
                                <h2>{item.title}</h2>
                                </div>
                                <div className="card--content">
                                    <p>{item.time}</p>
                                </div>
                            </div>
                            ))}
                        </div>


                        <div className="input-container">
           
                            <input
                            type="email"
                            placeholder="Message MatX AI"
                        
                            />
                            <i><IoSend /></i>
                   
                     </div>



                    </div>

                </div>
                <div className="content-info-right">
                    <div className="content-info-right-top">
                        <h2>Message History</h2> 
                        <div className="info-date">
                            <span>JUL 08</span>
                            <p>Gas Status for Kimathi Street</p>
                            <i>< FaRegTrashAlt/></i>
                        </div>   
                    </div>
                    <div className='content-info-right-bottom'>
                        <button className='btn-new'>+ New Message</button>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MatAi