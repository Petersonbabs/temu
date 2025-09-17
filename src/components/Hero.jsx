import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'

const Hero = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            maxWidth: "700px",
            margin: "auto"
        }}>
            <Card1 />
            <Card2 />
        </div>
    )
}

export default Hero