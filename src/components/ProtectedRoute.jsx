// outlet
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const ProtectedRoute = () => {
    
    // // console.log("hello")
    const auth = true
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth) {
            // redirect to login
            navigate("/login")
            return
        }
    }, [])

    return <Outlet />
}

export default ProtectedRoute