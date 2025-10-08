// import React from 'react'

import { Link } from "react-router-dom"

const defaultMenuItems = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Products",
        path: "/products"
    },
    {
        label: "Signup",
        path: "/signup"
    },
    {
        label: "Dasboard",
        path: "/dashboard"
    },
]




const Navbar = ({ menuItems = defaultMenuItems, profile, navbarStyling }) => {
    return (
        <div className={`nav ${navbarStyling}`} >
            <Link to="/"><h1>Logo</h1></Link>
            <div style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center"
            }}>
                {
                    menuItems.map((item, index) => (
                        <Link to={item.path} key={index}>{item.label}</Link>
                    ))
                }

                <div style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
                    <img src={profile?.userImage} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                </div>

            </div>
        </div>
    )
}

export default Navbar