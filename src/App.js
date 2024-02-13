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
import WashmanLeavePage from "./pages/Washman Pages/WashmanLeavePage"
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
import OrderReport from "./pages/Admin/OrderReport";
import ExpenseReport from "./pages/Admin/ExpenseReport";
import SingleOrder from "./pages/Admin/SingleOrder";
import EditExpense from "./pages/Admin/EditExpense";
import Customer from "./pages/Admin/Customer";
import EditCustomer from "./pages/Admin/EditCustomer";
import CreateLeave from "./pages/Admin/CreateLeave";
import CreateSupUsers from "./pages/SupervisorPage/CreateSupUsers";
import SupOrderTable from "./pages/SupervisorPage/SupOrderTable";
import EmployeeLogin from "./pages/EmployeePage/EmployeeLogin";
import SupervisorExpense from "./pages/SupervisorPage/SupervisorExpense";
import CreateExpenseSup from "./pages/SupervisorPage/CreateExpenseSup";
import WorkFlowTask from "./pages/Admin/WorkFlowTask";
import CreateTask from "./pages/Admin/CreateTask";
import TaskTable from "./pages/Admin/TaskTable";
import SingleTaskPage from "./pages/Admin/SingleTaskPage";

import PaymentHistory from "./pages/user/PaymentHistory";
import CreateOrder from "./pages/Admin/CreatOrder";
import SupSingleOrder from "./pages/SupervisorPage/SupSingleOrder";
import SupLeave from "./pages/SupervisorPage/SupLeave";
import SupCreateLeave from "./components/SupervisorComponents/SupCreateLeave";
import EditExpenseSup from "./pages/SupervisorPage/EditEpenseSup";
import SalesReportSup from "./pages/SupervisorPage/SalesReportSup";
import ExpenseReportSup from "./pages/SupervisorPage/ExpenseReportSup";
import SupTaskWorkflow from "./pages/SupervisorPage/SupTaskWorkflow";
import SupCreateTask from "./pages/SupervisorPage/SupCreateTask";
import SupTaskTable from "./pages/SupervisorPage/SupTaskTable";
import SupSingleTask from "./components/SupervisorComponents/SupSingleTask";
import UserEditProfile from "./components/UserDashboard/UserEditProfile";
import UserDashboard from "./pages/user/UserDashboard";
import { ChakraProvider } from '@chakra-ui/react';
import WashmanRequestSuppliesPage from "./pages/Washman Pages/WashmanRequestSuppliesPage";





 


function App() {
  return (
<>  
<ChakraProvider>
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
        <Route path="/order-receipt" element={<OrderReceipt/>}/>
        <Route path="/my-orders/" element={<Orders/>}/>
        <Route path="/order-receipt/:orderId" element={<OrderReceipt/>}/>
        <Route path="/iventry" element={<Iventry/>}/>
        <Route path="/cartpayment" element={<CartPayment/>}/>
        <Route path="/paymenthistory" element={<PaymentHistory/>}/>
        <Route path="/paymenthistory" element={<Dashboard/>}/>
        <Route path="/usereditprofile/:_id" element={<UserEditProfile/>}/>

        {/* Front desk */}
          <Route path="/employeelogin" element={<Login/>} />
          <Route path="/frontdesk/dash" element={<Dashboard/>} />
          <Route path="/userdashboard" element={<UserDashboard/>} />
         

        {/* WASHMAN ROUTES */}
        <Route path="/washman-profile" element={<WashmanProfilePage/>}/>
        <Route path="/washman-orders" element={<WashmanOrdersPage/>}/>
        <Route path="/washman-dashboard" element={<WashmanDashboardPage/>}/>
        <Route path="/washman-single-order/:_id" element={<WashmanSingleOrderPage/>}/>
        <Route path="/washman-edit-profile" element={<WashmanEditProfilePage/>}/>
        <Route path="/washman-leave" element={<WashmanLeavePage />}/>
        <Route path="/washman-request-supplies" element={<WashmanRequestSuppliesPage />}/>
        

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
        <Route path="/orderreport" element={<OrderReport/>}/>
        <Route path="/expensereport" element={<ExpenseReport/>}/>
        <Route path="/adminsingleorder/:_id" element={<SingleOrder/>}/>
        <Route path="/editexpense/:_id" element={<EditExpense/>}/>
        <Route path="/admincustomer" element={<Customer/>}/>
        <Route path="/editcustomer/:id" element={<EditCustomer/>}/>
        <Route path="/createleave" element={<CreateLeave/>}/>
        <Route path="/workflowtask" element={<WorkFlowTask/>}/>
        <Route path="/createtask" element={<CreateTask/>}/>
        <Route path="/tasktable" element={<TaskTable/>}/>
        <Route path="/singletaskpage/:_id" element={<SingleTaskPage/>}/>
        <Route path="/createOrder" element={<CreateOrder/>}/>
        {/* <Route path="/taskfreeemployee" element={<TaskFreeEmployees/>}/> */}
        


        {/* SUPERVISOR ROUTES */}
        <Route path ="/CreateSupUsers" element ={<CreateSupUsers/>}/>
        <Route path ="/SupOrderTable" element ={<SupOrderTable/>}/>
        <Route path ="/SupervisorDash" element ={<SupervisorDash/>}/>
        <Route path ="/SupervisorExpense" element ={<SupervisorExpense/>}/>
        <Route path="/editexpenseSup/:_id" element={<EditExpenseSup/>}/>
        <Route path ="/CreateExpenseSup" element ={<CreateExpenseSup/>}/>
        <Route path ="/SupSingleOrder/:_id" element ={<SupSingleOrder/>}/>
        <Route path ="/SupLeave" element ={<SupLeave/>}/>
        <Route path ="/SupCreateLeave" element ={<SupCreateLeave/>}/>
        <Route path="/supsalesreport" element={<SalesReportSup/>}/>
        <Route path="/supexpensereport" element={<ExpenseReportSup/>}/>
        <Route path="/suptaskworkflow" element={<SupTaskWorkflow/>}/>
        <Route path="/SupCreateTask" element={<SupCreateTask/>}/>
        <Route path="/SupTaskTable" element={<SupTaskTable/>}/>
        <Route path="/SupSingleTask/:_id" element ={<SupSingleTask/>}/>
       

        {/* EMPLOYEE LOGIN */}

        <Route path ="/EmployeeLogin" element ={<EmployeeLogin/>}/>

      </Routes>
    </BrowserRouter>
    </ChakraProvider>
</>



  );
}


export default App;
