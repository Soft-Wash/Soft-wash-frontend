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
import VariablesContext from "./context/VariablesContext";
import Dashboard from "./pages/FrontDesk/Dashboard";
import Login from "./pages/FrontDesk/Login";
import WashmanProfilePage from "./components/Washman Components/WashmanProfileBody"
import WashmanOrdersPage from "./pages/Washman Pages/WashmanOrdersPage";
import WashmanDashboardPage from "./pages/Washman Pages/WashmanDashboardPage";
import WashmanSingleOrderPage from "./pages/Washman Pages/WashmanSingleOrderPage";
import WashmanEditProfilePage from "./pages/Washman Pages/WashmanEditProfilePage";
import AdminDashboard from "./pages/Admin/AdminDashboard"
import Leave from "./pages/Admin/Leave";
import SupervisorDashBoard from "./pages/SupervisorPage/SupervisorDashBoard";
import OrderTable from  "./pages/Admin/OrderTable"
import FrontDesk from "./pages/Admin/Frontdesk";
import Supervisor from "./pages/Admin/Supervisor";
import Washman from "./pages/Admin/Washman";
import Register from "./pages/Admin/RegisterEmployee"
import Iventry from "./pages/Admin/Iventry";
import CartPayment from "./pages/MarketPlace/CartPayment";
import SupervisorDash from "./pages/SupervisorPage/SupervisorDash";
import Expenses from "./pages/Admin/Expenses";
import AddNewExpenses from "./pages/Admin/AddNewExpenses";
import ExpenseCategory from "./pages/Admin/ExpenseCategory";
import SalesReport from "./pages/Admin/SalesReport";
 


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
         <Route path="/shop" element={<MarketPlace/>} />
         <Route path="/singleproduct/:productId" element={<SingleProduct/>} />
         <Route path="/wishlist" element={<Wishlist/>} />
         <Route path="/cart" element={<Cart/>} />
        <Route path="/my-orders" element={<Orders/>}/>
        <Route path="/order-receipt/:orderId" element={<OrderReceipt/>}/>
        <Route path="/iventry" element={<Iventry/>}/>
        <Route path="/cartpayment" element={<CartPayment/>}/>

        {/* Front desk */}
          <Route path="/frontdesk" element={<Login/>} />
          <Route path="/frontdesk/dash" element={<Dashboard/>} />
         

        {/* WASHMAN ROUTES */}
        <Route path="/washman-profile" element={<WashmanProfilePage/>}/>
        <Route path="/washman-orders" element={<WashmanOrdersPage/>}/>
        <Route path="/washman-dashboard" element={<WashmanDashboardPage/>}/>
        <Route path="/washman-single-order/:_id" element={<WashmanSingleOrderPage/>}/>
        <Route path="/washman-edit-profile" element={<WashmanEditProfilePage/>}/>

        {/* Admin Routes */}
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/leave" element={<Leave/>}/>
        <Route path="/ordertable" element={<OrderTable/>}/>
        <Route path="/frontdesk/:roldId" element={<FrontDesk/>}/>
        <Route path="/supervisor/:roldId" element={<Supervisor/>}/>
        <Route path="/washman/:roldId" element={<Washman/>}/>
        <Route path="/registeremployee" element={<Register/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/newexpenses" element={<AddNewExpenses/>}/>
        <Route path="/expensescategory" element={<ExpenseCategory/>}/>
        <Route path="/salesreport" element={<SalesReport/>}/>

        {/* SUPERVISOR ROUTES */}

        <Route path="/SupervisorDash-Board" element={<SupervisorDashBoard/>}/>
        <Route path ="/SupervisorDash" element ={<SupervisorDash/>}/>

      </Routes>
    </BrowserRouter>
</>



  );
}


export default App;
