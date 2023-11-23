import AdminSidebar from "../../components/Admin/AdminSidebar"
import "../../styles/Admin/AdminDashboard.css";
import { FaClipboardList, FaListAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useState,useEffect} from "react"
import { axiosInstance } from "../../services/AxiosInstance";



function AdminDashboard(){

  const [branches,setbranches]=useState();
  const [orders,setorders]=useState();
  const [dayorder,setdayorder]=useState();

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
      console.log(resp.data)
      setdayorder(resp.data)
    })
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