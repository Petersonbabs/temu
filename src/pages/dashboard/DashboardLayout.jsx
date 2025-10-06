import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './Orders'
import DashboardIndex from './DashboardIndex'

const Dashboard = () => {
    return (
        <div>
            {/* <h1>Dashboar</h1> */}
            <Routes>
                <Route path='/' element={<DashboardIndex />} />
                <Route path='/orders' element={<Orders />} />
            </Routes>
        </div>
    )
}

export default Dashboard