import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';


function SupplierSideBar(){
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
            <NavLink exact to="/supplierDash" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink exact to="/supplierExpenses" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Expenses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/deliveryReport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Delivery Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/supplierOrderReport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Order Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/supplyorder" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Supply Order</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/supplierLog" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Login</CDBSidebarMenuItem>
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


export default SupplierSideBar;
