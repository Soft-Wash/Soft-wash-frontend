// import "../../styles/Washman Styles/WashmanSidebar.css"
import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';


function AdminSidebar(){
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
            <NavLink exact to="/admindashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employeeprofile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registeremployee" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Create Employee</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createorder" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Create Order</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Create Product</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/expenses" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Expenses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/expensescategory" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Expense Category</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/salesreport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/orderreport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Order Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/expensereport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Expense Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/iventry" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Iventry Managment</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/leave" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Leave</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createleave" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Create Leave</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/workflowtask" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">WorkFlow Task</CDBSidebarMenuItem>
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


export default AdminSidebar;
