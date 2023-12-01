import { useEffect } from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/tableorder.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import { Link } from "react-router-dom"

function OderTable() {
  const [orders, setOrders] = useState();
  const [selectedOption, setSelectedOption] = useState("All Orders");




  const fetchData = () => {
    if (selectedOption === "All Orders") {
      axiosInstance.get("/order").then((resp) => {
        setOrders(resp.data);
      });
    } else if(selectedOption==="Daily Orders"){
      axiosInstance.get("/order/day").then((resp) => {
        setOrders(resp.data);
      });
    } else if(selectedOption==="Weekly Orders"){
      axiosInstance.get("/order/week").then((resp) => {
        setOrders(resp.data);
        
      });
    } else if(selectedOption==="Monthly Orders"){
      axiosInstance.get("/order/month").then((resp) => {
        setOrders(resp.data);
      });
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="ordertable-div">
          <div>
            <select name="" className="select-dropdown" id="" onChange={handleSelectChange}>
            <option value="All Orders">All Order</option>
              <option value="Daily Orders">
                Daily Order
              </option>
              <option value="Weekly Orders">Weekly Order</option>
              <option value="Monthly Orders">Monthly Order</option>
              <option value="Yearly Orders">Yearly Order</option>
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
              {orders &&
                orders.map((item) => (
                  <tr key={item._id}>
                    <th>{item._id.substring(0, item._id.length / 2)}</th>
                    <th>{item?.branch_id?.name}</th>
                    <th>{item?.customer_id?.fullName}</th>
                    <th>{item?.deliveryAddress[0]?.FullAddress}</th>
                    <th>{item?.subtotal}</th>
                    <th className="allorders-status-th">
                      <button> {item?.status}</button>
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
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OderTable;
