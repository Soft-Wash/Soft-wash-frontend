import '../../src/styles/UserProfile.css';
import UserDashboardNav from "../components/UserDashboard/UserDashboardNav";
import Sidebar from "../components/OrdersPage/Sidebar";
import UserProfileBody from '../components/UserDashboard/UserProfileBody';



function UserProfilePage(){
    return(
        <div className='d-flex'>
                <Sidebar />           
                <UserProfileBody />
        </div>
    )
}


export default UserProfilePage;