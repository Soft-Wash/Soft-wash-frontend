import { FaUserCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


function UserProfileBody(){
    return(
        <div className="user-dashboard-body">
            <h2>User Profile</h2>
            <div className="user-body-cols">
                <div className='user-profile-col1'>
                    <div className='user-body-icon-div'>
                    <FaUserCircle className='user-body-icon'/>
                    </div>
                    <h3>Fakaa Gerald</h3>
                    <h4>Personal Information</h4>
                </div>
                <div className='user-profile-col2'>
                    <div className='desc'>
                        <h3>Personal Information</h3>
                        <Button variant="primary">Primary</Button>
                    </div>
                    <div className='user-profile-details'>
                        <p>Name</p>
                        <h4>Faaka Gerald </h4>
                    </div>
                    <div className='user-profile-details'>
                        <p>Email</p>
                        <h4>theboyfakaa@hotmail.com</h4>
                    </div>
                    <div className='user-profile-details'>
                        <p>Phone</p>
                        <h4>0901234578 </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileBody;