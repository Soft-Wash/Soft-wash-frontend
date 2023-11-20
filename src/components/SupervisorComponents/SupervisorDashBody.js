import React from 'react'
import { FaClipboardList, FaListAlt, FaRegUser} from "react-icons/fa";

import { Link } from 'react-router-dom';
import moment from 'moment';
// import PersonIcon from '@mui/icons-material/Person';
import "../../styles/SupervisorStyles/supervisordashbody.css"


function SupervisorDashBody() {

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
  
    // Get the time of day
    const timeOfDay = getTimeOfDay();
  return (

         <div className="supervisor-bg">
            <div className="supervisor-page-content">
                <div className="supervisor-header">
                    <div className="GreetingMsg">
                        <h2>Good {timeOfDay}! JANE DOE</h2>
                    </div>
                    <div class="dropdown pb-4">
                        <Link href="#" class="d-flex align-items-center text-primary text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <img src="https://github.com/mdo.png" alt="hugenerd" width="" height="50" class="rounded-circle"/> */}
                            {/* <PersonIcon/> */}
                            <span class="d-none d-sm-inline mx-1 text-primary "></span>
                        </Link>
                        <ul class="dropdown-menu dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
                            <li><Link class="dropdown-item" href="#">Profile</Link></li>
                            <li>
                                <hr class="dropdown-divider"/>
                            </li>
                            <li><Link class="dropdown-item" href="#">Sign out</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="washman-dashboard-cards">
                    <div className="washman-card washman-blue">
                        <FaClipboardList className="washman-dashboard-icons "/>
                        <div>
                            <h5>All Orders</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    <div className="washman-card washman-purple">
                        <FaRegUser className="washman-dashboard-icons "/>
                        <div>
                            <h5>All Users</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    <div className="washman-card washman-green">
                        <FaClipboardList className="washman-dashboard-icons "/>
                        <div>
                            <h5>Front Desk</h5>
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
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>       
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
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

export default SupervisorDashBody