import { use, useContext, useState } from "react"
import { authContext } from "../contexts/authContext"

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const { signup, submitting } = useContext(authContext)
    const [showPassword, setShowPassword] = useState(false)


    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    console.log(formData);
    

// shared component

    return (
        <div className="form">
            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div style={{ border: "1px solid", display: "flex", alignItems: "center", padding: ".5rem 1rem" }}>
                    <input style={{ padding: 0, border: "none", outline: "none", flex: 1 }} type={showPassword ? "text" : "password"} name="password" id="password" onChange={handleInput} />
                    <span onClick={() => setShowPassword(prev => !prev)}>{showPassword ? "Hide" : "Show"}</span>
                </div>
            </div>

            <button disabled={submitting} onClick={()=>{
                signup(formData)
            }}>Create Account</button>
        </div>
    )
}

export default SignupForm