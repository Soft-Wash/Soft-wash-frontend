import { useEffect } from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/tableorder.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import { Link } from "react-router-dom";

function OderTable() {
  const [orders, setOrders] = useState();
  const [selectedOption, setSelectedOption] = useState("All Orders");
  const [statusSelect, setStatusSelect] = useState();
  const [statusData, setStatusData] = useState();
  const fetchData = () => {
    if (selectedOption === "All Orders") {
      axiosInstance.get("/order").then((resp) => {
        setOrders(resp.data);
      });
    } else if (selectedOption === "Daily Orders") {
      axiosInstance.get("/order/day").then((resp) => {
        setOrders(resp.data);
      });
    } else if (selectedOption === "Weekly Orders") {
      axiosInstance.get("/order/week").then((resp) => {
        setOrders(resp.data);
      });
    } else if (selectedOption === "Monthly Orders") {
      axiosInstance.get("/order/month").then((resp) => {
        setOrders(resp.data);
      });
    }
  };

  const handleSelectChange = (e) => {
    if (e.target.name.startsWith("statusOrder")) {
      setStatusSelect(e.target.value);
    } else {
      setSelectedOption(e.target.value);
    }
  };

  useEffect(() => {
    fetchData();
    getOrderStatus();
  }, [selectedOption, statusSelect]);

  const getOrderStatus = () => {
    axiosInstance.get(`/order/status?status=${statusSelect}`).then((resp) => {
      console.log(statusSelect);
      console.log(resp.data);
      setStatusData(resp.data);
    });
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "order placed":
        return "order-placed";
      case "Received":
        return "received-color";
      case "Cleaning":
        return "Cleaning-color";
      case "Confirmed":
        return "confirmed-color";
      case "Shipped":
        return "shipped-color";
      case "Ready":
        return "ready-color";
      case "Delivered":
        return "delivered-color";

      default:
        return "";
    }
  };

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="ordertable-div">
          <div>
            <select
              name="statusOrder"
              className="select-dropdown2"
              id=""
              onChange={handleSelectChange}
            >
              <option value="" hidden>
                Select Order Status
              </option>
              <option value="order placed">ORDER PLACED</option>
              <option value="Confirmed">CONFIRMED</option>
              <option value="Received">RECEIVED</option>
              <option value="Cleaning">CLEANING</option>
              <option value="Ready">READY</option>
              <option value="Shipped">SHIPPED</option>
              <option value="Delivered">DELIVERED</option>
            </select>
          </div>
          <table className="ordertbale-content-table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Branch</th>
                <th>Customer</th>
                <th>Addresss</th>
                <th>SubTotal</th>
                <th>Status</th>
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
                    <th>{item._id.substring(0, item._id.length / 2)}</th>
                    <th>{item?.branch_id?.name}</th>
                    <th>{item?.customer_id?.fullName}</th>
                    <th>{item?.deliveryAddress[0]?.FullAddress}</th>
                    <th>{item?.subtotal}</th>
                    <th className="allorders-status-th">
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
                        <Link to={`/adminsingleorder/${item._id}`}>
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
  );
}

export default OderTable;
