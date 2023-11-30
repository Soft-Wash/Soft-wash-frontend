import React from 'react'
import { FaClipboardList, FaListAlt, FaRegUser} from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import bovi from "../../assets/images/bovi.jpeg"
import washman from "../../assets/images/washman.jpg"
import image2 from "../../assets/images/image2.avif"
import { FaArrowAltCircleRight } from "react-icons/fa";

import { Link } from 'react-router-dom';
import moment from 'moment';
// import PersonIcon from '@mui/icons-material/Person';
import "../../styles/SupervisorStyles/supervisordashbody.css"
import InventoryChart from './InentoryChart';


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
                </div>
                <div className="HeaderCards">
                    <div className="supervisor-card washman-blue">
                        <FaClipboardList className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>All Orders</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    <div className="supervisor-card washman-purple">
                        <FaRegUser className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>All Users</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    <div className="supervisor-card washman-green">
                        <FaChalkboardUser className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>FrontDesk</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    <div className="supervisor-card washman-blue">
                        <FaChalkboardUser className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>Washman</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    <div className="supervisor-card washman-green">
                        <FaChalkboardUser className="supervisor-dashboard-icons "/>
                        <div>
                            <h5>Inventory</h5>
                            <h5>3</h5>
                        </div>
                    </div>
                    
                </div>  
                <div className="MainCards d-flex">
                    <Card style={{ width: '18rem', borderColor:"#0DCAF0"}}>
                        <Card.Body>
                            <Card.Title className='mb-5'>SOFT-WASH TEAM</Card.Title>
                            <div className='FrotDesk'>
                                <Card.Subtitle className="mb-3 text-muted px-3">Front Desk</Card.Subtitle>
                                <div className="FrontDesk1 d-flex align-items-center justify-content-between px-3 py-2" >
                                    <img className='RoundedImg' src={bovi} alt="Avatar"></img>
                                    <div className=''>
                                        <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Bovi</div>
                                        <span>online</span>
                                    </div>
                                    
                                </div>
                                <div className="FrontDesk2 d-flex align-items-center justify-content-between px-3 py-2">
                                    <img className='RoundedImg' src={image2} alt="Avatar"></img>
                                    <div className=''>
                                        <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Jack</div>
                                        <span>online</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='Washman'>
                                <Card.Subtitle className="mb-3 mt-3 text-muted px-3">WashMen</Card.Subtitle>
                                <div className="FrontDesk1 d-flex align-items-center justify-content-between px-3 py-2" >
                                    <img className='RoundedImg' src={washman} alt="Avatar"></img>
                                    <div className=''>
                                        <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Bovi</div>
                                        <span>online</span>
                                    </div>
                                    
                                </div>
                                <div className="FrontDesk2 d-flex align-items-center justify-content-between px-3 py-2">
                                    <img className='RoundedImg' src={image2} alt="Avatar"></img>
                                    <div className=''>
                                        <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Jack</div>
                                        <span>online</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <Card.Text>

                            </Card.Text>
                            <Card.Link style={{textDecoration:"none", float:"right"}} href="#">More Details <FaArrowAltCircleRight /></Card.Link>
                        </Card.Body>
                    </Card>
                    <InventoryChart/>
                </div>
                <div className="chart">
                    
                </div>
                {/* <div className="washman-table-div">
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
                </div>  */}
            </div>
        </div>

  )
}

export default SupervisorDashBody