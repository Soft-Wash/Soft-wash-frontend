import Sidebar from "../../components/OrdersPage/Sidebar";
import "../../styles/PaymentHistory.css";
import { axiosInstance } from "../../services/AxiosInstance";
import {useState,useEffect} from "react"
import axios from "axios";

function PaymentHistory() {

  const [paymentHistory,setPaymentHistory]= useState()
  const [status,setstatus]=useState()

useEffect(()=>{
  const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
  console.log(userId._id)
  axios.get(`${process.env.REACT_APP_BASE_URL}/payments/${userId._id}/userpayments`,{status:status})
  .then((resp)=>{
    console.log(resp.data)
    setPaymentHistory(resp.data)
  })
},[status])

const HandleSelectTag=(e)=>{
  const value = e.target.value;
  setstatus(value)
}

console.log(status)

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
              onChange={(e)=>HandleSelectTag(e)}
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
                <th>Order Id</th>
                <th>Branch</th>
                <th>Customer</th>
                <th>Addresss</th>
                <th>SubTotal</th>
                <th>Payment Status</th>
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
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
