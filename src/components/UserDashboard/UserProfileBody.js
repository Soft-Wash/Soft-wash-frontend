import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import profilePic from "../../assets/images/bovi.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfileBody() {
  const [userData, setUserData] = useState();
  const [realImage,setRealImage]=useState()
  const [inputImage,setinputImage]=useState()

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/${userId._id}`)
      .then((resp) => {
        console.log(resp.data);
        setUserData(resp.data)
      });
  }, []);


  const HandleImage=(e)=>{
    const file = e.target.files[0]
    if(file){
      const imageUrl = URL.createObjectURL(file)
      setRealImage(file)
      setinputImage(imageUrl)
      console.log(file)
      

    }

  }

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
          <label htmlFor="imageUpload" className="user-dp-btn">Change Photo</label>
          <input
                    type="file"
                    accept="image/*"
                    id="imageUpload"
                    name="img"
                    className="input-field"
                    hidden
                    onChange={HandleImage}
                  />
        </div>
        <div>
          <div className="user-profile-field">
            <h4>Full Name</h4>
            <h4>{userData?.fullName}</h4>
          </div>

          <div className="user-profile-field">
            <h4>Phone</h4>
            <h4>{userData?.phone}</h4>
          </div>
          <div className="user-profile-field">
            <h4>Email</h4>
            <h4>{userData?.email}</h4>
          </div>
          <div className="user-profile-field">
            <h4>Address</h4>
            <h4>{userData?.address}</h4>
          </div>
          <div className="user-profile-field">
            <h4>Verified</h4>
            <h4>{userData?.isVerified}</h4>
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
