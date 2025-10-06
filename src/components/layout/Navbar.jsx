// import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div style={{ display: "flex", background: "#bbb", padding: "1rem", justifyContent: "space-between", alignItems: "center" }}>
            <h1>Logo</h1>
            <div style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center"
            }}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    )
}

export default Navbar