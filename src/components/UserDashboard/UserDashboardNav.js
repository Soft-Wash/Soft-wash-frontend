import { FaBell, FaUserCircle } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';







function UserDashboardNav(){
    return(
        <div className="user-dashboard-nav">
            <Nav defaultActiveKey="/home" as="ul">
                <Link to='/'>Home</Link>
                <Link to='/order-details'>My Orders</Link>
                <Link to='/dashboard-contact-us'>Contact Us</Link>
            </Nav>
            <div>
                <FaBell className='user-nav-icon'/>
            <FaUserCircle className='user-nav-icon'/>
            </div>
        </div>
    )
}


export default UserDashboardNav;