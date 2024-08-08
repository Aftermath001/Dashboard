import React from 'react'
import ContentHeader from './ContentHeader'
import '../styles/content.css'
import Card from './Card'
import LocationList from './LocationList'
import Consumption from './Consumption'
import LocationConsumption from './LocationConsumption'
const Content = () => {
  return (
    <div className='content'>
        <ContentHeader/>
        <Card />
        <Consumption />
        <LocationConsumption />
        {/* <LocationList /> */}

    </div>
  )
}

export default Content