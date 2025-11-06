import { useContext, useEffect } from "react"
import Provider from "../components/providers/Provider"
import { authContext } from "../contexts/authContext"
import { toast } from "sonner"
import { orderContext } from "../contexts/OrderContext"

const LandingPage = () => {
    const { user } = useContext(authContext)
    const { createOrder } = useContext(orderContext)

    useEffect(() => {
        createOrder()
        // toast.info("Welcomt to TEMU APP") // success, error, info, warning
    }, [])

    return (
        <div>
            <h1>Welcome to Landing Page</h1>
        </div>
    )
}

export default LandingPage