
import { useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import SupplierSideBar from "../../components/Supplier/SupplierSideBar";
import { axiosInstance } from "../../services/AxiosInstance";
import "../../styles/Admin/NewExpenses.css";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SupplyReceipt(props) {
  const location = useLocation();
  const { formData } = location.state || {}; // Use default empty object if state is undefined
  const generatedDate = new Date(formData.generated_at);

  // Check if generatedDate is valid
  const isValidDate = !isNaN(generatedDate.getTime());

  // Format the date and time if valid
  const formattedDate = isValidDate ? generatedDate.toLocaleDateString() : "Invalid Date";
  const formattedTime = isValidDate ? generatedDate.toLocaleTimeString() : "";

  // const { formData } = props.location.state;

  return (
    <div>
      <ToastContainer position="top-center" />
      <div className="new-expenses-container d-flex">
        <SupplierSideBar />
        <div className="new-expenses-container-innerd">
          <hr className="addexpenses-hr" />
          <div className="addexpenses-table-content">
            <div className="addexpenses-details-div border rounded">
              <div className="expenses-details-div-header">
                <h3 className="text-center">Supply Order Receipt</h3><br /><br />
              </div>
              <div className="expenses-details-div-form">
                <div className="`note-div">
                  <p> <strong>Name:</strong> {formData.product_name}</p>
                  <p> <strong>Price:</strong> {formData.product_price}</p>
                  <p> <strong>Quantity:</strong> {formData.product_quantity}</p>
                  <h5>Total Price: ₦{formData.total_price}</h5>
                  <p>Date:{formattedDate}</p>
                  <p>Time:{formattedTime}</p>
                </div>
              </div>
            </div>

            {/* <button className="submit-button" onClick={postExpense}>Sumit</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplyReceipt;
