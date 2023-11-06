import "./App.css";
// import ScrollToTop from "./utils/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/auth/login/UserLogin";
import UserRegister from "./pages/auth/register/UserRegister";
import AuthenticatePaswdPage from "./pages/AuthenticatePaswdPage";
import NewPaswdPage from "./pages/NewPaswdPage";
import ResetPaswdPage from "./pages/ResetPaswdPage";
import HomePage from "./pages/user/HomePage"
import AddressPage from "./pages/user/AddressPage";
import PricingPage from "./pages/PricingPage";
import Services from "./pages/Services";
import About from "./pages/About";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import SingleProduct from "./pages/MarketPlace/SingleProduct";
import Wishlist from "./pages/MarketPlace/Wishlist"
import Cart from "./pages/MarketPlace/Cart" 



function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/address" element={<AddressPage/>} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserRegister" element={<UserRegister/>}/>
        <Route path="/auth/reset-password" element={<ResetPaswdPage />} />
         <Route path="/auth/new-password" element={<NewPaswdPage />} />
         <Route path="/auth/verify" element={<AuthenticatePaswdPage />} />
         <Route path="/pricing" element={<PricingPage />} />
         <Route path="/ourservices" element={<Services/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/marketplace" element={<MarketPlace/>} />
         <Route path="/singleproduct" element={<SingleProduct/>} />
         <Route path="/wishlist" element={<Wishlist/>} />
         <Route path="/cart" element={<Cart/>} />


        
      </Routes>
    </BrowserRouter>
    // <div>
    //   <BrowserRouter>
    //    <Routes>

    //    </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
