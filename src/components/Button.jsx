// Data Transfer:
// Read-Only
// state, text, number, function, object

function Button({ text, background, onClick }) {


    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: background,
                border: "none",
                color: "#fff",
                padding: ".5rem 1rem",
                borderRadius: "5px",
            }}>{text}</button>
    )
}

export default Button


