import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Expenses.css";
import { Link } from "react-router-dom";

function Expenses() {
  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="expenses-container">
          <div className="expenses-container-innerd">
            <div className="header-tags">
            <h3>Expenses</h3>
            <Link to="/newexpenses">
            <button>
              Add New
            </button>
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
                    <tr>
                      <th>1</th>
                      <th>08-dec-23</th>
                      <th>100</th>

                      <th>Fuel</th>
                      <th>

                        <button className="tax-include-btn1">No</button>

                      </th>
                      <th>Cash</th>
                      <th>
                        <div className="d-flex">
                        <button className="action-buttons-btn1">Edit</button>
                        <button className="action-buttons-btn2">Delete</button>
                        </div>

                      </th>
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
  );
}

export default Expenses;
