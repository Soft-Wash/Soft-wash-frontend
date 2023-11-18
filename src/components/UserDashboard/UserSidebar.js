import '../../styles/UserProfile.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import {useEffect,useState} from "react"

function UserSidebar(){

    return(
        

        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="rgb(13,202,240)" backgroundColor="rgb(11,9,9)">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                SOFTWASH 
              </Link>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/washman-dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/washman-orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View All Orders</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/washman-profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </Link>

            <Link exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
    
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                className="sidebar-btn-wrapper"
                style={{
                  padding: '20px 5px',
                }}
              >
                LOG OUT
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
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
      </div>

    )
}

export default UserSidebar;


