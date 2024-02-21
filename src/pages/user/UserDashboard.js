import Sidebar from "../../components/OrdersPage/Sidebar";
import { FaClipboardList, FaListAlt } from "react-icons/fa";
import "../../styles/UserDashboard.css";
import "../../styles/DashboardContact.css";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import axios from "axios";
import UserSidebarTablet from "../../components/UserSidebarTablet";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserDashboard() {
  const [orders, setOrders] = useState();
  const [paymentLength, setpaymentLength] = useState();

  const GetUserOrders = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/${userId._id}/allorders`)
      .then((resp) => {
        setOrders(resp.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const getPayment = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/payments/all/userpayments`, {
        params: { id: userId._id },
      })
      .then((resp) => {
        console.log(resp.data);
        setpaymentLength(resp.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });;
  };

  useEffect(() => {
    getPayment();
    GetUserOrders();
  }, []);

  return (
    <div>
      <ToastContainer position="top-center" />
      <div>
        <UserSidebarTablet />
      </div>
      <div className="d-flex">
        <div className="user-sidebar-div">
          <Sidebar />
        </div>
        <div className="userdash-container">
          <h3>Dashboard</h3>
          <hr />
          <div className="userdash_grid_container">
            <div className="icon-container mb-3">
              <div className="userdash-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="userdash-innerd2">
                <p>Orders</p>
                <p>{orders?.length}</p>
              </div>
            </div>
            <div className="icon-container mb-3">
              <div className="userdash-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="userdash-innerd2">
                <p>Payments</p>
                <p>{paymentLength?.length || 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
