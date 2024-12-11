import React from 'react'
import './Dashboard.css'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className='dashboard'>
        <div>
            <Sidebar />
        </div>
        <div>
            <Outlet />
        </div>
      </div>
    
    
    </>
  )
}

export default Dashboard