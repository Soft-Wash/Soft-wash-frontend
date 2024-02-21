import SupplierSideBar from "../../components/Supplier/SupplierSideBar";
import React from 'react';
import "../../styles/Admin/AdminDashboard.css";
import { FaClipboardList, FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function SupplierDash (){
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
                <Link className="order-dashboard-link" to="/ordertable">
                  <p>Orders</p>
                  {/* <p>{orders?.length}</p> */}
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
                <p>Available For Delivery</p>
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
                  <th>Order Id</th>
                  <th>Branch</th>
                  <th>Customer</th>
                  <th>Addresss</th>
                  <th>SubTotal</th>
                  <th>Status</th>
                </tr>
              </thead>
              {/* <tbody>
                {dayorder?.length < 1 ? (
                  <tr>
                    <td colSpan="6" className="no-data-message">
                      No data available
                    </td>
                  </tr>
                ) : (
                  dayorder &&
                  dayorder.map((item) => (
                    <tr key={item._id}>
                      <th>{item._id.substring(0, item._id.length / 2)}</th>
                      <th>{item?.branch_id?.name}</th>
                      <th>{item?.customer_id?.fullName}</th>
                      <th>{item?.deliveryAddress[0]?.FullAddress}</th>
                      <th>{item?.subtotal}</th>
                      <th>{item?.status}</th>
                    </tr>
                  ))
                )}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>

            </div>
      
    );
}
    export default SupplierDash;
