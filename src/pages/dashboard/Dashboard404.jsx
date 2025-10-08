import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard404 = () => {
    return (
        <div>
            <div>
                <h1>Not FOund</h1>
                <p>This page does not exist on the Dashboard</p>
                <Link to="/dashboard">Return to Dasbhoard</Link>
            </div>
        </div>
    )
}

export default Dashboard404