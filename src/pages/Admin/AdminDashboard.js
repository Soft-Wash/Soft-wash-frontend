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
  const [Customers,setCustomers] = useState()

  async function getEmployees(){
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees/`);
      setEmployees(response.data);
    } catch (error) {
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
const supervisors = getEmployeesId('supervisor')

  

  useEffect(()=>{
    axiosInstance.get('/order/')
    .then((resp)=>{
      setorders(resp.data)
    })
    axiosInstance.get('/branch/')
    .then((resp)=>{
      setbranches(resp.data)
      localStorage.setItem("branches",JSON.stringify(resp.data))
    })
    axiosInstance.get('/order/day')
    .then((resp)=>{
      setdayorder(resp.data)
    })
    axiosInstance.get('/users/')
    .then((resp)=>{
      setCustomers(resp.data)
    })
    getEmployees()


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
        <p>Employees</p>
        <p>{Employees?.length}</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
      <Link className="order-dashboard-link" to={`/frontdesk/${FrontDesk[0]}`}>
      <p>Front desks</p>
        <p>{FrontDesk?.length || 0}</p>
      </Link>

    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
      <Link  className="order-dashboard-link" to={`/washman/${washman[0]}`}>
      <p>Washmen</p>
        <p>{washman?.length || 0}</p>
      </Link>

    </div>
  </div>

  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
      <Link  className="order-dashboard-link" to={`/supervisor/${supervisors[0]}`}>
      <p>supervisors</p>
        <p>{supervisors?.length}</p>
      </Link>

    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Customers</p>
        <p>{Customers?.length}</p>
    </div>
  </div>
  <div className="icon-container">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Branches</p>
        <p>{branches?.length}</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2 ">
        <p >Today Orders</p>
        <p>{dayorder?.length}</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
 
    <div className="icon-container-innerd2">
    <Link className="order-dashboard-link" to="/ordertable">
        <p>Orders</p>
        <p>{orders?.length}</p>
        </Link>
    </div>


  </div>
  
  </div>

  <h4 className="">Today order </h4>
  <div className="admindashboard-ordertable-div">
          <div>
          </div>
          <table className="admindashboard-content-table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Branch</th>
                <th>Customer</th>
                <th>Addresss</th>
                <th>SubTotal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dayorder &&
                dayorder.map((item) => (
                  <tr key={item._id}>
                    <th>{item._id.substring(0, item._id.length / 2)}</th>
                    <th>{item?.branch_id?.name}</th>
                    <th>{item?.customer_id?.fullName}</th>
                    <th>{item?.deliveryAddress[0]?.FullAddress}</th>
                    <th>{item?.subtotal}</th>
                    <th>{item?.status}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>


</div>
</div>


    </div>
  )
}

export default AdminDashboard;