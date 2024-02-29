import '../../styles/UserProfile.css';
import '../../styles/UserOrderDetails.css';
import AdminSidebar from "../../components/Admin/AdminSidebar";
import EmployeeProfileBody from '../../components/Admin/EmployeeProfileBody';
import SupervisorSideBar from '../../components/SupervisorComponents/SupervisorSideBar';
import SupEmployeeProfileBody from '../../components/SupervisorComponents/SupEmployeeProfileBody';




function SupEmployeeProfile(){
    return(
        <div>

            <div className='d-flex'>
                <div className='user-sidebar-div'>
                    <SupervisorSideBar /> 
                </div>          
                <SupEmployeeProfileBody />
            </div>
        </div>
    )
}


export default SupEmployeeProfile;