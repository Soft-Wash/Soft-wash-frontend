import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/CreateLeave.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";

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
    axiosInstance.post(`/expense/update`).then((resp) => {
      console.log(resp.data);
      setCreateLeaveData(resp.data);
    });
  };

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="createleave-container-innerd">
          <h3>Create Leave</h3>
          <hr className="expenses-hr" />
          <div className="createLeave-content">
            <div className="createleave-details-div">
              <div className="createleave-details-div-header">
                <p> Expenses Details</p>
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
                    Reasons <br />
                    <br />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="createleave-note-div-textarea"
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
