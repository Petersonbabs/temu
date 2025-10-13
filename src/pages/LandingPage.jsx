import { useContext } from "react"
import Provider from "../components/providers/Provider"
import { authContext } from "../contexts/authContext"

const LandingPage = () => {
    const { user } = useContext(authContext)
    console.log(user)
    return (
        <div>
            <h1>Welcome to Landing Page</h1>
        </div>
    )
}

export default LandingPage