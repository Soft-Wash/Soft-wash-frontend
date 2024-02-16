import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import "../../styles/UserProfile.css"

function Sidebar (){
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="black" backgroundColor="white">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <Link to="/" className="text-decoration-none" style={{ color: 'black' }}>
                SOFTWASH 
              </Link>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <div className='user-sidebar-hover'>
              <Link exact to="/" activeClassName="activeClicked" >
                <CDBSidebarMenuItem icon="table">Home</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/userdashboard" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="table">Dashboard</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/user-profile" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/my-orders" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="chart-line">Laundry Orders</CDBSidebarMenuItem>
              </Link>
            </div>

            <div className='user-sidebar-hover'>
              <Link exact to="/ClothesSelection" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="chart-line">Create Order</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/paymenthistory" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="chart-line">Payment History</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/shoporders" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="chart-line">Shop Orders</CDBSidebarMenuItem>
              </Link>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
    
            <div className='user-sidebar-hover'>
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
            </div>
          </CDBSidebar>
        </div>
      );
}



export default Sidebar;