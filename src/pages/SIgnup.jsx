import React from "react"
import { useContext, useState } from "react"
import { authContext } from "../contexts/authContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// schema
const signupSchema = yup.object({
    email: yup.string().required("Email is required").email("Please enter a vaid email"),
    name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters")
})

const SignupPage = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const handleLogin = async (Data) => {
        try {
            const res = await fetch("lkjhg", {
                method: "POST",
                body: JSON.stringify(Data)
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" {...register("name")} />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div>
                <div style={{ border: "1px solid", display: "flex", alignItems: "center", padding: ".5rem 1rem" }}>
                    <input
                        style={{ padding: 0, border: "none", outline: "none", flex: 1 }}
                        type={showPassword ? "text" : "password"} id="password"
                        {...register("password")}
                    />
                    <span onClick={() => setShowPassword(prev => !prev)}>{showPassword ? "Hide" : "Show"}</span>
                </div>
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            <button >Create Account</button>
        </form>
    )
}

export default SignupPage