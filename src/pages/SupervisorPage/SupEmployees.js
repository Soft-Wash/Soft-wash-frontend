import { useEffect, useState } from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/tableorder.css";
import axios from "axios";
import Loader from "../../components/Loader/Loader"
import SupervisorSideBar from "../../components/SupervisorComponents/SupervisorSideBar";

function SupEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchEmployees = async (targetBranchId) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees?branchId=${targetBranchId}`);
        // Filter employees based on roles "frontdesk" and "washman"
        const filteredEmployees = response.data.filter(employee => employee.role?.name === "frontdesk" || employee.role?.name === "washman");
        setEmployees(filteredEmployees);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    
    const targetBranchId = '655debc4ec7b0b6e0f591bf7';  

    if (targetBranchId) {
      fetchEmployees(targetBranchId);
    }
  }, []); 

  return (
    <div>
      <div className="d-flex">
      <SupervisorSideBar/>
      {loading ? <Loader/>: 
        <div className="ordertable-div">
          <h2>Employee Table</h2>
          <table className="ordertbale-content-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Employee</th>
                <th>Address</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((item) => (
                <tr key={item._id}>
                  <td>{item._id.substring(0, item._id.length / 2)}</td>
                  {/* Adjust this part according to your data structure */}
                  <td>{item.fullName}</td>
                  <td>{item.address}</td>
                  <td>{item.role?.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
      </div>
    </div>
  );
}

export default SupEmployees;
