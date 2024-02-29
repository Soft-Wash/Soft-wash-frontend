import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/SupervisorStyles/supervisordash.css";
import { FaClipboardList, FaListAlt, FaRegUser} from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LuAnchor } from "react-icons/lu";
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
import SupDashChart from "../../components/SupervisorComponents/SupDashChart";
import SupNotification from "../../components/SupervisorComponents/SupNotification";
import Loader from "../../components/Loader/Loader"

function SupervisorDash() {

  const [branches, setbranches] = useState();
  const [orders, setOrders] = useState();
  const [Employees, setEmployees] = useState();
  const [transactions, setTransactions] = useState();
  const [totalAmount, setTotalamount] = useState();
  const [expense, setExpense] = useState();
  const [totalexpense, setTotalexpense] = useState();
  const [totalrevenue, setTotalrevenue] = useState();
  const [loading, setLoading] = useState(false);
  const targetBranchId = '655debc4ec7b0b6e0f591bf7'; 

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

    // GET ALL ORDERS

    const [error, setError] = useState(null);

    
    useEffect(() => {
      // setLoading(true);
      axiosInstance.get("/order/", {
        params: {
          branchId: targetBranchId 
        }
      }).then((resp) => {
        setOrders(resp.data);
        setLoading(false);
      }).catch(error => {
        console.error('Error fetching orders:', error.message);
        setLoading(false); // Ensure loading state is updated even in case of errors
      });
    }, [targetBranchId]);
    

    useEffect(() =>{
      try {
       axios.get(`${process.env.REACT_APP_BASE_URL}/employees?branchId=${targetBranchId}`)
       .then((resp) =>{
        console.log(resp.data)
        setEmployees(resp.data);
       })
      
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },[])

      // const fetchEmployees = async (targetBranchId) => {
      //   setLoading(true);
      //   try {
      //     const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees?branchId=${targetBranchId}`);
      //     console.log(response.data)
      //     setEmployees(response.data);
      //     // setLoading(false);
      //   } catch (error) {
      //     console.error('Error fetching employees:', error);
      //   }
      // };

      // GET ALL TRANSACTIONS

      useEffect(() =>{
        try {
          axios.get(`${process.env.REACT_APP_BASE_URL}/transactions`)
          .then((response) =>{
            console.log(response.data.data.transactions)
            setTransactions(response.data.data.transactions)
          })
          } catch (error) {
            console.error('Error fetching transactions:', error.message);
          }
      },[]);

      // const fetchTransactions = async () => {
      //   // setLoading(true);
      //   try {
      //     const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/transactions`);
          
      //   console.log(response.data.data.transactions)
      //     setTransactions(response.data.data.transactions)
      //   } catch (error) {
      //     console.error('Error fetching transactions:', error.message);
      //   }
      // };


      // GET ALL EXPENSE

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/expense`);
                
                console.log(response.data);
                setExpense(response.data);
                
                if (Array.isArray(response.data)) {
                    const totalExpense = response.data.reduce((sum, expense) => {
                        // Ensure amount is a number before adding to the sum
                        const expenseAmount = typeof expense.amount === 'number' ? expense.amount : 0;
                        return sum + expenseAmount;
                    }, 0);
                    
                    setTotalexpense(totalExpense);
                    console.log(totalExpense);
                }
            } catch (error) {
                console.error('Error fetching transactions:', error.message);
            }
        };
    
        fetchData();
    }, []);
    



      // useEffect(() =>{

      //     try {
      //       const response = axios.get(`${process.env.REACT_APP_BASE_URL}/expense`);
        
      //       console.log(response.data)
      //       setExpense(response.data)
           
      //       if (Array.isArray(response.data)) {
      //         const totalExpense = response.data.reduce((sum, expense) => {
      //           // Ensure amount is a number before adding to the sum
      //           const expenseAmount = typeof expense.amount === 'number' ? expense.amount : 0;
      //           return sum + expenseAmount;
      //         }, 0);
        
      //         setTotalexpense(totalExpense);
      //         console.log(totalExpense);
      //       }
  
        
      //     } catch (error) {
      //       console.error('Error fetching transactions:', error.message);
      //     }
        
      // },[])
     
  
  
      if (targetBranchId) {
  
       
      }
    

    useEffect(() => {
      // Calculate totalAmount whenever transactions state changes
      if (transactions) {
        const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
          setTotalamount(totalAmount);

          console.log(totalAmount);
      }
    }, [transactions]);

    useEffect(() =>{
      if (transactions && expense){

        const totalRevenue = totalAmount - totalexpense;

        setTotalrevenue(totalRevenue)
      }
    })

    const getEmployeesId = (roleName) => {
      if (Employees) {
        const employeesWithRole = Employees.filter(
          (employee) =>
            employee.role.name.toLowerCase() === roleName.toLowerCase()
        );
        return employeesWithRole.map((employee) => ({
          fullName: employee.fullName,
          role: employee.role.name,
          id: employee._id
        }));
      } else {
        return [];
      }
    };

    const FrontDesk = getEmployeesId("frontdesk");
    // console.log(FrontDesk)
    const washman = getEmployeesId("washman");
    
    const totalEmployees = FrontDesk.length + washman.length; 
    
  return (
    <div>
        <div className="d-flex">
            <SupervisorSideBar/>
            {loading ? <Loader/>: 
            <div className="supervisor-container">
              <div>
                <div className="NotificationPanel">
                  <h4 className="">Good {timeOfDay}! Supervisor</h4>
                  <SupNotification/>
                </div>
                <div>
                 
                </div>
              </div>
                <hr className="dashboard-line" />
    
                <section1 className="HeaderCards-Container mb-3">
                    <div className="Pair1">
                      <Link to="/SupOrderTable"  className=" AllOrder sup-Card washman-grey"style={{textDecoration:"None"}}>
                          <FaClipboardList className="supervisor-dashboard-icons "/>
                          <div>
                              <h5>All Orders</h5>
                              <h5>{orders?.length}</h5>
                          </div>
                      </Link>
                      <Link to="/SupEmployees">
                        <div className="AllUsers sup-Card washman-grey">
                            <FaRegUser className="supervisor-dashboard-icons "/>
                            <div>
                                <h5>Employees</h5>
                                <h5> {totalEmployees}</h5>
                            </div>
                        </div>
                      </Link>
                    </div>
                    <div className="Pair1">
                      <div className="FrontDesk sup-Card washman-grey">
                          <FaChalkboardUser className="supervisor-dashboard-icons "/>
                          <div>
                              <h5>FrontDesk</h5>
                              <h5> {FrontDesk?.length || 0}</h5>
                          </div>
                      </div>
                      <div className="Washman sup-Card washman-grey">
                          <FaChalkboardUser className="supervisor-dashboard-icons "/>
                          <div>
                              <h5>Washman</h5>
                              <h5>{washman?.length || 0}</h5>
                          </div>
                      </div>
                    </div>
                    <div className="Pair1">
                      <Link to="/SupTransactions">
                      <div className="Inventory sup-Card washman-green">
                          <FaChalkboardUser className="supervisor-dashboard-icons "/>
                          <div>
                              <h5>Transactions</h5>
                              <h5>{transactions?.length}</h5>
                          </div>
                      </div>
                      </Link>
                      <div className="Inventory sup-Card washman-green">
                          <FaChalkboardUser className="supervisor-dashboard-icons "/>
                          <div>
                              <h5>Inventory</h5>
                              <h5>3</h5>
                          </div>
                      </div>
                    </div>
                </section1>
                <section2 className="HeaderCards-Container mb-4">
                    <div className=" AllOrder sup-Card2 washman-purple">
                        <MdOutlineAttachMoney className="supervisor-dashboard-icons-Big "/>
                        <div>
                            <h5>Total Sales</h5>
                            <h5>{totalAmount}</h5>
                        </div>
                    </div>
                    <div className="AllUsers sup-Card2 washman-green">
                        <LuAnchor className="supervisor-dashboard-icons-Big "/>
                        <div>
                            <h5>Total Expense</h5>
                            <h5> {totalexpense}</h5>
                        </div>
                    </div>
                    <div className="FrontDesk sup-Card2 washman-blue">
                        <RiMoneyDollarCircleLine className="supervisor-dashboard-icons-Big "/>
                        
                        <div>
                            <h5>Total Revenue</h5>
                            <h5> {totalrevenue}</h5>
                        </div>
                    </div>
                  
                </section2>
                <section3 className="visuals d-flex ">
                    <div className="Left" style={{width:"90%", gap:"10px"}}>
                        <SupDashChart/>
                       
                    </div>
                    <div className="Right" >
                        <SupervisorTeam/>
                    </div>
                </section3>

            </div>}
        </div>
    </div>
  )
}

export default SupervisorDash