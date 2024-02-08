import '../../src/styles/UserProfile.css';
import '../../src/styles/UserOrderDetails.css';
import Sidebar from "../components/OrdersPage/Sidebar";
import UserProfileBody from '../components/UserDashboard/UserProfileBody';
import UserSidebarTablet from '../components/UserSidebarTablet';



function UserProfilePage(){
    return(
        <div>
            <div>
                <UserSidebarTablet />
            </div>
            <div className='d-flex'>
                <div className='user-sidebar-div'>
                    <Sidebar /> 
                </div>          
                <UserProfileBody />
            </div>
        </div>
    )
}


export default UserProfilePage;