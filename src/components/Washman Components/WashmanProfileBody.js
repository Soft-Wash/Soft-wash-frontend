import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css"
import profilePic from "../../assets/washman-pic.jpg"

function WashmanProfileBody(){
    return(
        <div className="washman-bg">
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

export default WashmanProfileBody;