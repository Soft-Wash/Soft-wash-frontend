// import "../../styles/Washman Styles/WashmanSidebar.css"
import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AdminSidebar(){
    return (
        <div className='washman-sidebar' style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}} >
          <CDBSidebar className='washman-sidebar-content' textColor="rgb(13,202,240)" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <Link href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                Soft Wash
              </Link>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admindashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employeeprofile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registeremployee" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus-circle">Create Employee</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createorder" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus-circle">Create Order</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus-circle">Create Product</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/expenses" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="money-bill-alt">Expenses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/expensescategory" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list-alt">Expense Category</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/salesreport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/orderreport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file-alt">Order Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/expensereport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file-invoice-dollar">Expense Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/iventry" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="box-open">Iventry Managment</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/leave" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar-minus">Leave</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createleave" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar-plus">Create Leave</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/workflowtask" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tasks">WorkFlow Task</CDBSidebarMenuItem>
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
