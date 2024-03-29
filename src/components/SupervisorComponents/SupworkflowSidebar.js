// import "../../styles/Washman Styles/WashmanSidebar.css"
import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';


function WorkFlowSideBar(){
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
              <CDBSidebarMenuItem icon="columns">Main Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/workflowtask" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Task View</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registeremployee" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Available WashMen</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tasktable" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">All Task</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createtask" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Create Task</CDBSidebarMenuItem>
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


export default WorkFlowSideBar;
