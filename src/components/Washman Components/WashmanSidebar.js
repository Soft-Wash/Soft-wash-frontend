// import "../../styles/Washman Styles/WashmanSidebar.css";
import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';


function WashmanSidebar(){
    return (
        <div className='washman-sidebar' style={{display: 'flex', height: 'auto', overflow: 'scroll initial'}} >
          <CDBSidebar className='washman-sidebar-content' textColor="rgb(13,202,240)" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                Soft Wash
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/washman-dashboard" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/washman-orders" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">View Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/washman-profile" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/washman-leave-application" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Leave Application</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
    
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                className="sidebar-btn-wrapper"
                style={{
                  padding: '20px 5px',
                }}
              >
                Log Out
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
      ); 
}


export default WashmanSidebar;