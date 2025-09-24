import Button from "./components/Button"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Hooks from "./components/Hooks"
import ProductList from "./components/ProductList"
import ProfileCard from "./components/ProfileCard"

// class components
// functional component

function App() {

  return (
    // signup
    <div >
      {/* <Header />
      <Hero />
      <Button text="Add to cart" background="green" /> */}

      {/* <ProfileCard image="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" name={"John Doe"} isVerified={true} />
      <ProfileCard image="https://images.pexels.com/photos/32504632/pexels-photo-32504632.jpeg" name="Damilare John" /> */}

      <ProductList />
      {/* <Hooks /> */}
    </div>
  )
}

// named, default
export default App