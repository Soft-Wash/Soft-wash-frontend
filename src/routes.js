import Login from "./pages/auth/login/Login";
import signUp from "./pages/auth/register/signUp";
import AuthenticatePaswdPage from "./pages/AuthenticatePaswdPage";
import NewPaswdPage from "./pages/NewPaswdPage";
import ResetPaswdPage from "./pages/ResetPaswdPage";
import HomePage from "./pages/user/HomePage";
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
import Wishlist from "./pages/MarketPlace/Wishlist";
import Cart from "./pages/MarketPlace/Cart";
import HowItWorks from "./pages/HowItWorks";
import DatePage from "./pages/DatePage";
import UserProfilePage from "./pages/UserProfilePage";
import UserDashboardContactPage from "./pages/UserDashboardContactPage";
import UserOrderDetailsPage from "./pages/UserOrderDetailsPage";
import VariablesContext from "./context/VariablesContext";
// import Dashboard from "./pages/FrontDesk/Dashboard";
// import Login from "./pages/FrontDesk/Login";
import WashmanProfilePage from "./components/Washman Components/WashmanProfileBody";
import WashmanOrdersPage from "./pages/Washman Pages/WashmanOrdersPage";
import WashmanDashboardPage from "./pages/Washman Pages/WashmanDashboardPage";
import WashmanSingleOrderPage from "./pages/Washman Pages/WashmanSingleOrderPage";
import WashmanEditProfilePage from "./pages/Washman Pages/WashmanEditProfilePage";
import WashmanLeavePage from "./pages/Washman Pages/WashmanLeavePage";
import Dashboard from "./pages/Admin/AdminDashboard";
import Leave from "./pages/Admin/Leave";
import SupervisorDashBoard from "./pages/SupervisorPage/SupervisorDashBoard";
import OrderTable from "./pages/Admin/OrderTable";
import FrontDesk from "./pages/Admin/Frontdesk";
import Supervisor from "./pages/Admin/Supervisor";
import Washman from "./pages/Admin/Washman";
import Register from "./pages/Admin/RegisterEmployee";
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
import SupEmployees from "./pages/SupervisorPage/SupEmployees";
import SupSingleTask from "./components/SupervisorComponents/SupSingleTask";
import UserEditProfile from "./components/UserDashboard/UserEditProfile";
import UserDashboard from "./pages/user/UserDashboard";
import { ChakraProvider } from "@chakra-ui/react";
import WashmanRequestSuppliesPage from "./pages/Washman Pages/WashmanRequestSuppliesPage";
import TaskFreeEmployees from "./pages/Admin/TaskFreeEmployees";
import EmployeeProfile from "./pages/Admin/EmployeeProfile";
import EmployeeEditProfile from "./pages/Admin/EmployeeEditProfile";
import ShopReciept from "./pages/MarketPlace/ShopReciept";
import ShopOrderDetailsPage from "./pages/ShopOrderDetailsPage";
import ShopOrders from "./pages/user/ShopOrders";
import WashmanProfilePage1 from "./pages/Washman Pages/WashmanProfilePage1";
import FrontdeskAssignTask from "./pages/FrontDesk/AssignTask";
import CreatProduct from "./pages/Admin/CreateProduct";
import { TaskContext } from "./context/TaskContext";
import SupNotificationTaskTable from "./components/SupervisorComponents/SupNotificationTaskTable";

import SupplierDash from "./pages/Supplier/SupplierDash";
import Supply from "./pages/Supplier/Supply";
import DeliveryReport from "./pages/Supplier/DeliveryReport";
import SupplierOrderReport from "./pages/Supplier/SupplierOrderReport";
import SupplyReceipt from "./pages/Supplier/SupplyReceipt";
import SupplyOrder from "./pages/Supplier/SupplyOrder";
import SupplierLog from "./pages/Supplier/SupplierLog";

import PayRoll from "./pages/Admin/PayRoll";
import PayRollTable from "./pages/Admin/PayRollTable";
import Loader from "./components/Loader/Loader";
import Review from "./pages/Admin/Reviews";
import SupTransactions from "./pages/SupervisorPage/SupTransactions";
import { useState } from "react";

