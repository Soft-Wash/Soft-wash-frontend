import '../../src/styles/UserProfile.css';
import '../../src/styles/DashboardContact.css'
import UserDashboardNav from "../components/UserDashboard/UserDashboardNav";
import UserSidebar from "../components/UserDashboard/UserSidebar";
import UserProfileBody from '../components/UserDashboard/UserProfileBody';
import UserDashboardContactBody from '../components/UserDashboard/UserDashboardContactBody';


function UserDashboardContactPage(){
    return(
        <div className='d-flex'>
            <UserSidebar />
            <UserDashboardContactBody />
        </div>
    )
}


export default UserDashboardContactPage;