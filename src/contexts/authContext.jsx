import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "dare", email: "dare@gmail.com", gender: "female" })
    const [submitting, setSubmitting] = useState(false)
    const navigate = useNavigate()
    const login = () => {
        alert("login in....")
    }
    
    // REACK-HOOK-FORM
    // YUP
    // Protected Route
    // HOC => HigherOrder Conpoment

    const signup = async () => {
        console.log(data)
        return

        setSubmitting(true)
        try {
            const response = await fetch("http://localhost:4000/api/auth/signup", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            if (response.status === 201) {
                toast.success(data.message || "You are welcome")
                navigate("/login")
            }
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