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



    useEffect(() => {
        const getID = () =>{
            setLoading(true);
            const storedUserId = localStorage.getItem("softwashEmployeeLogin");
            if (storedUserId) {
                setWashmanID(JSON.parse(storedUserId));
            }
            console.log(washmanID)
          }
          

        const getAllTasks = async () => {
            setLoading(true);
            const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/task/employee/${washmanID}/tasks`);
            setTasks(resp.data);
            setLoading(false);
            console.log(resp.data);
        }        
        getID();
        if(washmanID){
            // setLoading(true);
            getAllTasks();
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
            {/* <div className="washman-header">
                <h2>LEAVE STATUS</h2>
            </div>
            <div className="washman-table-div">
                
            </div>  */}
        </div>}
        </div>
    )
}



export default WashmanDashboardBody;