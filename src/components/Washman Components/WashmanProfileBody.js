import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import profilePic from "../../assets/washman/kevin2.jpg";
import { Link } from 'react-router-dom';


function WashmanProfileBody(){
    return(
        <div className="washman-bg">
<<<<<<< HEAD
            <div className="washman-content">
                <div className="washman-header">
                    <h2>BASIC INFORMATION</h2>
                </div>
                <div className="washman-image-sec">
                    <div className="washman-profile-pic">
                    <img src={profilePic}/>
                    </div>
                    <Button className="washman-dp-btn">Change Photo</Button>                
                </div>
                <div className="washman-profile-fields">
                    <h4>First Name</h4>
                    <h4>Kevin</h4>
                </div>
                <div className="washman-profile-fields">
                    <h4>Last Name</h4>
                    <h4>Hart</h4>
                </div>
                <div className="washman-profile-fields">
                    <h4>Gender</h4>
                    <h4>Male</h4>
                </div>
                <div className="washman-profile-fields">
                    <h4>Phone Number</h4>
                    <h4>09021112345</h4>
                </div>
            </div>
        </div>
    )
}
=======
            <div className="washman-page-content">
                <div className="washman-header">
                    <h2>WASHMAN PROFILE</h2>
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
            </div>
        </div>
    )
};

>>>>>>> c9a798097d3a475ba761233510a0b5a5ac7d73f1

export default WashmanProfileBody;