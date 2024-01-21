import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import profilePic from "../../assets/images/bovi.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfileBody() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const UserId = JSON.parse(localStorage.getItem("UserId"));
    console.log(UserId);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/${UserId}`)
      .then((resp) => {
        console.log(resp.data);
        setUserData(resp.data)
      });
  }, []);

  return (
    <div className="user-dashboard-bg">
      <div className="user-page-content">
        <div className="user-header">
          <h2>USER PROFILE</h2>
        </div>
        <div className="user-profilePic-sec d-flex">
          <div className="user-profilePic">
            <img src={profilePic} />
          </div>
          <Button className="user-dp-btn">Change Photo</Button>
        </div>
        <div>
          <div className="user-profile-field">
            <h4>Full Name</h4>
            <h4>{userData?.fullName}</h4>
          </div>          
          <div className="user-profile-field">
            <h4>Phone</h4>
            {/* <h4>{userData.phone}</h4> */}
          </div>
          <div className="user-profile-field">
            <h4>Email</h4>
            <h4>{userData?.email}</h4>
          </div>
         </div>
        <Link to={"/user-edit-profile"} className="user-form-link">
          <Button className="edit-user-profile-btn">Edit Profile</Button>
        </Link>
      </div>
    </div>
  );
}

export default UserProfileBody;
