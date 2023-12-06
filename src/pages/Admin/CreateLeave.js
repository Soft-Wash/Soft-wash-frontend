import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/CreateLeave.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateLeave() {
  const [createLeaveData, setCreateLeaveData] = useState();
  const [leaveData, setLeaveData] = useState({
    branch_id: "655deba5ec7b0b6e0f591bf5",
    employee_id: "655e4c5f75d1ab511ff18f18",
  });

  const HandleLeave = (e) => {
    const value = e.target.value;

    setLeaveData({ ...leaveData, [e.target.name]: value });
  };

  const postExpense = () => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/leave/create`,leaveData)
    .then((resp) => {
      console.log(resp.data);
      setCreateLeaveData(resp.data);
      toast.success('Application succesful')
    });
  };

  return (
    <div>
       <ToastContainer position="top-center" />
      <div className="d-flex">
        <AdminSidebar />
        <div className="createleave-container-innerd">
          <h3>Create Leave</h3>
          <hr className="expenses-hr" />
          <div className="createLeave-content">
            <div className="createleave-details-div">
              <div className="createleave-details-div-header">
                <p> Leave Form</p>
              </div>
              <div className="createleave-details-div-form">
                <div className="createleave-details-div-form-innerd1">
                  <label htmlFor="">
                    Customer Name
                    <br />
                    <input
                      type="text"
                      name="fullName"
                      className="createleave-details-div-form-innerd1-inpt1"
                      onChange={HandleLeave}
                      placeholder="Customer Name"
                    />
                  </label>
                  <label htmlFor="" className="leavetype-label">
                    Leave Type
                    <br />
                    <select
                      type="text"
                      name="leaveType"
                      className="createleave-details-div-form-innerd1-inpt2"
                      onChange={HandleLeave}
                      placeholder="Customer Name"
                    >
                      <option value="sick">Sick</option>
                      <option value="annual">Annual</option>
                      <option value="wedding">Wedding</option>
                      <option value="patarnity">Patarnity</option>
                      <option value="matarnity">Matarnity</option>

                    </select>
                  </label>
                </div>
                <div className="createleave-details-div-form-innerd2">
                  <label htmlFor="">
                    Start Date <br />
                    <input
                      type="date"
                      name="startDate"
                      className="createleave-details-div-form-innerd1-inpt2"
                      onChange={HandleLeave}
                    />
                  </label>
                  <label htmlFor="" className="checkbox-label2">
                    End Date <br />
                    <input
                      type="date"
                      name="endDate"
                      className="createleave-details-div-form-innerd1-inpt2"
                      onChange={HandleLeave}
                    />
                  </label>
                </div>

                <div className="createleave-note-div">
                  <label htmlFor="">
                    Reasons 
                    <br />
                    <textarea
                      name="reasons"
                      id=""
                      cols="30"
                      rows="10"
                      className="createleave-note-div-textarea"
                      onChange={HandleLeave}
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>

            <button className="submit-button" onClick={postExpense}>
              Sumit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateLeave;
