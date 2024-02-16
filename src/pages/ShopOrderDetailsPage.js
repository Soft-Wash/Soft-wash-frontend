import '../../src/styles/UserProfile.css';
import '../../src/styles/UserOrderDetails.css';
import Sidebar from "../components/OrdersPage/Sidebar";
import ShopDetailsBody from '../components/UserDashboard/ShopDetailsBody';
import UserSidebarTablet from '../components/UserSidebarTablet';



function ShopOrderDetailsPage(){

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
                <ShopDetailsBody />
                </div>
            </div>
        </div>
    )
}

export default ShopOrderDetailsPage;