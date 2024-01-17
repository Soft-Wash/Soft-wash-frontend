import WorkFlowSideBar from "../../components/Admin/WorkFlowSideBar";
import "../../styles/Admin/TaskFreeEmployee.css";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";

function TaskFreeEmployees() {
  const [employee, setEmployee] = useState();
  const [roles, setRoles] = useState();

  useEffect(() => {

    axiosInstance.get("/roles/").then((resp) => {

      setRoles(resp.data);
    });
  }, []);

  const handleFilter = (id) => {
    console.log(id);
    axiosInstance
      .get(`/employees/task/employee/search?task=free&role=${id}`)
      .then((resp) => {
        console.log(resp.data);
        setEmployee(resp.data);
      });
  };

  return (
    <div>
      <div className="d-flex">
        <WorkFlowSideBar />
        <div className="taskfree_div">
          <div className="taskfree_div_title">
            <h3>Available Employees</h3>
            <div>
              <select
                name=""
                id=""
                className="select-dropdown2"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value="" hidden>
                  Select Employee
                </option>
                {roles &&
                  roles.map((item) => (
                    <option value={item._id}>{item.name}</option>
                  ))}
              </select>
            </div>
          </div>

          <hr />
          <table className="taskfree_tablecontent">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Task_status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!employee || employee.length < 1 ? (
                <tr>
                  <td colSpan="6" className="no-data-message">
                    No data available
                  </td>
                </tr>
              ) : (
                employee &&
                employee.map((item) => (
                  <tr>
                    <th>{item.fullName}</th>
                    <th>{item.role.name}</th>
                    <th>{item.task}</th>
                    <th>
                      <button className="action_button">View</button>
                    </th>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskFreeEmployees;
