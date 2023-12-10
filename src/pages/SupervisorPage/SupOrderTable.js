import { useEffect } from "react";
import SupervisorSideBar from "../../components/SupervisorComponents/SupervisorSideBar";
import "../../styles/SupervisorStyles/Supordertable.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import { Link } from "react-router-dom"

function SupOrderTable() {
  const [orders, setOrders] = useState();
  const [selectedOption, setSelectedOption] = useState("All Orders");
  const [statusSelect, setStatusSelect] = useState();
  const [statusData, setStatusData] = useState();



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

//   const targetBranchId = '655debc4ec7b0b6e0f591bf7';


  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [selectedOption]);


  const getStatusColorClass = (status) => {
    switch (status) {
      case 'order placed':
        return 'order-placed';
      case 'Received':
        return 'received-color';
      case 'Cleaning':
        return 'Cleaning-color';
      case 'Confirmed':
          return 'confirmed-color';  
      case 'Shipped':
            return 'shipped-color'; 
      case 'Ready':
            return 'ready-color'
      case 'Delivered':
            return 'delivered-color'          

      default:
        return ''; 
    }
  };

  return (
    <div>
      <div className="d-flex">
        <SupervisorSideBar />
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
                <th>Date Ordered</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
              {orders &&
                orders
                
                .map((item) => (
                  <tr key={item._id}>
                    <th>{item._id.substring(0, item._id.length / 2)}</th>
                    <th>{item?.branch_id?.name}</th>
                    <th>{item?.customer_id?.fullName}</th>
                    <th>{item?.deliveryAddress[0]?.FullAddress}</th>
                    <th>{item?.subtotal}</th>
                    <th className="allorders-status-th">
                      <button className={`status-button ${getStatusColorClass(item?.status)}`}> {item?.status}</button>
                      </th>
                    <th>{item?.date_created}</th>
                      <th>
                      <div className="d-flex">
                        <Link to={`/SupSingleOrder/${item._id}`}>
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

export default SupOrderTable;
