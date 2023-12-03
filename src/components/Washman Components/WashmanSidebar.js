// import "../../styles/Washman Styles/WashmanSidebar.css"
import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';


function WashmanSidebar(){
    return (
        <div className='washman-sidebar' style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}} >
          <CDBSidebar className='washman-sidebar-content' textColor="rgb(13,202,240)" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                Soft Wash
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/washman-dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/washman-orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/washman-profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink> */}

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Leave Application</CDBSidebarMenuItem>
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


// style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}} 

// textColor="#fff" backgroundColor="#333"