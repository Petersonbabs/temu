import { useEffect, useState } from "react"
// state: A mutable (changeable) object


// useState: Manages state within a functional component. It returns a stateful value and a function to update it. 
// useEffect: Handles side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM
// useRef: Provides a way to access the DOM directly or persist mutable values across renders without causing re-renders.

const Hooks = () => {
    const [stomach, setStomach] = useState("normal") // default, prev
    const [count, setCount] = useState(1)
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({ name: "Dare", age: 11, address: "Nigeria" })
    const [isVerified, setIsVerified] = useState()
    const [message, setMessage] = useState("")

    // useEffect(callBack, [dependencies array])
    useEffect(() => {
        console.log("welcome")
    }, [count, user, message])



    const handleStomach = () => {
        setStomach("hungry")
    }
    const handleCount = () => {
        setCount((prev) => (prev + 1))
    }
    const handleLogin = () => {
        setIsAuth(true)
    }

    const toggleStatus = () => {
        setIsVerified((prev) => !prev)
        // if (!isVerified) {
        //     setIsVerified(true)
        // } else {
        //     setIsVerified(false)
        // }
    }

    const typeMessage = (e) => {
        // console.log(e.target.value)
        setMessage(e.target.value)
    }

    return (
        <div>
            <h1>Stomach: {stomach}</h1>
            <button onClick={handleStomach}>Change Stomach</button>
            <button onClick={handleCount}>Increment {count}</button>
            <div>
                {isAuth ? user.name : <button onClick={handleLogin}>Login</button>}
            </div>

            <button onClick={toggleStatus} style={{ background: isVerified ? "green" : "red" }}>Status</button>
            <input type="text" onChange={typeMessage} />
            <p>{message}</p>
        </div>
    )
}

export default Hooks