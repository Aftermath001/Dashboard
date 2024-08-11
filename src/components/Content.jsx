import React from 'react'
import '../styles/content.css'
import Sidebar from '../components/Sidebar'
import Card from './Card'
import LocationList from './LocationList'
import Consumption from './Consumption'
import LocationConsumption from './LocationConsumption'
import Trends from './Trends'
import MatAi from './MatAi'
const Content = () => {
  return (
    <div className='content'>
      <div className="side-left">
        <Sidebar/>
      </div>
      <div className="side-right">
      <h1 className="header--title">Overview</h1>
       <div className="upper-1">
        <Card />
      </div>

      <div className='upper-2'>
        <Consumption />
      </div>

      <div className="upper-3">
        <LocationConsumption/>
      </div>
      </div>

    </div>

   
  )
}

export default Content

