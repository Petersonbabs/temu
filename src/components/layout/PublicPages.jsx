
import Footer from './Footer'
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import LandingPage from "../../pages/LandingPage"
import ProductList from "../ProductList"
import SignupForm from "../SignupForm"
import SingleProduct from "../../pages/SingleProduct"
import NotFoundPage from "../../pages/NotFoundPage"
import AuthProvider from '../../contexts/authContext'

const PublicPagesLayout = () => {
    return (
        <div style={{ paddingTop: "5rem" }}>
            {/* <AuthProvider> */}
                <Navbar />

                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/signup" element={<SignupForm />} />
                    <Route path="/products/:id" element={<SingleProduct />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            {/* </AuthProvider> */}
            {/* <Footer /> */}
        </div>
    )
}

export default PublicPagesLayout