// import React from 'react'

import { useContext } from "react"
import { Link } from "react-router-dom"
import { authContext } from "../../contexts/authContext"

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

    const { user, login } = useContext(authContext)
    console.log(user)

    return (
        <div className={`nav ${navbarStyling}`} >
            <Link to="/"><h1>Logo</h1></Link>
            <button onClick={login}>Login</button>
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