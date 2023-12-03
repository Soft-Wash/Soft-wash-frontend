import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/OrderReport.css";
import { useState } from "react";
import axios from "axios";

function OrderReport() {

  const [orderReportData,setOrderReportData]=useState()
const [reporData,setReporData] = useState({})

const HandleSalesReport=(e)=>{
  const value = e.target.value

  setReporData({...reporData, [e.target.name]:value})
  
}


const SubmitDates = () => {


  const { startDate, endDate, status } = reporData;

  axios.get(`${process.env.REACT_APP_BASE_URL}/order/laundry/sales/report`, {
    params: {
      startDate,
      endDate,
      status
    },
  })
  .then((resp) => {
    console.log(resp.data);
    setOrderReportData(resp.data);
  })
  .catch((error) => {
    console.error(error);
  });
};


  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="order-report-container">
          <div className="order-report-contianer-innerd1">
            <h3>Order report</h3>
            <hr className="expenses-hr" />
            <div className="order-form-background">
              <div className="order-form-content">
                <div className="order-form-details-div-header">
                  <p> Expenses Details</p>
                </div>
                <div className="order-form-data">
                  <label htmlFor="" className="order-form-data-label1">
                    Start Date <br />
                    <input className="order-form-data-inpt1" type="date"  name="startDate" onChange={HandleSalesReport} />
                  </label>
                  <label htmlFor="" className="order-form-data-label2">
                    End Date <br />
                    <input className="order-form-data-inpt2" type="date" name="endDate" onChange={HandleSalesReport} />
                  </label>
                  <label htmlFor="" className="order-form-data-label3">
                    Status <br />
                    <select name="status" className="order-form-data-inpt3" id="" onChange={HandleSalesReport}>
                      <option value="" hidden>Select Order Status</option>
                      <option value="order placed">ORDER PLACED</option>
                      <option value="Confirmed">CONFIRMED</option>
                      <option value="Received">RECEIVED</option>
                      <option value="Cleaning">CLEANING</option>
                      <option value="Ready">READY</option>
                      <option value="Shipped">SHIPPED</option>
                      <option value="Delivered">DELIVERED</option>
                    </select>
                  </label>
                </div>
              </div>
              <button className="order-Sort-button" onClick={SubmitDates}>Submit</button>
            </div>
            <div className="order-table-content">
              <div className="show-container">
                <p className="show-container-p1">Show</p>
                <select name="" id="">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <p className="show-container-p2">entries</p>
              </div>
              <div className="table-content">
                <table className="order-content-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Order#</th>
                      <th>Customer</th>
                      <th>Order Amount</th>
                      <th>Status</th>
                      <th>Gross Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderReportData && orderReportData.map((item)=>(
                  <tr key={item?._id}>
                  <th>{item?.date_created}</th>
                  <th>{item?._id.substring(0,item?._id.length/2)}</th>
                  <th>{item?.customer_id.fullName}</th>

                  <th>{item?.subtotal}</th>
                  <th>{item?.status}</th>
                  <th>{item?.subtotal}</th>
                </tr>
                    ))}
  
                  </tbody>
                </table>
                <p>showing 1 0f 1 of 1 entries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderReport;
