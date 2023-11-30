import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Expenses.css";

function Expenses() {
  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="expenses-container">
          <div className="expenses-container-innerd">
            <h3>Expenses</h3>
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
                        <button className="action-buttons-btn1">Edit</button>
                        <button className="action-buttons-btn2">Delete</button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
