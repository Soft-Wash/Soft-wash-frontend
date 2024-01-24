import WorkFlowSideBar from "../../components/Admin/WorkFlowSideBar";
import "../../styles/SupervisorStyles/SupTaskTable.css"
import {useEffect,useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios";
import SupervisorSideBar from "../../components/SupervisorComponents/SupervisorSideBar";

function SupTaskTable(){

  const [orders, setOrders] = useState();
  const [selectedOption, setSelectedOption] = useState("pending");
  const [statusSelect, setStatusSelect] = useState();
  const [statusData, setStatusData] = useState();


  const handleSelectChange = (e) => {
    if (e.target.name.startsWith("statusOrder")) {
      setStatusSelect(e.target.value);
    } else {
      setSelectedOption(e.target.value);
    }
  };

  useEffect(() => {
    getOrderStatus();
  }, [statusSelect]);

  const getOrderStatus = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/task/status?status=${statusSelect}`).then((resp) => {
      console.log(resp.data);
      setStatusData(resp.data);
    });
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "pending":
        return "order-placed";
      case "inprogress":
        return "Cleaning-color";
      case "Completed":
        return "shipped-color";
      default:
        return "";
    }
  };

  return(
    <div>
      <div className="d-flex">
        <SupervisorSideBar/>
        <div className="tasktable-div">
          <h4 className="mb-4">Task Table</h4>
          <hr className="dashboard-line mb-5" />
          <div>
            <select
              name="statusOrder"
              className="task-select-dropdown2"
              id=""
              onChange={handleSelectChange}
            >
              <option value="" hidden>
                Select Order Status
              </option>
              <option value="pending">Pending</option>
              <option value="inprogress">Inprogress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <table className="tasktbale-content-table">
            <thead>
              <tr>
                <th>Task Id</th>
                <th>Order Id</th>
                <th>Customer</th>
                <th>Employee</th>
                <th>StartDate</th>
                <th>EndDate</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {statusData?.length<1 ? (
                <tr>
                  <td colSpan="6" className="no-data-message">
                    No data available
                  </td>
                </tr>
              ) : (
                statusData &&
                statusData.map((item) => (
                  <tr key={item._id}>
                    <th>{item?._id?.substring(0, item?._id?.length / 2)}</th>
                    <th>
        {item?.order_id?.map((orderId) => (
          <div key={orderId._id}>
            {orderId?._id?.substring(0, orderId?._id?.length / 2)}
          </div>
        ))}
      </th>
                    <th>{item?.order_id?.customer_id?.fullName}</th>
                    <th>{item?.employee_id?.fullName}</th>
                    <th>{new Date(item?.startDate).toLocaleDateString('en-Gb',{day:'numeric',month:'short',year:'numeric'})}</th>
                    <th>{new Date(item?.endDate).toLocaleDateString('en-Gb',{day:'numeric',month:'short',year:'numeric'})}</th>
                    <th className="tasktbale-status-th">
                      <button
                        className={`status-button ${getStatusColorClass(
                          item?.status
                        )}`}
                      >
                        {" "}
                        {item?.status}
                      </button>
                    </th>
                    <th>
                      <div className="d-flex">
                        <Link to={`/SupSingleTask/${item._id}`}>
                          <button className="action-buttons-btn1">View</button>
                        </Link>

                        <button className="action-buttons-btn2">Print</button>
                      </div>
                    </th>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SupTaskTable;