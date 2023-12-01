import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/OrderReport.css";

function OrderReport() {
  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="order-report-container">
          <div className="order-report-contianer-innerd1">
            <h3>Order report</h3>
            <hr className="expenses-hr" />
            <div className="order-form-background">
              <div className="order-form-content">
                <div className="order-form-details-div-header">
                  <p> Expenses Details</p>
                </div>
                <div className="order-form-data">
                  <label htmlFor="" className="order-form-data-label1">
                    Start Date <br />
                    <input className="order-form-data-inpt1" type="date" />
                  </label>
                  <label htmlFor="" className="order-form-data-label2">
                    End Date <br />
                    <input className="order-form-data-inpt2" type="date" />
                  </label>
                  <label htmlFor="" className="order-form-data-label3">
                    Status <br />
                    <select name="" className="order-form-data-inpt3" id="">
                      <option value="" hidden>Select Order Status</option>
                      <option value="Order Placed">ORDER PLACED</option>
                      <option value="Confirmed">CONFIRMED</option>
                      <option value="Received">RECEIVED</option>
                      <option value="Cleaning">CLEANING</option>
                      <option value="Ready">READY</option>
                      <option value="Shipped">SHIPPED</option>
                      <option value="Delivered">DELIVERED</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div className="order-table-content">
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
                <table className="order-content-table">
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
  );
}

export default OrderReport;
