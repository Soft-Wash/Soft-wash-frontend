import '../../styles/UserProfile.css';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/Orders/SoftWash.png'
import { FaHome, FaClipboardList, FaPhoneAlt } from "react-icons/fa";
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {useEffect,useState} from "react"

function UserSidebar(){

    return(
        <div className='user-sidebar-profile '>
            <div className='user-sidebar-logo mt-4 mb-4'>
                <img src={logo} alt="" />
            </div>
            <Nav variant="pills" defaultActiveKey="/home">                
                <Link to='/'><FaHome className='sidebar-icon'/>Home</Link>
                <Link to={`/my-orders`}><FaClipboardList className='sidebar-icon'/>My Orders</Link>
                <Link to='/dashboard-contact-us'><FaPhoneAlt className='sidebar-icon'/>Contact Us</Link>
            </Nav>
        </div>
    )
}

export default UserSidebar;


