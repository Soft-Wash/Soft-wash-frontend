// import { FaUserCircle } from 'react-icons/fa';
// import Button from 'react-bootstrap/Button';


import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import profilePic from "../../assets/washman/kevin2.jpg";
import { Link } from 'react-router-dom';


function UserProfileBody(){
    return(
        // <div className="user-dashboard-body"  >
        //     <h2>User Profile</h2>
        //     <div className="user-body-cols">
        //         <div className='user-profile-col1'>
        //             <div className='user-body-icon-div'>
        //             <FaUserCircle className='user-body-icon'/>
        //             </div>
        //             <h3>Fakaa Gerald</h3>
        //             <h4>Personal Information</h4>
        //         </div>
        //         <div className='user-profile-col2'>
        //             <div className='desc'>
        //                 <h3>Personal Information</h3>
        //                 <Button style={{background: "rgb(13,202,240)", width: "110px"}}>Edit</Button>
        //             </div>
        //             <div className='user-profile-details'>
        //                 <p>Name</p>
        //                 <h4>Faaka Gerald </h4>
        //             </div>
        //             <div className='user-profile-details'>
        //                 <p>Email</p>
        //                 <h4>theboyfakaa@hotmail.com</h4>
        //             </div>
        //             <div className='user-profile-details'>
        //                 <p>Phone</p>
        //                 <h4>0901234578 </h4>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="user-dashboard-bg">
            {/* <div className="washman-page-content">
                <div className="washman-header">
                    <h2>USER PROFILE</h2>
                </div>
                <div className="washman-profilePic-sec d-flex">
                    <div className="washman-profilePic">
                        <img src={profilePic}/>
                    </div>
                    <Button className="washman-dp-btn">Change Photo</Button>
                </div>                
                <div>
                    <div className="washman-profile-field">
                        <h4>First Name</h4>
                        <h4>Peter</h4>
                    </div>
                    <div className="washman-profile-field">
                        <h4>Last Name</h4>
                        <h4>Scott</h4>
                    </div>   
                    <div className="washman-profile-field">
                        <h4>Gender</h4>
                        <h4>Male</h4>
                    </div>  
                    <div className="washman-profile-field">
                        <h4>Email</h4>
                        <h4>peterscott@gmail.com</h4>
                    </div>
                </div>      
                <Link to={"/washman-edit-profile"} className="washman-form-link">
                <Button className="edit-washman-profile-btn">Edit Profile</Button>     
                </Link>  
            </div> */}
        </div>
    )
}

export default UserProfileBody;