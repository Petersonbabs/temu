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
import PublicPagesLayout from "./components/layout/PublicPages"
import AuthProvider from "./contexts/authContext"
import { Toaster } from "sonner"


function App() {

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>

          <div >
            <Toaster richColors position="top-right" closeButton visibleToasts={3} />
            <Routes>
              <Route path="/*" element={<PublicPagesLayout />} />
              <Route path="/dashboard/*" element={<DashboardLayout />} />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  )
}

// named, default
export default App