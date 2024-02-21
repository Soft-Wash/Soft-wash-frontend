import SupplierSideBar from "../../components/Supplier/SupplierSideBar";
import "../../styles/Admin/Expenses.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";


function SupplierExpenses(){
    const [expenses, setExpenses] = useState();
    return(
        <div>
      <div className="d-flex">
      <SupplierSideBar />
        <div className="expenses-container">
          <div className="expenses-container-innerd">
            <div className="header-tags">
              <h3>Expenses</h3>
              <Link to="/SupplierNewExpense">
                <button>Add New</button>
              </Link>
            </div>

            <hr className="expenses-hr" />
            <div className="expenses-table-content">
              <div className="show-container">
                <p className="show-container-p1">Show</p>
                <select name="" id="">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <p className="show-container-p2">entries</p>
              </div>
              <div className="table-content">
                <table className="expenses-content-table">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Towards</th>
                      <th>Tax Include?</th>
                      <th>Payment Method</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses &&
                      expenses.map((item) => (
                        <tr key={item._id}>
                          <th>1</th>
                          <th>{item.date}</th>
                          <th>{item.amount}</th>

                          <th>{item.category}</th>
                          <th>
                            {/* <button
                              className={`tax-include-btn1 ${getStatusColorClass(
                                item?.tax_include
                              )}`}
                            >
                              {item.tax_include}
                            </button> */}
                          </th>
                          <th>{item.payment_method}</th>
                          <th>
                            <div className="d-flex">
                              <Link to={`/editexpense/${item._id}`}>
                                <button className="action-buttons-btn1">
                                  Edit
                                </button>
                              </Link>

                              {/* <button
                                className="action-buttons-btn2"
                                onClick={() => DeleteExpense(item._id)}
                              >
                                Delete
                              </button> */}
                            </div>
                          </th>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <p>showing 1 0f 1 of 1 entries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );

}

export default SupplierExpenses;