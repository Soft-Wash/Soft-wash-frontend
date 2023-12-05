import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import userImage from "../../assets/images/bovi.jpeg";
import { axiosInstance } from "../../services/AxiosInstance";

function RejectedLeave() {

  const [rejectedLeave, setRejectedLeave] = useState();

  useEffect(() => {
    axiosInstance.get("/leave/status?status=rejected").then((resp) => {
      console.log(resp.data);
      setRejectedLeave(resp.data);
    });
  }, []);

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
                            </tr>
                        </thead>
                        <tbody>
            {rejectedLeave?.length < 1 ? (
              <tr>
                <td colSpan="6" className="no-data-message">
                  No data available
                </td>
              </tr>
            ) : (
              rejectedLeave &&
              rejectedLeave.map((item) => (
                <tr key={item._id}>
                  <th>{item?.fullName}</th>
                  <th>{item?.customer_id?.role?.name}</th>
                  <th>{item?.leaveType}</th>
                  <th>{item.startDate}</th>
                  <th>{item.endDate}</th>
                  <th>1 day</th>
                </tr>
              ))
            )}
          </tbody>
                    </table>
      </div>
    </div>
  );
}

export default RejectedLeave;