var routes = [
  {
    name: "login",
    path: "/login",
    icon: null,
    component: Login,
    roles: [],
  },
  {
    name: "signup",
    icon: null,
    path: "/signup",
    component: signUp,
    roles: [],
  },
  {
    name: "HOME",
    path: "/",
    icon: null,
    isSidebar: false,
    component: HomePage,
    roles: [],
    children: [
      {
        name: "SERVICES",
        path: "/ourservices",
        icon: null,
        component: Services,
        roles: [],
      },
      {
        name: "PRICING",
        icon: null,
        path: "/PricingPage",
        component: PricingPage,
        roles: [],
      },
      {
        name: "ABOUT",
        path: "/about",
        icon: null,
        component: About,
        roles: [],
      },
      {
        name: "HOW IT WORKS",
        path: "/how-it-works",
        icon: null,
        component: HowItWorks,
        roles: [],
      },

      {
        name: "userdashboard",
        path: "/userdashboard",
        icon: null,
        isSidebar: true,
        component: UserDashboard,
        roles: [],
      },
      {
        name: "address",
        path: "/address",
        icon: null,
        component: AddressPage,
        roles: [],
      },

      {
        name: "date",
        path: "/date",
        icon: null,
        component: DatePage,
        roles: [],
      },
      {
        name: "userprofile",
        path: "/user-profile",
        icon: null,
        component: UserProfilePage,
        roles: [],
      },
      {
        name: "contact",
        path: "/dashboard-contact-us",
        icon: null,
        component: UserDashboardContactPage,
        roles: [],
      },
      {
        name: "orderdetails",
        path: "/order-details",
        icon: null,
        component: UserOrderDetailsPage,
        roles: [],
      },
      {
        name: "clotheselected",
        path: "/ClothesSelection",
        icon: null,
        component: ClothesSelection,
        roles: [],
      },
      {
        name: "Payment",
        path: "/PaymentPage",
        icon: null,
        component: PaymentPage,
        roles: [],
      },

      {
        name: "date",
        path: "/date",
        icon: null,
        component: DatePage,
        roles: [],
      },
      {
        name: "my-order",
        path: "/my-orders",
        icon: null,
        component: Orders,
        roles: [],
      },
      {
        name: "order reciept",
        path: "/order-receipt/:orderId",
        icon: null,
        component: OrderReceipt,
        roles: [],
      },
      {
        name: "Payment history",
        path: "/PaymentHistory",
        icon: null,
        component: PaymentHistory,
        roles: [],
      },
      {
        name: "authenticate password",
        path: "/AuthenticatePaswdPage",
        icon: null,
        component: AuthenticatePaswdPage,
        roles: [],
      },
      {
        name: "new password",
        path: "/NewPaswdPage",
        icon: null,
        component: NewPaswdPage,
        roles: [],
      },
      {
        name: "reset password",
        path: "/ResetPaswdPage",
        icon: null,
        component: ResetPaswdPage,
        roles: [],
      },
      {
        name: "authenticate password",
        path: "/AuthenticatePaswdPage",
        icon: null,
        component: AuthenticatePaswdPage,
        roles: [],
      },
      {
        name: "new password",
        path: "/NewPaswdPage",
        icon: null,
        component: NewPaswdPage,
        roles: [],
      },
      {
        name: "SHOP",
        icon: null,
        path: "/shop",
        component: MarketPlace,
        roles: [],
        chiildren: [
          {
            name: "cart",
            path: "/cart",
            icon: null,
            isSidebar: true,
            component: Cart,
            roles: [],
          },
          {
            name: "singleproduct",
            icon: null,
            path: "/singleproduct",
            component: SingleProduct,
            roles: [],
          },
          {
            name: "singleproduct",
            icon: null,
            path: "/wishlist",
            component: Wishlist,
            roles: [],
          },
        ],
      },
    ],
  },
  {
    name: "dashboard",
    path: "/dashboard",
    icon: null,
    isSidebar: true,
    component: Dashboard,
    roles: [],
  },
  {
    name: "dashboard",
    path: "/dashboard",
    icon: null,
    isSidebar: true,
    path: "/dashboard",
    component: Dashboard,
    roles: [],
  },
];

export default routes;
