import AdminSideBar from "../../components/Admin/AdminSidebar"
import "../../styles/Admin/PayRoll.css"
import { FaClipboardList, FaListAlt } from "react-icons/fa";
import { axiosInstance } from "../../services/AxiosInstance";
import {useEffect,useState} from "react"
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PayRoll(){
const [monthlyPR,setMonthlyPR]=useState([])
const [prData,setPrData]=useState()

const getMinthlyPr=()=>{
  axios.get(`${process.env.REACT_APP_BASE_URL}/payroll/payroll/current-month`)
  .then((resp)=>{
    console.log(resp.data)
    setMonthlyPR(resp.data)
})
}
const handleInputs=(e)=>{
  const value = e.target.value
  setPrData({ ...prData, [e.target.name]:value})
}

console.log(prData)



useEffect(()=>{
  getMinthlyPr()
},[])


  return(
    <div>
             <ToastContainer position="top-center" />
      <div className="d-flex">
      <AdminSideBar/>
      <div className="payroll_content">
        <h3>Pay Roll</h3>
        <hr className="payroll_hr"/>
        <div className="cart_container">
        <div className="Card_div mb-3">
              <div className="Card_div_innerd1">
                <FaClipboardList className="clipboard_card_icon" />
              </div>
              <div className="Card_div_innerd2">
                <p>Current_Month</p>
                <p>{monthlyPR?.length || 0}</p>
              </div>
            </div>
            <div className="Card_div mb-3">
              <div className="Card_div_innerd1">
                <FaClipboardList className="clipboard_card_icon" />
              </div>
              <div className="Card_div_innerd2">
                <p>Amount</p>
                <p>0</p>
              </div>
            </div>
        </div>
        <div className="payroll_content">
            <div className="createleave-details-div">
              <div className="createleave-details-div-header">
                <p> PayRoll Form</p>
              </div>
              <div className="payroll_details_div_form">
                <div className="payroll_details_div_form_innerd1">
                  <label htmlFor="">
                  Employee Name
                    <br />
                    <select
                      type="text"
                      name="User_id"
                      className="payroll_details_div_form_innerd1_inpt2"
                      onChange={handleInputs}
                      placeholder="Employee Name"
                    >
                      <option value="" hidden>Select Employee </option>
                      <option value="annual">Annual</option>

                    </select>
                  </label>
                  <label htmlFor="" className="leavetype-label">
                     Month
                    <br />
                    <select
                      type="text"
                      name="month"
                      className="payroll_details_div_form_innerd1_inpt2"
                      onChange={handleInputs}
                      placeholder="Month"
                    >
                      <option value="sick">Sick</option>

                    </select>
                  </label>
                </div>
                <div className="payroll_details_div_form_innerd2">
                  <label htmlFor="">
                    Amount  <br />
                    <input
                      type="text"
                      name="startDate"
                      className="payroll_details_div_form_innerd1_inpt1"
                      onChange={handleInputs}
                    />
                  </label>
                </div>
              </div>
            </div>

            <button className="submit-button" >
              Sumit
            </button>
          </div>

      </div>
      </div>

    </div>
  )
}

export default PayRoll;