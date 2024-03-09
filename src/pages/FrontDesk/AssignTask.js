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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <div className="w-100  p-4" style={{height:"85dvh"}}>
          <h4 className="ps-2 pt-2">Assign order</h4>
          <hr className="addtask-hr" />
          <div className="rounded border pb-4">
              <div className="bg-info rounded-top ps-2 py-2 pb-0 fs-4 text-white fw-semibold">
                <p> Task form</p>
              </div>
              <div className=" w-100 mx-auto  p-4">
                <Row  className="  w-100 justify-content-between">
                  <Col lg={5}>
                   <label htmlFor="" className="w-100">
                    Employees <br />
                    <select
                      name="employee_id"
                      id=""
                      className=" border border-secondary rounded w-100 p-2"
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
                  </Col>
                  <Col lg={5}>
                  <label htmlFor="" className="w-100">
                    Orders <br />
                    <select
                      name="order_id"
                      id=""
                      className=" border border-secondary rounded w-100 p-2"
                      onChange={HandleTask}
                    >
                      <option value="" hidden>
                        Select order
                      </option>
                      {allOrders &&
                        allOrders.map((item) => (
                          <option value={item._id}>{item._id}</option>
                        ))}
                    </select>
                  </label>
                  </Col>
                </Row>
                <Row  className="  w-100 justify-content-between">
                  <Col lg={5}>
                  <label htmlFor="" className="w-100">
                    Start Date <br />
                    <input
                      className=" border border-secondary rounded w-100 p-2"
                      type="date"
                      name="startDate"
                      onChange={HandleTask}
                    />
                  </label>
                  </Col>
                  <Col lg={5}>
                  <label htmlFor="" className="w-100">
                    End Date <br />
                    <input
                      className=" border border-secondary rounded w-100 p-2"
                      type="date"
                      name="endDate"
                      onChange={HandleTask}
                    />
                  </label>
                  </Col>
                </Row>
                <Row>
                <Col lg={5}>
                   <label htmlFor="" className="w-100">
                    Task Type <br />
                    <select
                      name="taskType"
                      id=""
                      className=" border border-secondary rounded w-100 p-2"
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
                  </Col>
                </Row>
                
                <div className="`note-div  w-100">
                  <label htmlFor="" className="w-100">
                    Note <br />
                    <textarea
                      className="w-100 h-3 border border-secondary rounded note-text"
                      name="note"
                      id=""
                      rows="5"
                      onChange={HandleTask}
                    ></textarea>
                  </label>
                </div>
              </div>

            <button
              type="button"
              className={` btn btn-md btn-info rounded ms-3`}
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
