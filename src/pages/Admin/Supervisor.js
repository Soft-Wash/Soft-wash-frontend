import { useEffect } from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/tableorder.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Supervisor() {
  const [employees, setEmployees] = useState();
  const [selectedOption, setSelectedOption] = useState("Wuse-2-Soft-wash");
  const RoleId = useParams()
  const roleId = RoleId.roldId 

  const getBranchesId = (branchName) => {
    const branches = JSON.parse(localStorage.getItem('branches')) || [];
  
    if (branches.length === 0) {
      return [];
    }
    const filteredBranches = branches.filter((branch) => {
      return branch.name.toLowerCase() === branchName.toLowerCase();
      
    });
    
    const branchIds = filteredBranches.map((branch) => branch._id);
    return branchIds;
  
  };
  

 const wusebranch= getBranchesId('Wuse-2-Soft-wash')
 const maitamabranch= getBranchesId('Maitama-Soft-wash')
 const area1branch= getBranchesId('Area-1-Soft-wash')



  const fetchData = () => {
    if (selectedOption === "Wuse-2-Soft-wash") {
      axios.get(`${process.env.REACT_APP_BASE_URL}/employees/role/branch?branch_id=${wusebranch}&role=${roleId}`).then((resp) => {
        setEmployees(resp.data);
        console.log(resp.data)
      });
    }  else if(selectedOption==="Maitama-Soft-wash"){
      axios.get(`${process.env.REACT_APP_BASE_URL}/employees/role/branch?branch_id=${maitamabranch}&role=${roleId}`).then((resp) => {
        setEmployees(resp.data);
        console.log(resp.data)
      });
    } else if(selectedOption==="Area-1-Soft-wash"){
      axios.get(`${process.env.REACT_APP_BASE_URL}/employees/role/branch?branch_id=${area1branch}&role=${roleId}`).then((resp) => {
        setEmployees(resp.data);
        console.log(resp.data)

      });
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="ordertable-div">
          <div>
            <select name="" className="select-dropdown" id="" onChange={handleSelectChange}>
              <option value=" Wuse-2-Soft-wash">
                Wuse-2-Softwash
              </option>
              <option value="Maitama-Soft-wash">Maitama-Softwash</option>
              <option value="Area-1-Soft-wash">Area-1-Softwash</option>
            </select>
          </div>
          <table className="ordertbale-content-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Branch</th>
                <th>Employee</th>
                <th>Addresss</th>
                <th>Role</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((item) => (
                  <tr key={item._id}>
                    <th>{item._id.substring(0, item._id.length / 2)}</th>
                    <th>{item?.branch.name}</th>
                    <th>{item?.fullName}</th>
                    <th>{item?.address}</th>
                    <th>{item?.role?.name}</th>
                    <th>{item?.status}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Supervisor;
