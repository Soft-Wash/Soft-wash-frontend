import '../../styles/UserProfile.css';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/Orders/SoftWash.png'



function UserSidebar(){



    return(
        <div className='user-sidebar'>
            <div className='user-sidebar-logo mt-4'>
                <img src={logo} alt="img-fluid" />
            </div>
            <Nav defaultActiveKey="/home">                
                <Nav.Item>
                    <Nav.Link className='navigate-home' href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/link-1">My Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/link-2">Contact Us</Nav.Link>
                </Nav.Item>
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
