import { useState } from "react"

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const [submitting, setSubmitting] = useState(false)

    // const arry1 = ["john", "ade", "ola"]
    // console.log(arry1)
    // const arry2 = ["hammed", "azeez", ...arry1,]
    // console.log(arry2);

    const user1 = { name: "kenny", age: 18 }
    // console.log(user1)
    // const user2 = { ...user1, address: "Nigeria", name: "taiwo" }
    // console.log(user2)

    // const hhh = { name: "lokl", age: 46, name: "pola" }
    // console.log(hhh)


    const [showPassword, setShowPassword] = useState(false)


    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    // console.log(formData)

    const handleSubmit = async () => {
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
    // react-router-dom


    return (
        <div className="form">
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" onChange={handleInput} />
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

            <button disabled={submitting} onClick={handleSubmit}>Create Account</button>
        </div>
    )
}

export default SignupForm