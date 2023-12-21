import Sidebar from "../../components/OrdersPage/Sidebar";
import "../../styles/PaymentHistory.css";

function PaymentHistory() {
  return (
    <div>
      <div className="d-flex">
        <Sidebar />
        <div className="payment-content">
          <div>
            <select
              name="statusOrder"
              className="select-dropdown2"
              id=""
              // onChange={handleSelectChange}
            >
              <option value="" hidden>
                Select Order Status
              </option>
              <option value="order placed">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Received">Failed</option>
            </select>
          </div>
          <table className="payment-content-table">
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
              {/* <tr>
                  <td colSpan="6" className="no-data-message">
                    No data available
                  </td>
                </tr> */}

              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th className="payment-content-status-th">
                  <button className="status-button"></button>
                </th>
                <th>
                  <div className="d-flex">
                    <button className="action-buttons-btn1">View</button>
                    <button className="action-buttons-btn2">Print</button>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
