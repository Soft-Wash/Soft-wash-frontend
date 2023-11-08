import '../../src/styles/UserProfile.css';
import UserDashboardNav from "../components/UserDashboard/UserDashboardNav";
import UserSidebar from "../components/UserDashboard/UserSidebar";
import UserProfileBody from '../components/UserDashboard/UserProfileBody';



function UserProfilePage(){
    return(
        <div className='user-dashboard-container'>
            <UserSidebar />
            <div className='user-dashboard-content'>
                <UserDashboardNav />
                <UserProfileBody />
            </div>
        </div>
    )
}


export default UserProfilePage;