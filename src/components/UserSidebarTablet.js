import '../../src/styles/UserProfile.css';
import '../../src/styles/DashboardContact.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

import Offcanvas from 'react-bootstrap/Offcanvas';



function UserSidebarTablet(){

    const expand = "lg";

    return(
        <div className='user-dashboard-nav' >
                <Navbar expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid >
                        <Navbar.Brand href="#" className='user-tablet-logo '>SOFTWASH</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        className="back-gd"
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='user-tablet-logo' id={`offcanvasNavbarLabel-expand-${expand}`}>
                            SOFTWASH
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">              
                                <Link exact to="/"  className='user-dashboard-nav-links'>
                                    Home
                                </Link>
                                <Link exact to="/dashboard-contact-us"  className='user-dashboard-nav-links'>
                                    User Dashboard
                                </Link>
                                <Link exact to="/user-profile"  className='user-dashboard-nav-links'>
                                    User Profile
                                </Link>
                                <Link exact to="/order-details"  className='user-dashboard-nav-links'>
                                    Order Details
                                </Link>
                                <Link exact to="/wishlist"  className='user-dashboard-nav-links'>
                                    Wishlist
                                </Link>                
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
    )
}



export default UserSidebarTablet;