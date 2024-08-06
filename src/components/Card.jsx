import React from 'react'
import { 
    BiSolidObjectsVerticalBottom,
    BiBriefcase,
    BiPulse,
    BiArch,
    BiStats 

 } from "react-icons/bi";

const datas = [
    {
        title: 'Current Available',
        amount:'345kg',
        icon: <BiSolidObjectsVerticalBottom/>,
        time:'As at 12:30PM',
    },
    {
        title: 'Todays Consumption',
        amount:'15kg',
        icon: <BiArch/>,
        time:'As at 12:30PM',
    },
    {
        title: 'This Month Consumption',
        amount:'545kg',
        icon: <BiBriefcase/>,
        time:'12 days',
    },
    {
        title: 'Monthly Avarage',
        amount:'245kg',
        icon: <BiStats/>,
        time:'20 Months',
    },
];

const Card = () => {
  return (
    <div className='card--container'>
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
  )
}

export default Card