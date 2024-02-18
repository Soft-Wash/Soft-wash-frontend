// // import "../../styles/Washman Styles/WashmanSidebar.css"
// import React from 'react';
// import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
// import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// function WashmanSidebar(){
//     return (
//         <div className='washman-sidebar' style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}} >
//           <CDBSidebar className='washman-sidebar-content' textColor="rgb(13,202,240)" backgroundColor="#333">
//             <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//               <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//                 Soft Wash
//               </a>
//             </CDBSidebarHeader>

//             <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <div className='user-sidebar-hover'>
//               <Link exact to="/" activeClassName="activeClicked" >
//                 <CDBSidebarMenuItem icon="table">Home</CDBSidebarMenuItem>
//               </Link>
//             </div>
//             <NavLink exact to="/washman-dashboard" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/washman-orders" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="table">View Orders</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/washman-profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/washman-leave" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Leave Application</CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="exclamation-circle">Leave Application</CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>
    
//             <CDBSidebarFooter style={{ textAlign: 'center' }}>
//               <div
//                 className="sidebar-btn-wrapper"
//                 style={{
//                   padding: '20px 5px',
//                 }}
//               >
//                 Log Out
//               </div>
//             </CDBSidebarFooter>
//           </CDBSidebar>
//         </div>
//       ); 
// }


// export default WashmanSidebar;


import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { Link } from 'react-router-dom';
// import "../../styles/UserProfile.css";
import "../../styles/Washman Styles/WashmanSidebar.css";

function WashmanSidebar (){
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="whitesmoke" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <Link to="/" className="text-decoration-none" style={{ color: 'rgb(13,202,240)' }}>
                SOFTWASH 
              </Link>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>            
            <div className='washman-sidebar-hover'>
              <Link exact to="/washman-dashboard" activeClassName="activeClicked" className='washman-sidebar-hover'>
                <CDBSidebarMenuItem icon="table">Dashboard</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='washman-sidebar-hover'>
              <Link exact to="/washman-orders" activeClassName="activeClicked" className='washman-sidebar-hover'>
                <CDBSidebarMenuItem icon="chart-line"> My Tasks</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='washman-sidebar-hover'>
              <Link exact to="/washman-profile" activeClassName="activeClicked" className='washman-sidebar-hover'>
                <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='washman-sidebar-hover'>
              <Link exact to="/washman-leave" activeClassName="activeClicked" className='washman-sidebar-hover'>
                <CDBSidebarMenuItem icon="chart-line">Leave Application</CDBSidebarMenuItem>
              </Link>
            </div>
            <div className='washman-sidebar-hover'>
              <Link exact to="/washman-leave" activeClassName="activeClicked" className='washman-sidebar-hover'>
                <CDBSidebarMenuItem icon="chart-line">My Items</CDBSidebarMenuItem>
              </Link>
            </div>

            {/* <div className='washman-sidebar-hover'>
              <Link exact to="/paymenthistory" activeClassName="activeClicked" className='washman-sidebar-hover'>
                <CDBSidebarMenuItem icon="chart-line">Payment History</CDBSidebarMenuItem>
              </Link>
            </div> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>
    
            <div className='washman-sidebar-hover'>
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



export default WashmanSidebar;