import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import './App.css'
import Profile from './components/Profile'
import Entrypage from './components/Entrypage'
const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard--content">
        <Entrypage />
        {/* <Content />
        <Profile /> */}
        

      </div>
    </div>
  )
}

export default App