import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/ExpenseReport.css"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react"
import axios from "axios";
import SupervisorSideBar from "../../components/SupervisorComponents/SupervisorSideBar";


function ExpenseReportSup(){

  const [epenseReport,setEpenseReport]=useState()
const [reporData,setReporData] = useState({})

const HandleSalesReport=(e)=>{
  const value = e.target.value

  setReporData({...reporData, [e.target.name]:value})
  
}

console.log(reporData)

const SubmitDates = () => {

  const { startDate, endDate} = reporData;
  console.log(reporData)

  axios.get(`${process.env.REACT_APP_BASE_URL}/expense/report/expense`, {
    params: {
      startDate,
      endDate
    },
  })
  .then((resp) => {
    console.log(resp.data);
    setEpenseReport(resp.data);
  })
  .catch((error) => {
    console.error(error);
  });
};



  return(
    <div>
            <ToastContainer position="top-center" />
      <div className="d-flex">
        <SupervisorSideBar />
        <div className="expense-report-container">
          <div className="expense-report-contianer-innerd1">
            <h3>Expense report</h3>
            <hr className="expenses-hr" />
            <div className="expense-form-background">
              <div className="expense-form-content">
                <div className="expense-form-details-div-header">
                  <p> Expenses Details</p>
                </div>
                <div className="expense-form-data">
                  <label htmlFor="" className="expense-form-data-label1">
                    Start Date <br />
                    <input className="expense-form-data-inpt1" type="date" name="startDate" onChange={HandleSalesReport}/>
                  </label>
                  <label htmlFor="" className="expense-form-data-label2">
                    End Date <br />
                    <input className="expense-form-data-inpt2" type="date" name="endDate" onChange={HandleSalesReport} />
                  </label>
                </div>
              </div>
              <button className="order-Sort-button" onClick={SubmitDates}>Submit</button>
            </div>
            <div className="sales-table-content">
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
                <table className="expense-content-table">
                  <thead>
                    <tr>
                      <th>orderId</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Tax</th>
                      <th>Payment Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {epenseReport?.length<1?(
    <tr>
    <td colSpan="6" className="no-data-message">No data available</td>
  </tr>
                    ) :(epenseReport && epenseReport.map((item)=>(
                    <tr key={item._id}>
                    <th>{item?._id.substring(0,item?._id?.length/2)}</th>
                    <th>{new Date(item?.date)?.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</th>
                    <th>{item?.amount}</th>
                    <th>{item?.tax_include}</th>
                    <th>{item?.payment_method}</th>
                  </tr>
                    )))}

                  </tbody>
                </table>
                <p>showing 1 0f 1 of 1 entries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseReportSup;