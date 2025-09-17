import Button from "./Button"
// import "../index.css"

function Header() {
    return (
        <header style={styles.headerContainer}>
            <h2 style={styles.logo}>Logo</h2>

            <div style={styles.menuItems}>
                <a className="menu-item" href="#">Home</a>
                <a className="menu-item" href="#">Home</a>
                <a className="menu-item" href="#">Home</a>
                <a className="menu-item" href="#">Home</a>
            </div>

            <Button />
        </header>
    )
}

export default Header

const styles = {
    headerContainer: {
        display: "flex",
        backgroundColor: "#999",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem"
    },
    logo: {
        color: "red"
    },
    menuItems: {
        display: "flex",
        gap: "1rem",
        alignItems: "center"
    }
}