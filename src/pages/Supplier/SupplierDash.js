import SupplierSideBar from "../../components/Supplier/SupplierSideBar";
import React from 'react';
import "../../styles/Admin/AdminDashboard.css";
import { FaClipboardList, FaListAlt } from "react-icons/fa";
import { axiosInstance } from '../../services/AxiosInstance';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function SupplierDash (){
  const [supplies, setSupplies] = useState([]);
  // const [dayorder, setdayorder] = useState();

  // Fetch all supplies from your API endpoint
useEffect(() => {
  axiosInstance
    .get('http://localhost:8003/supplies/')
    .then((response) => setSupplies(response.data))
    .catch((error) => console.error('Error fetching items:', error));
}, []);



    return(
        <div>
        <div className="d-flex">
        <SupplierSideBar />
        <div className="admin-container">
          <h4 className="">Supplier Dashboard </h4>
          <hr className="dashboard-line" />
          <div className="category-container">
            <div className="icon-container mb-3">
              <div className="icon-container-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="icon-container-innerd2">
                <p>-------</p>
                {/* <p>{Employees?.length}</p> */}
              </div>
            </div>

            <div className="icon-container mb-3">
              <div className="icon-container-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>

              <div className="icon-container-innerd2">
                <Link className="order-dashboard-link">
                  <p>Orders</p>
                  <p>{supplies?.length}</p>
                </Link>
              </div>
            </div>
           
            <div className="icon-container mb-3">
              <div className="icon-container-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="icon-container-innerd2">
              <p>History</p>
                {/* <Link className="order-dashboard-link" to={`/admincustomer`}>
                <p>Customers</p>
                <p>{Customers?.length}</p>
                </Link> */}

              </div>
            </div>
            <div className="icon-container">
              <div className="icon-container-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="icon-container-innerd2">
                <p>............</p>
                {/* <p>{branches?.length}</p> */}
              </div>
            </div>
           
          </div>

          <h4 className="">Today order </h4>
          <div className="admindashboard-ordertable-div">
            <div></div>
            <table className="admindashboard-content-table">
              <thead>
                <tr>
                  {/* <th>Order Id</th> */}
                  <th>Branch</th>
                  <th>Description</th>
                  <th>Month</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {supplies?.length < 1 ? (
                  <tr>
                    <td colSpan="6" className="no-data-message">
                      No data available
                    </td>
                  </tr>
                ) : (
                  supplies &&
                  supplies.map((supplies) => (
                    <tr key={supplies._id}>
                      <th>{supplies?.branch_id?.name}</th>
                      <th>{supplies.notes}</th>
                      <th>{supplies.supply_name}</th>
                      <th>{supplies.quantity}</th>
                      <th>₦{supplies.unit_price}</th>
                      <th>{supplies?.supplier_id?.fullName}</th>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

            </div>
      
    );
}
    export default SupplierDash;
