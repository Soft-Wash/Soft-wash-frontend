import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/ExpenseReport.css"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ExpenseReport(){


  return(
    <div>
            <ToastContainer position="top-center" />
      <div className="d-flex">
        <AdminSidebar />
        <div className="expense-report-container">
          <div className="expense-report-contianer-innerd1">
            <h3>Expense report</h3>
            <hr className="expenses-hr" />
            <div className="expense-form-background">
              <div className="expense-form-content">
                <div className="expense-form-details-div-header">
                  <p> Expenses Details</p>
                </div>
                <div className="expense-form-data">
                  <label htmlFor="" className="expense-form-data-label1">
                    Start Date <br />
                    <input className="expense-form-data-inpt1" type="date" />
                  </label>
                  <label htmlFor="" className="expense-form-data-label2">
                    End Date <br />
                    <input className="expense-form-data-inpt2" type="date" />
                  </label>
                </div>
              </div>
            </div>
            <div className="sales-table-content">
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
                <table className="expense-content-table">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Subtotal</th>
                      <th>Addon Total</th>
                      <th>Discount</th>
                      <th>Tax Amount</th>
                      <th>Gross Amount</th> 

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <th>08-dec-23</th>
                      <th>100</th>

                      <th>Fuel</th>
                      <th>food</th>
                      <th>Cash</th>
                      <th>money</th>
                    </tr>
                  </tbody>
                </table>
                <p>showing 1 0f 1 of 1 entries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseReport;