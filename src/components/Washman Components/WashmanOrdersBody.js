import "../../styles/Washman Styles/WashmanProfile.css"
import "../../styles/Washman Styles/WashmanOrder.css"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function WashmanOrdersBody(){


    const [tasks, setTasks] = useState([]);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const washmanID = "655e49bad160aea8372bde1d";

    useEffect(() => {
        const fetchOrders = async () => {
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

        fetchOrders();
    }, [tasks])

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
                                <th>Order ID</th>
                                <th>Task Status</th>
                                {/* <th>Due Date</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={task._id}>
                                <th>{index + 1}</th>
                                <th>
                                    {task.order_id.map((order) => (
                                        <div>
                                            <Link to={`/washman-single-order/${order._id}`} className="washman-table-link">
                                                {order._id}
                                            </Link>
                                        </div>
                                    ))}
                                </th>                                
                                <th>{task.status}</th>
                                <th>{task.schedule_date}</th>
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