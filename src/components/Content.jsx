import React from 'react'
import ContentHeader from './ContentHeader'
import '../styles/content.css'
import Card from './Card'
import LocationList from './LocationList'
const Content = () => {
  return (
    <div className='content'>
        <ContentHeader/>
        <Card />
        <LocationList />

    </div>
  )
}

export default Content