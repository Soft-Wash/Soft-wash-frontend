import '../../src/styles/UserProfile.css';
import '../../src/styles/DashboardContact.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HouseFill, DashSquareFill, PhoneFill, PersonFill, ListCheck, ListTask } from 'react-bootstrap-icons';
import { FaBookOpen, FaHistory, FaClipboardList, FaListAlt, FaPhoneSquareAlt  } from "react-icons/fa";


function UserSidebarTablet(){

    const expand = "lg";

    return(
        <div className='user-dashboard-nav' >
                <Navbar expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid  className="back-gd">
                        <Navbar.Brand href="#" className='user-tablet-logo '>SOFTWASH</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        className="back-gd"
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton >
                            <Offcanvas.Title className='user-tablet-logo' id={`offcanvasNavbarLabel-expand-${expand}`}>
                            SOFTWASH
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">              
                                <div className='user-dashboard-nav-tabs'>
                                    <Link exact to="/"  className='user-dashboard-nav-links d-flex'>
                                        <HouseFill className='user-tablet-icons'/>Home
                                    </Link>
                                </div>
                                <div className='user-dashboard-nav-tabs'>
                                    <Link exact to="/userdashboard"  className='user-dashboard-nav-links d-flex'>
                                        <DashSquareFill className='user-tablet-icons'/>Dashboard
                                    </Link>
                                </div>
                                <div className='user-dashboard-nav-tabs'>
                                    <Link exact to="/dashboard-contact-us"  className='user-dashboard-nav-links d-flex'>
                                        <FaPhoneSquareAlt  className='user-tablet-icons'/>Contact Us
                                    </Link>
                                </div>
                                <div className='user-dashboard-nav-tabs'>
                                    <Link exact to="/user-profile"  className='user-dashboard-nav-links d-flex'>
                                        <PersonFill className='user-tablet-icons'/>My Profile
                                    </Link>
                                </div>
                                <div className='user-dashboard-nav-tabs'>
                                    <Link exact to="/my-orders"  className='user-dashboard-nav-links d-flex'>
                                        <FaListAlt  className='user-tablet-icons'/>Laundry Order 
                                    </Link>
                                </div>
                                <div className='user-dashboard-nav-tabs'>
                                    <Link exact to="/ClothesSelection"  className='user-dashboard-nav-links d-flex'>
                                        <FaBookOpen className='user-tablet-icons'/>Create Order
                                    </Link> 
                                </div>        
                                <div className='user-dashboard-nav-tabs'>
                                    <Link exact to="/paymenthistory"  className='user-dashboard-nav-links d-flex'>
                                        <FaHistory  className='user-tablet-icons'/>Payment History
                                    </Link> 
                                </div>      
                                <div className='user-dashboard-nav-tabs'>
                                    <Link exact to="/shoporders"  className='user-dashboard-nav-links d-flex'>
                                        <FaClipboardList  className='user-tablet-icons'/>Shop Orders 
                                    </Link> 
                                </div>   
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
    )
}



export default UserSidebarTablet;