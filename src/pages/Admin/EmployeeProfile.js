import '../../styles/UserProfile.css';
import '../../styles/UserOrderDetails.css';
import AdminSidebar from "../../components/Admin/AdminSidebar";
import EmployeeProfileBody from '../../components/Admin/EmployeeProfileBody';




function EmployeeProfile(){
    return(
        <div>

            <div className='d-flex'>
                <div className='user-sidebar-div'>
                    <AdminSidebar /> 
                </div>          
                <EmployeeProfileBody />
            </div>
        </div>
    )
}


export default EmployeeProfile;