import '../../src/styles/UserProfile.css';
import '../../src/styles/UserOrderDetails.css';
import UserDashboardNav from "../components/UserDashboard/UserDashboardNav";
import Sidebar from "../components/OrdersPage/Sidebar";
// import UserProfileBody from '../components/UserDashboard/UserProfileBody';
import OrderDetailsBody from '../components/UserDashboard/OrderDetailsBody';


function UserOrderDetailsPage(){
    return(
        <div className='user-dashboard-container '>

            <div className='user-dashboard-content d-flex'>
            <Sidebar />
            <OrderDetailsBody />
            </div>
        </div>
    )
}

export default UserOrderDetailsPage;