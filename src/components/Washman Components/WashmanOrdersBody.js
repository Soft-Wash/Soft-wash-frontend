import "../../styles/Washman Styles/WashmanProfile.css"
import "../../styles/Washman Styles/WashmanOrder.css"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function WashmanOrdersBody(){


    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [washmanID, setWashmanID] = useState("")


    useEffect(() => {
        const getID = () =>{
            const storedUserId = localStorage.getItem("softwashEmployeeLogin");
            if (storedUserId) {
                setWashmanID(JSON.parse(storedUserId));
            }
            console.log(washmanID)
          }
          

        const fetchTasks = async () => {
            try{
                setLoading(true);
                setError(null);
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/task/employee/${washmanID}/tasks`)
                setTasks(response.data)
                console.log(tasks)
            }
            catch (error) {
                setError(error.message || 'An error occurred while fetching orders.');
            } 
            finally {
                setLoading(false);
            }
        }
        getID();
        if(washmanID){
            fetchTasks();
          }
        
    }, [])

    return(
        <div className="washman-bg">
            <div className="washman-page-content">
                <div className="washman-header">
                    <h2>WASHMAN ORDERS</h2>
                </div>     
                <div className="washman-table-div">
                    <table className="washman-content-table">
                        <thead>
                            <tr>
                                <th>S/No</th>
                                <th>Task ID</th>
                                <th>Task Status</th>
                                <th>Task Type</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={task._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div>
                                        <Link to={`/washman-single-order/${task._id}`} className="washman-table-link">
                                            {task._id}
                                        </Link>
                                    </div>
                                </td>                                
                                <td>{task.status}</td>    
                                <td>{task.taskType}</td>  
                                <td>{task.note}</td>          
                            </tr>                                    
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default WashmanOrdersBody;