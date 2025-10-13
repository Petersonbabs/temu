import { createContext, useState } from "react";

export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "dare", email: "dare@gmail.com", gender: "female" })
    const [submitting, setSubmitting] = useState(false)
    const login = () => {
        alert("login in....")
    }

    const signup = async () => {

        setSubmitting(true)
        const user = { username: 'john_doe', email: 'john@example.com', password: 'pass123' };
        try {
            const response = await fetch("https://fakestoreapi.com/users", {
                method: "POST",
                body: JSON.stringify(user)
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    const value = {
        user,
        submitting,
        signup,
        login
    }

    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}

export default AuthProvider