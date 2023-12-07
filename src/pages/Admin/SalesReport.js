import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/SalesReport.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../../services/AxiosInstance";

function SalesReport() {
  const [salesReportData, setSalesReportData] = useState();
  const [reporData, setReporData] = useState({});

  const HandleSalesReport = (e) => {
    const value = e.target.value;

    setReporData({ ...reporData, [e.target.name]: value });
  };

  const SubmitDates = () => {
    const { startDate, endDate } = reporData;

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/cartorder/shop/sales/report`, {
        params: {
          startDate,
          endDate,
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setSalesReportData(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="sales-report-container">
          <div className="sales-report-contianer-innerd1">
            <h3>Sales report</h3>
            <hr className="expenses-hr" />
            <div className="form-background">
              <div className="form-content">
                <div className="form-details-div-header">
                  <p> Expenses Details</p>
                </div>
                <div className="form-data">
                  <label htmlFor="" className="form-data-label1">
                    Start Date <br />
                    <input
                      className="form-data-inpt1"
                      type="date"
                      name="startDate"
                      onChange={HandleSalesReport}
                    />
                  </label>
                  <label htmlFor="" className="form-data-label2">
                    End Date <br />
                    <input
                      className="form-data-inpt2"
                      type="date"
                      name="endDate"
                      onChange={HandleSalesReport}
                    />
                  </label>
                </div>
              </div>
              <button className="sales-Sort-button" onClick={SubmitDates}>
                Submit
              </button>
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
                <table className="sales-content-table">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Subtotal</th>
                      <th>Discount</th>
                      <th>Tax Amount</th>
                      <th>Gross Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesReportData?.length < 1 ? (
                      <tr>
                        <td colSpan="6" className="no-data-message">
                          No data available
                        </td>
                      </tr>
                    ) : (
                      salesReportData &&
                      salesReportData.map((item) => (
                        <tr key={item._id}>
                          <th>1</th>
                          <th>{item?.date_created}</th>
                          <th>{item?.customer_id.fullName}</th>

                          <th>{item?.total}</th>
                          <th>{item?.discount || "Nil"}</th>
                          <th>{item?.tax_amount || "N10"}</th>
                          <th>{item?.total}</th>
                        </tr>
                      ))
                    )}
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

export default SalesReport;
