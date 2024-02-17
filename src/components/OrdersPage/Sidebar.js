import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import "../../styles/UserProfile.css"
import { HouseFill, DashSquareFill, PhoneFill, PersonFill, ListCheck, ListTask } from 'react-bootstrap-icons';

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
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/userdashboard" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="tachometer-alt">Dashboard</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/user-profile" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/my-orders" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="shopping-cart">Laundry Orders</CDBSidebarMenuItem>
              </Link>
            </div>

            <div className='user-sidebar-hover'>
              <Link exact to="/ClothesSelection" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="plus-circle">Create Order</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/paymenthistory" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="money-check-alt">Payment History</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/shoporders" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="shopping-cart">Shop Orders</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='user-sidebar-hover'>
              <Link exact to="/dashboard-contact-us" activeClassName="activeClicked" className='user-sidebar-hover'>
                <CDBSidebarMenuItem icon="info-circle">About Us</CDBSidebarMenuItem>
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