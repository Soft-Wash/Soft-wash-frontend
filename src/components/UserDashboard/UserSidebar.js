import '../../styles/UserProfile.css';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/Orders/SoftWash.png'
import { FaHome, FaClipboardList, FaPhoneAlt } from "react-icons/fa";
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function UserSidebar(){



    return(
        <div className='user-sidebar-profile '>
            <div className='user-sidebar-logo mt-4 mb-4'>
                <img src={logo} alt="" />
            </div>
            <Nav variant="pills" defaultActiveKey="/home">                
                <Link to='/'><FaHome className='sidebar-icon'/>Home</Link>
                <Link to='/order-details'><FaClipboardList className='sidebar-icon'/>My Orders</Link>
                <Link to='/dashboard-contact-us'><FaPhoneAlt className='sidebar-icon'/>Contact Us</Link>
            </Nav>
        </div>
    )
}

export default UserSidebar;









// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import "../styles/UserProfile.css"

// function UserSidebar() {
//   return (
//     <div className="user-sidebar">
//       <Nav variant="pills" defaultActiveKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/link-1">Link 1</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/link-2">Link 2</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </div>
//   );
// }

// export default UserSidebar;
