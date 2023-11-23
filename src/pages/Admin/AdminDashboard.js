import AdminSidebar from "../../components/Admin/AdminSidebar"
import "../../styles/Admin/AdminDashboard.css";
import { FaClipboardList, FaListAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useState,useEffect} from "react"
import { axiosInstance } from "../../services/AxiosInstance";
import axios from "axios";



function AdminDashboard(){

  const [branches,setbranches]=useState();
  const [orders,setorders]=useState();
  const [dayorder,setdayorder]=useState();
  const [Employees,setEmployees]=useState()
  const [frontdesk,setfrontdesk]=useState()
  const [washMan,setWashman]=useState()

  async function getEmployees(){
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees/`);
      setEmployees(response.data);
    } catch (error) {
      // Handle the error here
      console.error("Error fetching data:", error);
    }
  }

const getEmployeesId=(roleName)=>{
  if(Employees){
   const employeesWithRole = Employees.filter((employee)=> employee.role.name.toLowerCase()===roleName.toLowerCase())
   const roleIds = employeesWithRole.map((employee)=> employee.role._id)
    return roleIds
  }else {
    return []
  }

}

const FrontDesk = getEmployeesId('frontdesk')
const washman = getEmployeesId('washman')



  async function getWashman(){
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees/${washman}/employee`);
      setWashman(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  async function getFrontdesk(){
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees/${FrontDesk}/employee`);
      setfrontdesk(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  

  useEffect(()=>{
    axiosInstance.get('/order/')
    .then((resp)=>{
      setorders(resp.data)
    })
    axiosInstance.get('/branch/')
    .then((resp)=>{
      setbranches(resp.data)
    })
    axiosInstance.get('/order/day')
    .then((resp)=>{
      setdayorder(resp.data)
    })
    // getEmployees()
    // getFrontdesk()
    // getWashman()

  },[])




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
        <p>Total Employees</p>
        <p>{Employees?.length}</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Total Front desk</p>
        <p>{FrontDesk?.length || 0}</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Total Washman</p>
        <p>{washman?.length || 0}</p>
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
        <p>{branches?.length}</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
 
    <div className="icon-container-innerd2">
    <Link className="order-dashboard-link" to="/ordertable">
        <p>Total Orders</p>
        <p>{orders?.length}</p>
        </Link>
    </div>


  </div>
  
  </div>


</div>
</div>


    </div>
  )
}

export default AdminDashboard;