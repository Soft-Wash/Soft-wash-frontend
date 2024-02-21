import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function EmployeeProfileBody() {
  const [userData, setUserData] = useState();
  const [realImage,setRealImage]=useState()
  const [inputImage,setinputImage]=useState()
  const backend = "http://localhost:8003/uploads/"

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("softwashEmployeeLogin"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/employees/${userId}`)
      .then((resp) => {
        setUserData(resp.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, []);



  return (

    <div className="user-dashboard-bg">
      <div className="user-page-content">
        <div className="user-header">
          <h2>USER PROFILE</h2>
        </div>
        <div className="user-profilePic-sec d-flex">
          <div className="user-profilePic">
            <img                       src={
                        userData && userData?.avatar
                          ? backend+userData?.avatar
                          : `https://ui-avatars.com/api/?name=${userData?.fullName}&size=128`
                      }/>
          </div>
          <button  className="user-dp-btn">Change Photo</button>

        </div>
        <div>
          <div className="user-profile-field">
            <h4>Full Name</h4>
            <h4>{userData?.fullName}</h4>
          </div>          
          <div className="user-profile-field">
            <h4>Age</h4>
            <h4>{userData?.age}</h4>
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
            <h4>Role</h4>
            <h4>{userData?.role?.name}</h4>
          </div>
         </div>
        <Link to={`/employeeeditprofile/${userData?._id}`}  className="user-form-link">
          <Button className="edit-user-profile-btn">Edit Profile</Button>
        </Link>
      </div>
    </div>


  );
}

export default EmployeeProfileBody;
