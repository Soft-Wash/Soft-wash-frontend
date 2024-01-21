import '../../src/styles/UserProfile.css';
import '../../src/styles/UserOrderDetails.css';
import Sidebar from "../components/OrdersPage/Sidebar";
import OrderDetailsBody from '../components/UserDashboard/OrderDetailsBody';
import UserSidebarTablet from '../components/UserSidebarTablet';



function UserOrderDetailsPage(){

    return(
        <div>
            <div className='user-dashboard-nav' >
                <UserSidebarTablet />
            </div>
            <div className='user-dashboard-container '>
                <div className='user-dashboard-content d-flex'>
                <div className='user-sidebar-div'>
                    <Sidebar />
                </div>
                <OrderDetailsBody />
                </div>
            </div>
        </div>
    )
}

export default UserOrderDetailsPage;