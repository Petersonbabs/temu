import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Orders from './Orders'
import DashboardIndex from './DashboardIndex'
import NotFoundPage from '../NotFoundPage'
import Dashboard404 from './Dashboard404'
import DashboardNavbar from './components/DashboardNav'
import Navbar from '../../components/layout/Navbar'
import AddProduct from './AddProduct'

const dashbaordMenuItems = [
    {
        label: "Earnings",
        path: "/dashboard/earnings"
    },
    {
        label: "Orders",
        path: "/dashboard/orders"
    },
    {
        label: "Profile",
        path: "/dashboard/profile"
    }
]

const defaultprofile = {
    userImage: "https://images.unsplash.com/photo-1599475735868-a8924c458792?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8fDA%3D",
    path: "/profile"
}

const navStyle = {
    background: "#000"
}

const Dashboard = () => {
    return (
        <>
            {/* <DashboardNavbar /> */}
            <Navbar menuItems={dashbaordMenuItems} profile={defaultprofile} navbarStyling="dashboard-nav" />
            <div style={{ display: "flex", gap: "1rem", paddingTop: "5rem", }}>
                <aside style={{
                    background: "black",
                    padding: '1rem',
                    width: "20%",
                    height: "100vh",
                    position: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}>
                    <p><Link style={{ color: "white", textDecoration: "none" }} to="/dashboard">Dashbord</Link></p>
                    <p><Link style={{ color: "white", textDecoration: "none" }} to="/dashboard/orders">Order</Link></p>
                    <p><Link style={{ color: "white", textDecoration: "none" }} to="/dashboard/profile">Profile</Link></p>
                    <p><Link style={{ color: "white", textDecoration: "none" }} to="/dashboard/add-product">Add Product</Link></p>
                </aside>

                <div style={{ width: "75%", marginLeft: "auto", padding: "1rem", background: "#bbb" }}>
                    <Routes>
                        <Route path='/' element={<DashboardIndex />} />``
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/add-product' element={<AddProduct />} />
                        <Route path='*' element={<Dashboard404 />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Dashboard