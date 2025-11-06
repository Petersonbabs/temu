import { createContext, useState } from "react";

export const orderContext = createContext()
const OrderProvider = ({ children }) => {
    const [loadingOrder, setLoadingOrders] = useState(false)

    const createOrder = () => {
        // alert("Creating order...")
    }

    const getMyOrders = () => {

    }

    const value = {
        createOrder
    }

    return (
        <orderContext.Provider value={value}>{children}</orderContext.Provider>
    )
}

export default OrderProvider