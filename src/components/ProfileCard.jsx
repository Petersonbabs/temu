// conditional statement
// if else; tenary operator

// conditional rendreing

const ProfileCard = ({ name, email, image, age, isVerified }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            border: "1px solid",
            minWidth: "350px",
            maxWidth: "450px",
            margin: "1rem",
            borderRadius: "10px",
            padding: "1rem"
        }}>
            <img src={image} alt="" width={100} height={100} style={{ borderRadius: "50%", objectFit: "cover" }} />
            <div >
                <h2>{name}</h2>
                <p>{email}</p>
                <span>{age}</span>
                <button
                    style={{
                        background: isVerified ? "green" : "yellow",
                        border: "none",
                        padding: ".5rem 1rem"
                    }}
                >{isVerified ? "Verified user" : "Please verify your profile"}</button>
            </div>
        </div>
    )
}

export default ProfileCard