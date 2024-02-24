import WorkFlowSideBar from "../../components/Admin/WorkFlowSideBar";
import "../../styles/Admin/CreateTask.css";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Sidebar from "../../components/FrontDesk/Sidebar";
import DashNav from "../../components/FrontDesk/DashNav";
import { useNavigate } from "react-router-dom";

export default function FrontdeskAssignTask() {
  const [taskDetails, setTaskDetails] = useState({});
  const [orders, setorders] = useState();
  const [employees, setEmployees] = useState();
  const [allOrders, setAllOrders] = useState();
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/status?status=order placed`)
      .then((resp) => {
        setAllOrders(resp.data);
      });
    axios.get(`${process.env.REACT_APP_BASE_URL}/employees/washmen`).then((resp) => {
      //   console.log(resp.data);
      setEmployees(resp.data);
    });
  }, []);

  const HandleTask = (e) => {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files[0]
        : e.target.value;

    setTaskDetails((prevState) => {
      if (e.target.name === "order_id") {
        const existingOrderIds = prevState?.order_id || [];
        const newOrderIds = [...existingOrderIds, value];

        return { ...prevState, order_id: newOrderIds };
      }

      return { ...prevState, [e.target.name]: value };
    });
  };

  //   console.log(taskDetails);

  const CreateTask = () => {
    setClicked(true);
    axiosInstance.post("/task/create", taskDetails).then((resp) => {
      console.log(resp.data);

      toast.success("Task created succesful");
      setTimeout(() => {
        navigate("/frontdesk/dash");
      }, 5000);
    });
  };

  return (
    <div>
      <ToastContainer position="top-center" />
      <DashNav />
      <div className="d-flex">
        <Sidebar />
        <div className="new-task-container-innerd ">
          <h4>Create Task</h4>
          <hr className="addtask-hr" />
          <div className="addtask-table-content rounded">
            <div className="addtask-details-div rounded">
              <div className="task-details-div-header rounded-top">
                <p> Task form</p>
              </div>
              <div className="task-details-div-form">
                <div className="task-details-div-form-innerd1">
                  <label htmlFor="">
                    Employees <br />
                    <select
                      name="employee_id"
                      id=""
                      className="task-details-div-form-innerd1-selct1"
                      onChange={HandleTask}
                    >
                      <option value="" hidden>
                        Select Employee
                      </option>
                      {employees &&
                        employees.map((item) => (
                          <option value={item._id}>
                            {item.fullName} {item?.role?.name}
                          </option>
                        ))}
                    </select>
                  </label>
                  <label htmlFor="" className="order-label">
                    Orders <br />
                    <select
                      name="order_id"
                      id=""
                      className="task-details-div-form-innerd1-selct1"
                      onChange={HandleTask}
                    >
                      <option value="" hidden>
                        Select category
                      </option>
                      {allOrders &&
                        allOrders.map((item) => (
                          <option value={item._id}>{item._id}</option>
                        ))}
                    </select>
                  </label>
                </div>
                <div className="task-details-div-form-innerd2">
                  <label htmlFor="" className="">
                    Start Date <br />
                    <input
                      className="form-data-inpt2"
                      type="date"
                      name="startDate"
                      onChange={HandleTask}
                    />
                  </label>
                  <label htmlFor="" className="order-label">
                    End Date <br />
                    <input
                      className="form-data-inpt2"
                      type="date"
                      name="endDate"
                      onChange={HandleTask}
                    />
                  </label>
                </div>
                <div className="task-details-div-form-innerd2">
                  <label htmlFor="">
                    Task Type <br />
                    <select
                      name="taskType"
                      id=""
                      className="task-details-div-form-innerd1-selct1"
                      onChange={HandleTask}
                    >
                      <option value="" hidden>
                        Select Task Type
                      </option>
                      <option value="washing">Washing</option>
                      <option value="ironing">Ironing</option>
                      <option value="folding">Folding</option>
                      <option value="Delivery">Delivery</option>
                    </select>
                  </label>
                </div>

                <div className="`note-div">
                  <label htmlFor="">
                    Note <br />
                    <textarea
                      className="note-div-textarea"
                      name="note"
                      id=""
                      cols="30"
                      rows="10"
                      onChange={HandleTask}
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="button"
              className={`submit-button`}
              {...(clicked === true ?{ disabled: true} : null)}
              onClick={CreateTask}
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
