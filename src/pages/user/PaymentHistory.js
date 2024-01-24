import Sidebar from "../../components/OrdersPage/Sidebar";
import "../../styles/PaymentHistory.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState, useEffect } from "react";
import axios from "axios";

function PaymentHistory() {
  const [paymentHistory, setPaymentHistory] = useState();
  const [status, setstatus] = useState();

  const HandleSelectTag = (e) => {
    const value = e.target.value;
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    console.log(userId._id);
    console.log(value);

    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/payments/userpayments/transaction`,
        {
          params: { id: userId._id, status: value },
        }
      )
      .then((resp) => {
        console.log(status);
        console.log(resp.data);
        setPaymentHistory(resp.data);
      });
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "pending":
        return "pending-color";
      case "success":
        return "success-color";
      case "failed":
        return "failed-color";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="d-flex">
        <Sidebar />
        <div className="payment-content">
          <div>
            <select
              name="statusOrder"
              className="select-dropdown02"
              id=""
              onChange={(e) => HandleSelectTag(e)}
            >
              <option value="" hidden>
                Select Payment Status
              </option>
              <option value="pending">Pending</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <table className="payment-content-table">
            <thead>
              <tr>
                <th>Ref </th>
                <th>Email</th>
                <th>Fullname</th>
                <th>Channel</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory?.length < 1 ? (
                <tr>
                  <td colSpan="6" className="no-data-message">
                    No data available
                  </td>
                </tr>
              ) : (
                paymentHistory &&
                paymentHistory.map((item) => (
                  <tr key={item._id}>
                    <th>{item?.reference}</th>
                    <th>{item?.email}</th>
                    <th>{item?.user_id?.fullName}</th>
                    <th>{item?.channel}</th>
                    <th>{item?.amount}</th>
                    <th className="payment-content-status-th">
                      <button className={`action-buttons-btn1 ${getStatusColorClass(item.status)}`}>
                        {item.status}
                      </button>
                    </th>
                    <th className="payment-content-status-th">
                      <button className="action-buttons-btn1">View</button>
                    </th>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
