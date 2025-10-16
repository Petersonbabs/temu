import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VerifyAccount = () => {
    const { token } = useParams()
    const [verifying, setVerifyim] = useState(true)
    const [verificationData, setVerificationData] = useState({ success: "", message: "" })

    useEffect(() => {
        verify()
    }, [])

    const verify = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/auth/verify/${token}`, {
                method: "POST",
                // body: JSON.stringify({ token })
            })
            const data = await res.json()
            setVerificationData(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setVerifyim(false)
        }
    }
    return (
        <div style={{ height: "300px", margin: "3rem auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {
                verifying ? (
                    <h1>Verifying your account...</h1>
                ) : (
                    <>
                        <h1 style={{ color: verificationData.success ? "green" : "red" }}>{verificationData.message}</h1>
                    </>
                )
            }
        </div>
    )
}

export default VerifyAccount