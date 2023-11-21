import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import profilePic from "../../assets/washman/kevin2.jpg";
import { Link } from 'react-router-dom';



function WashmanProfileBody(){

    
    

    return(
        <div className="washman-bg">
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


export default WashmanProfileBody;