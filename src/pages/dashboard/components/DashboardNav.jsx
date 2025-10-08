import { Link } from "react-router-dom"

const DashboardNavbar = () => {
    return (
        <div style={{ display: "flex", background: "black", position: "fixed", top: 0, width: "100%", zIndex: "999", padding: "1rem", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/"><h1 style={{ color: "white" }}>Logo</h1></Link>
            <div style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center"
            }}>
                <Link style={{ color: "white" }} to="/dashboard/earnings">Earnings</Link>
                <Link style={{ color: "white" }} to="/dashboard/ordwers">My orders</Link>
                {/* <Link style={{ color: "white" }} to="/signup">Signup</Link> */}
                {/* <Link style={{ color: "white" }} to="/dashboard">Dashboard</Link> */}

                <div style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
                    <img src="https://images.unsplash.com/photo-1599475735868-a8924c458792?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8fDA%3D" alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar