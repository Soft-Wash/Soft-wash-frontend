import { FaBell, FaUserCircle } from 'react-icons/fa';


function UserDashboardNav(){
    return(
        <div className="user-dashboard-nav">
            <FaBell className='user-nav-icon'/>
            <FaUserCircle className='user-nav-icon'/>
        </div>
    )
}


export default UserDashboardNav;