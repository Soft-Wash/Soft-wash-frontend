import '../../src/styles/UserProfile.css';
import '../../src/styles/UserOrderDetails.css'
import UserDashboardNav from "../components/UserDashboard/UserDashboardNav";
import UserSidebar from "../components/UserDashboard/UserSidebar";
import UserProfileBody from '../components/UserDashboard/UserProfileBody';
import OrderDetailsBody from '../components/UserDashboard/OrderDetailsBody';


function UserOrderDetailsPage(){
    return(
        <div className='user-dashboard-container'>
            <UserSidebar />
            <div className='user-dashboard-content'>
                <UserDashboardNav />
                <OrderDetailsBody />
            </div>
        </div>
    )
}

export default UserOrderDetailsPage;