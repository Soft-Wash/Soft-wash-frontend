import Sidebar from "../../components/OrdersPage/Sidebar";
import "../../styles/PaymentHistory.css";
import { axiosInstance } from "../../services/AxiosInstance";
import {useState,useEffect} from "react"

function PaymentHistory() {

  const [paymentHistory,setPaymentHistory]= useState()


const userId = JSON.parse(localStorage.getItem('Userid'))
  axiosInstance.get(`/payment/${userId}/userpayments`)
  .then((resp)=>{
    console.log(resp.data)
    setPaymentHistory(resp.data)
  })

  return (
    <div>
      <div className="d-flex">
        <Sidebar />
        <div className="payment-content">
          <div>
            <select
              name="statusOrder"
              className="select-dropdown2"
              id=""
              // onChange={handleSelectChange}
            >
              <option value="" hidden>
                Select Payment Status
              </option>
              <option value="order placed">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Received">Failed</option>
            </select>
          </div>
          <table className="payment-content-table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Branch</th>
                <th>Customer</th>
                <th>Addresss</th>
                <th>SubTotal</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                  <td colSpan="6" className="no-data-message">
                    No data available
                  </td>
                </tr> */}

              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th className="payment-content-status-th">
                  <button className="status-button"></button>
                </th>
                <th>
                  <div className="action-btn-div d-flex">
                    <button className="action-buttons-btn1">Pending</button>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
