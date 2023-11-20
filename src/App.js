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
import PaymentPage from "./pages/PaymentPage";
import ClothesSelection from "./pages/ClothesSelection";
import PricingPage from "./pages/PricingPage";
import Services from "./pages/Services";
import About from "./pages/About";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import Orders from "./pages/user/Orders";
import OrderReceipt from "./pages/user/OrderReceipt";

import SingleProduct from "./pages/MarketPlace/SingleProduct";
import Wishlist from "./pages/MarketPlace/Wishlist"
import Cart from "./pages/MarketPlace/Cart" 
import HowItWorks from "./pages/HowItWorks";
import DatePage from "./pages/DatePage";
import UserProfilePage from "./pages/UserProfilePage";
import UserDashboardContactPage from "./pages/UserDashboardContactPage";
import UserOrderDetailsPage from "./pages/UserOrderDetailsPage";
import WashmanProfilePage from "./components/Washman Components/WashmanProfileBody"
import WashmanOrdersPage from "./pages/Washman Pages/WashmanOrdersPage";
import WashmanDashboardPage from "./pages/Washman Pages/WashmanDashboardPage";
import WashmanSingleOrderPage from "./pages/Washman Pages/WashmanSingleOrderPage";
import WashmanEditProfilePage from "./pages/Washman Pages/WashmanEditProfilePage";
 


function App() {
  return (
<>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/address" element={<AddressPage/>} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserRegister" element={<UserRegister/>}/>
        <Route path="/auth/reset-password" element={<ResetPaswdPage />} />
         <Route path="/auth/new-password" element={<NewPaswdPage />} />
         <Route path="/auth/verify" element={<AuthenticatePaswdPage />} />
         <Route path="/how-it-works" element={<HowItWorks />} />
         <Route path="/date" element={<DatePage />} />
         <Route path="/user-profile" element={<UserProfilePage />} />
         <Route path="/dashboard-contact-us" element={<UserDashboardContactPage />} />
         <Route path="/order-details" element={<UserOrderDetailsPage />} />
         <Route path="/ClothesSelection" element={<ClothesSelection/>}/>
        <Route path="/PaymentPage/:orderId" element={<PaymentPage/>}/>
         <Route path="/pricing" element={<PricingPage />} />
         <Route path="/ourservices" element={<Services/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/marketplace" element={<MarketPlace/>} />
         <Route path="/singleproduct" element={<SingleProduct/>} />
         <Route path="/wishlist" element={<Wishlist/>} />
         <Route path="/cart" element={<Cart/>} />
         
        <Route path="/my-orders/" element={<Orders/>}/>
        <Route path="/order-receipt/:orderId" element={<OrderReceipt/>}/>

        {/* WASHMAN ROUTES */}
        <Route path="/washman-profile" element={<WashmanProfilePage/>}/>
        <Route path="/washman-orders" element={<WashmanOrdersPage/>}/>
        <Route path="/washman-dashboard" element={<WashmanDashboardPage/>}/>
        <Route path="/washman-single-order" element={<WashmanSingleOrderPage/>}/>
        <Route path="/washman-edit-profile" element={<WashmanEditProfilePage/>}/>

      </Routes>
    </BrowserRouter>
</>



  );
}


export default App;
