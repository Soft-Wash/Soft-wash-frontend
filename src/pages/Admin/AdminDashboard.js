import AdminSidebar from "../../components/Admin/AdminSidebar"
import "../../styles/Admin/AdminDashboard.css";
import { FaClipboardList, FaListAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';



function AdminDashboard(){
  return(
    <div>


<div className="d-flex">
<AdminSidebar/>
<div className="admin-container">
  <h4 className="">Dashboard </h4>
  <hr className="dashboard-line" />
  <div className="category-container">
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Total Washman</p>
        <p>10</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Total Front desk</p>
        <p>10</p>
    </div>
  </div>

  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Total supervisors</p>
        <p>10</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Total Customers</p>
        <p>10</p>
    </div>
  </div>
  <div className="icon-container">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Total Branches</p>
        <p>10</p>
    </div>
  </div>
  
  </div>


</div>
</div>


    </div>
  )
}

export default AdminDashboard;