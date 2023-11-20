import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';


function Sidebar (){
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="rgb(13,202,240)" backgroundColor="rgb(11,9,9)">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                SOFTWASH 
              </Link>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Home</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/user-profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/my-orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">My Orders</CDBSidebarMenuItem>
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
        </div>
      );
}



export default Sidebar;