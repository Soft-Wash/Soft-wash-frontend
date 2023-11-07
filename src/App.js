import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/auth/login/UserLogin";
import UserRegister from "./pages/auth/register/UserRegister";
import AuthenticatePaswdPage from "./pages/AuthenticatePaswdPage";
import NewPaswdPage from "./pages/NewPaswdPage";
import ResetPaswdPage from "./pages/ResetPaswdPage";
import HomePage from "./pages/user/HomePage"
import AddressPage from "./pages/user/AddressPage";
<<<<<<< HEAD
import HowItWorks from "./pages/HowItWorks";
import DatePage from "./pages/DatePage";
import UserProfilePage from "./pages/UserProfilePage";
import UserDashboardContactPage from "./pages/UserDashboardContactPage";
import UserOrderDetailsPage from "./pages/UserOrderDetailsPage";
 
=======
import PricingPage from "./pages/PricingPage";
import Services from "./pages/Services";
import About from "./pages/About";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import Orders from "./pages/user/Orders";
import OrderReceipt from "./pages/user/OrderReceipt";

import SingleProduct from "./pages/MarketPlace/SingleProduct";
import Wishlist from "./pages/MarketPlace/Wishlist"
import Cart from "./pages/MarketPlace/Cart" 

>>>>>>> c67370096f3b7254975a7d1d8b618f7a59de02ed


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/address" element={<AddressPage/>} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserRegister" element={<UserRegister/>}/>
        <Route path="/auth/reset-password" element={<ResetPaswdPage />} />
         <Route path="/auth/new-password" element={<NewPaswdPage />} />
         <Route path="/auth/verify" element={<AuthenticatePaswdPage />} />
<<<<<<< HEAD
         <Route path="/how-it-works" element={<HowItWorks />} />
         <Route path="/date" element={<DatePage />} />
         <Route path="/user-profile" element={<UserProfilePage />} />
         <Route path="/dashboard-contact-us" element={<UserDashboardContactPage />} />
         <Route path="/order-details" element={<UserOrderDetailsPage />} />
        
      </Routes>
    </BrowserRouter>
=======
         <Route path="/pricing" element={<PricingPage />} />
         <Route path="/ourservices" element={<Services/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/marketplace" element={<MarketPlace/>} />
         <Route path="/singleproduct" element={<SingleProduct/>} />
         <Route path="/wishlist" element={<Wishlist/>} />
         <Route path="/cart" element={<Cart/>} />

        <Route path="/my-orders" element={<Orders/>}/>
        <Route path="/order-receipt" element={<OrderReceipt/>}/>
        
      </Routes>
    </BrowserRouter>

>>>>>>> c67370096f3b7254975a7d1d8b618f7a59de02ed
  );
}

export default App;