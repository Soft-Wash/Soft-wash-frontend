import AdminSideBar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/PayRoll.css";
import { FaClipboardList, FaListAlt } from "react-icons/fa";
import { axiosInstance } from "../../services/AxiosInstance";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function PayRoll() {
  const [monthlyPR, setMonthlyPR] = useState([]);
  const [prData, setPrData] = useState();
  const [employees, setEmployees] = useState();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthIndex = new Date().getMonth();
  const [amount, setAmount] = useState();

  const getMinthlyPr = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/payroll/payroll/current-month`)
      .then((resp) => {
        setMonthlyPR(resp.data);
      });
  };

  const getEmployee = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/employees/`).then((resp) => {
      setEmployees(resp.data);
    }).catch((error)=>{
      console.log(error)
    });
  };

  const handleInputs = (e) => {
    const value = e.target.value;
    setPrData({ ...prData, [e.target.name]: value });
  };
  
  const CreatePayRoll = () => {
    const formData = new FormData;
    formData.append("user_id",prData.user_id)
    formData.append("month",prData.month)
    formData.append("payment_type",prData.payment_type)
    formData.append("img",prData.img)
    formData.append("amount",prData.amount)  
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/payroll/payroll/create`, formData)
      .then((resp) => {
        toast.success("payment succesfull");
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.data?.code === 400) {
          toast.error(error?.response?.data?.msg);
        }
      });
  };

  const getAmount = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/payroll/`).then((resp) => {
      const amountPrice = resp.data.map((amount) => amount.amount);
      const total = amountPrice.reduce((acc, curr) => acc + curr, 0);
      setAmount(total);
    });
  };

  useEffect(() => {
    getMinthlyPr();
    getEmployee();
    getAmount();
  }, []);

  return (
    <div>
      <ToastContainer position="top-center" />
      <div className="d-flex">
        <AdminSideBar />
        <div className="payroll_content">
          <h3>Pay Roll</h3>
          <hr className="payroll_hr" />
          <div className="cart_container">
            <div className="Card_div mb-3">
              <div className="Card_div_innerd1">
                <FaClipboardList className="clipboard_card_icon" />
              </div>
              <div className="Card_div_innerd2">
                <Link to="/payrolltable">
                  <p>Current_Month</p>
                </Link>

                <p>{monthlyPR?.length || 0}</p>
              </div>
            </div>
            <div className="Card_div mb-3">
              <div className="Card_div_innerd1">
                <FaClipboardList className="clipboard_card_icon" />
              </div>
              <div className="Card_div_innerd2">
                <p>Amount</p>
                <p>{amount || 0}</p>
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
                      name="user_id"
                      className="payroll_details_div_form_innerd1_inpt2"
                      onChange={handleInputs}
                      placeholder="Employee Name"
                    >
                      <option value="" hidden>
                        Select Employee{" "}
                      </option>
                      {employees &&
                        employees.map((item) => (
                          <option value={item?._id}>{item?.fullName}</option>
                        ))}
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
                      <option value="" hidden>
                        Select Month
                      </option>
                      <option value={months[currentMonthIndex]}>
                        {months[currentMonthIndex]}
                      </option>
                    </select>
                  </label>
                </div>
                <div className="payroll_details_div_form_innerd2">
                  <label htmlFor="">
                    Amount <br />
                    <input
                      type="text"
                      name="amount"
                      className="payroll_details_div_form_innerd1_inpt1"
                      onChange={handleInputs}
                    />
                  </label>
                  <label htmlFor="" className="leavetype-label">
                    Payment Type <br />
                    <select
                      type="text"
                      name="payment_type"
                      className="payroll_details_div_form_innerd1_inpt2"
                      onChange={handleInputs}
                      placeholder="Month"
                    >
                      <option value="" hidden>
                        Select Payment Type
                      </option>
                      <option value="wire_transfer">
                        Wire Transfer
                      </option>
                      <option value="cheque">
                      Cheque
                      </option>
                      <option value="cash">
                      Cash
                      </option>
                    </select>
                  </label>
                </div>
                <div className="payroll_details_div_form_innerd2">
                <label htmlFor="">
                    Payment Proof <br />
                    <input
                      type="file"
                      name="img"
                      className="payroll_details_div_form_innerd1_inpt1"
                      onChange={handleInputs}
                    />
                  </label>
                </div>


              </div>
            </div>

            <button className="submit-button" onClick={() => CreatePayRoll()}>
              Sumit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayRoll;
