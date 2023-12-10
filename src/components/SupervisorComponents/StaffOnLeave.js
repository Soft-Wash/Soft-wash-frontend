import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/images/bovi.jpeg";
import { axiosInstance } from "../../services/AxiosInstance";

function StaffOnLeave() {
  const [approvedLeave, setApprovedLeave] = useState();

  useEffect(() => {
    axiosInstance.get("/leave/status?status=approved").then((resp) => {
      console.log(resp.data);
      setApprovedLeave(resp.data);
    });
  }, []);

  const CalculateDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const interval = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    return interval;
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "pending":
        return "pendingcolor";
      case "approved":
        return "approvedcolor";
      case "rejected":
        return "rejectedcolor";
      default:
        return "";
    }
  };

  return (
    <div>
      <div>
        <table className="admin-content-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Role</th>
              <th>Leave type</th>
              <th>From</th>
              <th>To</th>
              <th>Total Days</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {approvedLeave?.length < 1 ? (
              <tr>
                <td colSpan="6" className="no-data-message">
                  No data available
                </td>
              </tr>
            ) : (
              approvedLeave &&
              approvedLeave.map((item) => (
                <tr key={item._id}>
                  <th>{item?.fullName}</th>
                  <th>{item?.employee_id?.role?.name}</th>
                  <th>{item?.leaveType}</th>
                  <th>
                    {new Date(item.startDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </th>
                  <th>
                    {new Date(item.endDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </th>
                  <th>{CalculateDays(item.startDate, item.endDate)} days</th>
                  <th>
                    <button
                      className={`status-button1 ${getStatusColorClass(
                        item?.status
                      )}`}
                    >
                      {item?.status}
                    </button>
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffOnLeave;
