import '../../src/styles/UserProfile.css';
import '../../src/styles/DashboardContact.css'
import UserSidebar from "../components/UserDashboard/UserSidebar";
import UserDashboardContactBody from '../components/UserDashboard/UserDashboardContactBody';
import UserSidebarTablet from '../components/UserSidebarTablet';
import Sidebar from '../components/OrdersPage/Sidebar';




function UserDashboardContactPage(){

    return(
        <div>            
           <div>
                <UserSidebarTablet />
           </div>
            <div className='d-flex'>
                <Sidebar />
                <UserDashboardContactBody />
            </div>
        </div>
    )
}


export default UserDashboardContactPage;