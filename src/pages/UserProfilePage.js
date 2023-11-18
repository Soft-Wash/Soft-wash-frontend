import '../../src/styles/UserProfile.css';
import UserDashboardNav from "../components/UserDashboard/UserDashboardNav";
import UserSidebar from "../components/UserDashboard/UserSidebar";
import UserProfileBody from '../components/UserDashboard/UserProfileBody';



function UserProfilePage(){
    return(
        <div className='d-flex'>
                <UserSidebar />           
                <UserProfileBody />
        </div>
    )
}


export default UserProfilePage;