import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/SalesReport.css";

function SalesReport() {
  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="sales-report-container">
          <div className="sales-report-contianer-innerd1">
            <h3>Expenses</h3>
            <hr className="expenses-hr" />
            <div className="form-background">
              <div className="form-content">
                <div className="form-details-div-header">
                  <p> Expenses Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesReport;
