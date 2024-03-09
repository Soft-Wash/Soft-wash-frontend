import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserProfileBody() {
  const [userData, setUserData] = useState();
  const [realImage, setRealImage] = useState();
  const [inputImage, setinputImage] = useState();
  const [loading, setLoading] = useState(true);
  const backend = "http://localhost:8003/uploads/";

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/${userId._id}`)
      .then((resp) => {
        setUserData(resp.data);
        setLoading(false);
      }).catch((error)=>{
        toast.error(error.message)
      });
  }, []);

  const HandleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setRealImage(file);
      setinputImage(imageUrl);
    }
  };

  return (
    <div className="user-dashboard-bg">
                  <ToastContainer position="top-center" />
      {loading ? (
        <Loader />
      ) : (
        <div className="user-page-content">
          <div className="user-header">
            <h2>USER PROFILE</h2>
          </div>
          <div className="user-profilePic-sec d-flex">
            <div className="user-profilePic">
              <img
                src={
                  userData && userData?.avatar
                    ? backend + userData?.avatar
                    : `https://ui-avatars.com/api/?name=${userData?.fullName}&size=128`
                }
              />
            </div>
            <label htmlFor="imageUpload" className="user-dp-btn">
              Change Photo
            </label>
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
          </div>
          <Link
            to={`/usereditprofile/${userData?._id}`}
            className="user-form-link"
          >
            <Button className="edit-user-profile-btn">Edit Profile</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default UserProfileBody;
