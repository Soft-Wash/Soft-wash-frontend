import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import profilePic from "../../assets/images/bovi.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/OrdersPage/Sidebar";

function UserEditProfile() {
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
    <div className="d-flex">
    <Sidebar/>
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
          <label htmlFor="">
            Full Name <br />
            <input type="text" className="usereditprofile_input" value={userData?.fullName} />
          </label> <br /> <br />


          <label htmlFor="">
          Phone <br />
            <input type="text" className="usereditprofile_input" value={userData?.phone} />
          </label> <br /> <br />
          <label htmlFor="">
            Email <br />
            <input type="text" className="usereditprofile_input" value={userData?.email} />
          </label> <br /> <br />
          <label htmlFor="">
            Address <br />
            <input type="text" className="usereditprofile_input" value={userData?.address} />
          </label> 
         </div>

          <Button className="edit-user-profile-btn">Update Profile</Button>

      </div>
    </div>
    </div>
  );
}

export default UserEditProfile;
