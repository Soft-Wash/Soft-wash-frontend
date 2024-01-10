import WorkFlowSideBar from "../../components/Admin/WorkFlowSideBar";
import "../../styles/Admin/TaskFreeEmployee.css";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";

function TaskFreeEmployees() {
  const [employee, setEmployee] = useState();

  useEffect(() => {
    axiosInstance.get("/employees/task/status").then((resp) => {
      console.log(resp.data);
      setEmployee(resp.data);
    });
  }, []);

  return (
    <div>
      <div className="d-flex">
        <WorkFlowSideBar />
        <div className="taskfree_div">
          <div className="taskfree_div_title">
          <h3>Available Employees</h3>
          <div>
          <select name="" id=""  className="select-dropdown2">
            <option value="" hidden>Select Employee</option>
            <option value="Washman">Washman</option>
            <option value="Frontdesk">Frontdesk</option>
            <option value="Supervisor">Supervisor</option>
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
              {employee &&
                employee.map((item) => (
                  <tr>
                    <th>{item.fullName}</th>
                    <th>{item.role.name}</th>
                    <th>{item.task}</th>
                    <th>
                      <button className="action_button">View</button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskFreeEmployees;
