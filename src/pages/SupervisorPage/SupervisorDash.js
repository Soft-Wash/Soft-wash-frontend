import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/SupervisorStyles/supervisordash.css";
import { FaClipboardList, FaListAlt, FaRegUser} from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BiCaretUp,BiCaretDown   } from "react-icons/bi";
import moment from 'moment';
import SupervisorSideBar from "../../components/SupervisorComponents/SupervisorSideBar";
import SupervisorTeam from "../../components/SupervisorComponents/SupervisorTeam";
import InventoryChart from "../../components/SupervisorComponents/InentoryChart";
import SupervisorCarousel from "../../components/SupervisorComponents/SupervisorCarousel";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosInstance } from "../../services/AxiosInstance";

function SupervisorDash() {

  const [branches, setbranches] = useState();
  const [orders, setOrders] = useState();
  const [Employees, setEmployees] = useState();
    const getTimeOfDay = () => {
        const currentHour = moment().hour();
    
        if (currentHour >= 5 && currentHour < 12) {
          return 'Morning';
        } else if (currentHour >= 12 && currentHour < 17) {
          return 'Afternoon';
        } else {
          return 'Evening';
        }
      };
  
    const timeOfDay = getTimeOfDay();

    // GET DASH BOARD CARDS FROM ENDPOINT

    const [error, setError] = useState(null);

    const targetBranchId = '655debc4ec7b0b6e0f591bf7'; 
    useEffect(() => {
      axiosInstance.get("/order/").then((resp) => {
        const filteredOrders = resp.data.filter(item => item?.branch_id?._id === targetBranchId);
        setOrders(filteredOrders);
      });

      const fetchEmployees = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees?branchId=${targetBranchId}`);
          setEmployees(response.data);
        } catch (error) {
          console.error('Error fetching employees:', error);
        }
      };
  
      if (targetBranchId) {
        fetchEmployees();
      }
    }, [targetBranchId]);

    const getEmployeesId = (roleName) => {
      if (Employees) {
        const employeesWithRole = Employees.filter(
          (employee) =>
            employee.role.name.toLowerCase() === roleName.toLowerCase()
        );
        const roleIds = employeesWithRole.map((employee) => employee.role._id);
        return roleIds;
      } else {
        return [];
      }
    };

    const FrontDesk = getEmployeesId("frontdesk");
    const washman = getEmployeesId("washman");
    
    
    
  return (
    <div>
        <div className="d-flex">
            {/* <AdminSidebar/> */}
            <SupervisorSideBar/>
            <div className="supervisor-container">
                <h4 className="">Good {timeOfDay}! Supervisor</h4>
                <hr className="dashboard-line" />
    
                <section1 className="HeaderCards-Container mb-4">
                    <div className=" AllOrder sup-Card washman-blue">
                        <FaClipboardList className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>All Orders</h5>
                            <h5>{orders?.length}</h5>
                        </div>
                    </div>
                    <div className="AllUsers sup-Card washman-purple">
                        <FaRegUser className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>All Users</h5>
                            <h5> {Employees?.length}</h5>
                        </div>
                    </div>
                    <div className="FrontDesk sup-Card washman-green">
                        <FaChalkboardUser className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>FrontDesk</h5>
                            <h5> {FrontDesk?.length || 0}</h5>
                        </div>
                    </div>
                    <div className="Washman sup-Card washman-blue">
                        <FaChalkboardUser className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>Washman</h5>
                            <h5>{washman?.length || 0}</h5>
                        </div>
                    </div>
                    <div className="Inventory sup-Card washman-green">
                        <FaChalkboardUser className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>Inventory</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    {/* <div className="icon-container mb-3">
                        <div className="icon-container-innerd1">
                        <FaClipboardList className="clipboard-icon"/>
                        </div>
                        <div className="icon-container-innerd2">
                        <Link className="order-dashboard-link">
                        <p> Declined Orders</p>
                            <p>0</p>
                        </Link>

                        </div>
                        <div className="state-percent-divv2">
                        <BiCaretDown className="bicart-icon2"/>
                        <p className="state-percent-divv2-p">35.2%</p>
                        </div>
                    </div>
                    <div className="icon-container mb-3">
                        <div className="icon-container-innerd1">
                        <FaClipboardList className="clipboard-icon"/>
                        </div>
                        <div className="icon-container-innerd2">
                        <Link  className="order-dashboard-link" >
                        <p>Total Sales</p>
                            <p>0</p>
                        </Link>

                        </div>
                        <div className="state-percent-divv2">
                        <BiCaretDown className="bicart-icon2"/>
                        <p className="state-percent-divv2-p">35.2%</p>
                        </div>
                    </div>

                    <div className="icon-container mb-3">
                        <div className="icon-container-innerd1">
                        <FaClipboardList className="clipboard-icon"/>
                        </div>
                        <div className="icon-container-innerd2">
                        <Link  className="order-dashboard-link" >
                        <p>Total Earnings</p>
                            <p>0</p>
                        </Link>

                        </div>
                        <div className="state-percent-divv2">
                        <BiCaretDown className="bicart-icon2"/>
                        <p className="state-percent-divv2-p">35.2%</p>
                        </div>
                    </div>
                    <div className="icon-container mb-3">
                        <div className="icon-container-innerd1">
                        <FaClipboardList className="clipboard-icon"/>
                        </div>
                        <div className="icon-container-innerd2">
                            <p>Growth</p>
                            <p>0</p>
                        </div>
                    </div>   */}
                </section1>
                <section2 className="visuals d-flex ">
                    <div className="Left" style={{width:"90%", gap:"10px"}}>
                        <InventoryChart/>
                       
                    </div>
                    <div className="Right" >
                        {/* <SupervisorCarousel/> */}
                        <SupervisorTeam/>
                    </div>
                </section2>
                
            </div>
        </div>
    </div>
  )
}

export default SupervisorDash