import "../../styles/Washman Styles/WashmanProfile.css";
import "../../styles/Washman Styles/WashmanDashboard.css";
import { FaClipboardList, FaListAlt} from "react-icons/fa";


function WashmanDashboardBody(){
    return(
        <div className="washman-bg">
            <div className="washman-page-content">
                <div className="washman-header">
                    <h2>WASHMAN DASHBOARD</h2>
                </div>
                <div className="washman-dashboard-cards">
                    <div className="washman-card washman-blue">
                        <FaClipboardList className="washman-dashboard-icons "/>
                        <div>
                            <h5>New Orders</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    <div className="washman-card washman-purple">
                        <FaListAlt className="washman-dashboard-icons "/>
                        <div>
                            <h5>Pending Orders</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    <div className="washman-card washman-green">
                        <FaClipboardList className="washman-dashboard-icons "/>
                        <div>
                            <h5>Completed Orders</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    
                </div>  
                <div className="washman-header">
                    <h2>PENDING ORDERS</h2>
                </div>
                <div className="washman-table-div">
                    <table className="washman-content-table">
                        <thead>
                            <tr>
                                <th>S/No</th>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Quantity</th>
                                <th>Order Status</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>2345673456723456</th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>2345673456723456</th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>2345673456723456</th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>2345673456723456</th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>                           
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    )
}



export default WashmanDashboardBody;