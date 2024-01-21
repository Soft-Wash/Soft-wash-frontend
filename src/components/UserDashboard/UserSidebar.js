import '../../styles/UserProfile.css';
import '../../styles/DashboardContact.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
// import {useEffect,useState} from "react";


function UserSidebar(){

    return(
    <div className='user-sidebar-div'>
         <div style={{ display: 'flex', height: 'auto', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="rgb(13,202,240)" backgroundColor="rgb(11,9,9)">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                SOFTWASH 
              </Link>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/order-details" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Order Details</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/dashboard-contact-us" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Contact Us</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/user-profile" activeClassName="activeClicked">
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
      </div>
      
    </div>

    )
}

export default UserSidebar;



























// import '../../styles/UserProfile.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
// import {useEffect,useState} from "react"

// function UserSidebar(){


//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };


//   return (
//     <div style={{ display: 'flex', overflow: 'hidden' }}>
//       {/* Hamburger icon for mobile */}
//       <div
//         onClick={toggleSidebar}
//         style={{
//           cursor: 'pointer',
//           display: 'block',
//           padding: '10px',
//           zIndex: 1000,
//           backgroundColor: 'rgb(11,9,9)',
//           color: 'rgb(13,202,240)',
//         }}
//       >
//         <i className="fa fa-bars fa-large"></i>
//       </div>

//       {/* Sidebar */}
//       <div
//         style={{
//           display: isSidebarOpen ? 'block' : 'none',
//           width: '250px',
//           backgroundColor: 'rgb(11,9,9)',
//           color: 'rgb(13,202,240)',
//         }}
//       >
//         <CDBSidebar textColor="rgb(13,202,240)" backgroundColor="rgb(11,9,9)">
//           <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//             <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//               SOFTWASH 
//             </Link>
//           </CDBSidebarHeader>

//           <CDBSidebarContent className="sidebar-content">
//             <CDBSidebarMenu>
//             <Link exact to="/order-details" activeClassName="activeClicked">
//                <CDBSidebarMenuItem icon="columns">Order Details</CDBSidebarMenuItem>
//             </Link>
//             <Link exact to="/dashboard-contact-us" activeClassName="activeClicked">
//                <CDBSidebarMenuItem icon="table">Contact Us</CDBSidebarMenuItem>
//             </Link>
//             <Link exact to="/user-profile" activeClassName="activeClicked">
//                <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
//             </Link>
//              <Link exact to="/analytics" activeClassName="activeClicked">
//                <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
//              </Link>

//              <Link exact to="/hero404" target="_blank" activeClassName="activeClicked">
//                <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
//              </Link>
              
//             </CDBSidebarMenu>
//           </CDBSidebarContent>

//           <CDBSidebarFooter style={{ textAlign: 'center' }}>
//             <div
//               className="sidebar-btn-wrapper"
//               style={{
//                 padding: '20px 5px',
//               }}
//             >
//               LOG OUT
//             </div>
//           </CDBSidebarFooter>
//         </CDBSidebar>
//       </div>
//     </div>
//   );
// }

// export default UserSidebar;