import React from 'react'
import ContentHeader from './ContentHeader'
import '../styles/content.css'
import Card from './Card'
import LocationList from './LocationList'
import Consumption from './Consumption'
import LocationConsumption from './LocationConsumption'
import Trends from './Trends'
const Content = () => {
  return (
    <div className='content'>
      <Trends />
        {/* <ContentHeader/>
        <Card />
        <Consumption />
        <LocationConsumption /> */}
        {/* <LocationList /> */}

    </div>
  )
}

export default Content

