import '../../src/styles/UserProfile.css';
import '../../src/styles/DashboardContact.css'
import UserDashboardNav from "../components/UserDashboard/UserDashboardNav";
import UserSidebar from "../components/UserDashboard/UserSidebar";
import UserProfileBody from '../components/UserDashboard/UserProfileBody';
import UserDashboardContactBody from '../components/UserDashboard/UserDashboardContactBody';


function UserDashboardContactPage(){
    return(
        <div className='user-dashboard-container'>
            <div className='user-sidebar-contact'>
                <UserSidebar />
            </div>
            <div className='user-dashboard-content'>
                <UserDashboardNav />
                <UserDashboardContactBody />
            </div>
        </div>
    )
}


export default UserDashboardContactPage;