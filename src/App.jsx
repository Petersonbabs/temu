import { BrowserRouter, Route, Routes } from "react-router-dom"
import Button from "./components/Button"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Hooks from "./components/Hooks"
import ProductList from "./components/ProductList"
import ProfileCard from "./components/ProfileCard"
import SignupForm from "./components/SignupForm"
import LandingPage from "./pages/LandingPage"
import NotFoundPage from "./pages/NotFoundPage"
import SingleProduct from "./pages/SingleProduct"

// class components
// functional component

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/signup" element={<SignupForm />} />

          {/* ASSIGNMENT:
          
            - Create Login page = "/login"
            - Create add product page = "/add-product"
          */}

          {/* params */}
          <Route path="/products/:id" element={<SingleProduct />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// named, default
export default App