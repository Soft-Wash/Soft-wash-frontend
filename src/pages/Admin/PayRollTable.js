import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/PayRollTable.css";
import axios from "axios";
import { useEffect, useState } from "react";



function PayRollTable() {
const [employees,setEmployees]=useState()

  const paidEmployees=()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/payroll`)
    .then((resp)=> {
      console.log(resp.data)
      setEmployees(resp.data)
    })
  }


  const getStatusColorClass = (status) => {
    switch (status) {
      case "pending":
        return "order-placed";
      case "paid":
        return "green";
      default:
        return "";
    }
  };

  useEffect(()=>{
    paidEmployees()
  },[])
  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="payroll_table_content">
          <h3>Pay Roll Table</h3>
          <hr className="payroll_table_hr" />
          <div className="payroll_table_div">
            <table className="payroll_table_div_table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>date</th>
                  <th>amount</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {employees?.length>0?(
                   employees.map((item)=>(
                    <tr>
                    <th>{item?.user_id?.fullName}</th>
                    <th>{item?.date_created}</th>
                    <th>{item?.amount}</th>
                            <th>
                            <button
                        className={`payroll_status_button ${getStatusColorClass(
                          item?.status
                        )}`}
                      >
                        {" "}
                        {item?.status}
                      </button>
                            </th>
                  </tr>
                   ))
                ):(
                  <tr>
                  <td colSpan="6" className="no-data-message">
                    No data available
                  </td>
                </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayRollTable;
