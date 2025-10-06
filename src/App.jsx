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
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Provider from "./components/providers/Provider"
import DashboardLayout from "./pages/dashboard/DashboardLayout"
import Orders from "./pages/dashboard/Orders"

// class components
// functional component

// Layout component
// Provider component
// useParams() => get the parameters in the user location
// <Link to="/"><Link>
// multi-level route

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/provider" element={<Provider />} >
            <Route   element={<h2>Polopopo</h2>} />
          </Route> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard/*" element={<DashboardLayout />} />

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
      {/* <Footer /> */}
    </div>
  )
}

// named, default
export default App