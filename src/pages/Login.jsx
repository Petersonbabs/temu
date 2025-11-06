import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit } = useForm()


    // console.log(user)
    // console.log(JSON.stringify(user))

    const handleLogin = async (Data) => {
        // FORMdATA
        const formData = new FormData()
        formData.append("image", File)
        formData.append("email", "mme@dev.com")
        formData.append("name", "mme dev")

        const response = await fetch("lkjhgf", {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const information = await response.json()
    }

    const containerStyle = {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '32px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        background: '#fff',
        fontFamily: 'Arial, sans-serif'
    }

    const formGroupStyle = {
        marginBottom: '18px'
    }

    const labelStyle = {
        display: 'block',
        marginBottom: '6px',
        fontWeight: 'bold',
        color: '#333'
    }

    const inputStyle = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px'
    }

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: 'center', marginBottom: '24px', color: '#007bff' }}>Login to Temu App</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>Email:</label>
                    <input type="email" id="email" name="email" {...register("email")} required style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>Password:</label>
                    <input type="password" id="password" name="password"  {...register("password")} required style={inputStyle} />
                </div>
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    )
}

export default Login