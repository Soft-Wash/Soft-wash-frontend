import "../../styles/Washman Styles/WashmanProfile.css";
import "../../styles/Washman Styles/WashmanDashboard.css";
import { FaClipboardList, FaListAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";



function WashmanDashboardBody(){
    
    const [tasks, setTasks] = useState([]);
    const [washmanID, setWashmanID] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [leave, setLeave] = useState([]);




    useEffect(() => {
        const getID = () =>{
            const storedUserId = localStorage.getItem("softwashEmployeeLogin");
            if (storedUserId) {
                setWashmanID(JSON.parse(storedUserId));
            }
            console.log(washmanID)
          }
          

        const getAllTasks = async () => {
            try{
                setLoading(true);
                const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/task/employee/${washmanID}/tasks`);
                setTasks(resp.data);
                setLoading(false);
                console.log(resp.data);
            }catch (error) {
                setError(error.message || 'An error occurred while fetching Tasks.');
            }
        }   
        
        const getWashmanLeave = async () => {
            try{
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/leave/employee/${washmanID}`);
                setLoading(false);
                console.log(response.data)
                const filteredLeave = response.data.filter(item => item.employee_id === washmanID);    
                setLeave(filteredLeave);
                console.log(filteredLeave);
            }
            catch{
                setError(error.message || 'An error occurred while fetching Leave Data.');

            }
        }

        getID();
        if(washmanID){
            getAllTasks();
            getWashmanLeave();
          }
        

    }, [washmanID])
    
    const pendingTaskCount = tasks.filter(task => task.status === "pending").length;

    const inprogressTaskCount = tasks.filter(task => task.status === "inprogress").length;

    const completedTaskCount = tasks.filter(task => task.status === "completed").length;


    return(
        <div className="washman-bg">
            {loading? <Loader /> :
            <div className="washman-page-content">
            <div className="washman-header">
                <h2>WASHMAN DASHBOARD</h2>
            </div>
            <div className="washman-dashboard-cards">
                <div className="washman-card washman-blue">
                    <FaClipboardList className="washman-dashboard-icons "/>
                    <div>
                        <h5>Total Tasks</h5>
                        <h5>{tasks.length}</h5>
                    </div>
                </div>
                <div className="washman-card washman-purple">
                    <FaListAlt className="washman-dashboard-icons "/>
                    <div>
                        <h5>Pending Orders</h5>
                        <h5>{pendingTaskCount}</h5>
                    </div>
                </div>
                <div className="washman-card washman-purple">
                    <FaListAlt className="washman-dashboard-icons "/>
                    <div>
                        <h5>Tasks in Progress</h5>
                        <h5>{inprogressTaskCount}</h5>
                    </div>
                </div>
                <div className="washman-card washman-green">
                    <FaClipboardList className="washman-dashboard-icons "/>
                    <div>
                        <h5>Completed Tasks</h5>
                        <h5>{completedTaskCount}</h5>
                    </div>
                </div>
                
            </div>  
            <div className="washman-header">
                <h2>LEAVE HISTORY</h2>
            </div>
            <div className="washman-table-div">
                    <table className="washman-content-table">
                        <thead>
                            <tr>
                                <th>S/No</th>
                                <th>Leave Type</th>
                                <th>Reason</th>
                                <th>Application Date</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Rejection Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leave.map((leave, index) => (
                                <tr key={leave._id}>
                                <td>{index + 1}</td>
                                <td>
                                    {leave.leaveType}
                                    {/* <div>
                                        <Link to={`/washman-single-order/${leave._id}`} className="washman-table-link">
                                        </Link>
                                    </div> */}
                                </td>                                
                                <td>{leave.reasons}</td>    
                                <td>{new Date(leave.date_created).toLocaleDateString('en-GB')}</td>  
                                <td>{new Date(leave.startDate).toLocaleDateString('en-GB')}</td>  
                                <td>{new Date(leave.endDate).toLocaleDateString('en-GB')}</td>    
                                <td>{leave.status}</td>          
                                <td>{leave.rejectReason}</td>          
                            </tr>                                    
                            ))}
                        </tbody>
                    </table>
                </div> 
        </div>}
        </div>
    )
}



export default WashmanDashboardBody;