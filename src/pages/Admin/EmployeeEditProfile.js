import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../services/AxiosInstance";
import "../../styles/UserProfile.css";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmployeeEditProfile() {
  const [userData, setUserData] = useState();
  const [realImage, setRealImage] = useState();
  const [inputImage, setinputImage] = useState();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("softwashEmployeeLogin"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/employees/${userId}`)
      .then((resp) => {
        setUserData(resp.data);
      });
  }, []);

  const HandleInputChange = (e) => {
    const value = e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };




  const HandleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setRealImage(file);
      setinputImage(imageUrl);
    }
  };


  const UpdateProfile = () => {
    const formData = new FormData();
    formData.append("fullName", userData.fullName);
    formData.append("phone", userData.phone);
    formData.append("email", userData.email);
    formData.append("address", userData.address);
    formData.append("age", userData.age);
    formData.append("avatar", realImage);
    const userId = JSON.parse(localStorage.getItem("softwashEmployeeLogin"));
    axiosInstance.put(`employees/${userId}/update`, formData).then((resp) => {
      toast.success("update successfull");
    });
  };

  return (
    <div>
      <ToastContainer position="top-center" />
      <div className="d-flex">
        <div className="user-sidebar-div">
          <AdminSidebar />
        </div>
        <div>
          <div className="user-dashboard-bg">
            <div className="user-page-content">
              <div className="user-header">
                <h2>USER PROFILE</h2>
              </div>
              <form
                action="/upload"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="user-profilePic-sec d-flex">
                  {inputImage ? (
                    <div className="user-profilePic">
                      <img
                        src={inputImage}
                        alt="Uploaded"
                        className="uploaded-image"
                      />
                    </div>
                  ) : (
                    <div className="user-profilePic">
                      <img src={userData?.avatar} />
                    </div>
                  )}

                  <label htmlFor="imageUpload" className="user-dp-btn">
                    Change Photo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="imageUpload"
                    name="avatar"
                    className="input-field"
                    hidden
                    onChange={HandleImage}
                  />
                </div>
                <div className="edit_input_divs">
                  <label htmlFor="" className="edit_input_divs">
                    Full Name <br />
                    <input
                      type="text"
                      className="usereditprofile_input"
                      value={userData?.fullName}
                      name="fullName"
                      onChange={HandleInputChange}
                    />
                  </label>{" "}
                  <br /> <br />
                  <label htmlFor="" className="edit_input_divs">
                    Role <br />
                    <input
                      type="text"
                      className="usereditprofile_input"
                      value={userData?.role?.name}
                      name="role"
                      onChange={HandleInputChange}
                    />
                  </label>{" "}
                  <br /> <br />
                  <label htmlFor="" className="edit_input_divs">
                    Age <br />
                    <input
                      type="text"
                      className="usereditprofile_input"
                      value={userData?.age}
                      name="age"
                      onChange={HandleInputChange}
                    />
                  </label>{" "}
                  <br />
                  <br />
                  <label htmlFor="" className="edit_input_divs">
                    Email <br />
                    <input
                      type="text"
                      className="usereditprofile_input"
                      value={userData?.email}
                      name="email"
                      onChange={HandleInputChange}
                    />
                  </label>{" "}
                  <br /> <br />
                  <label htmlFor="" className="edit_input_divs">
                    Address <br />
                    <input
                      type="text"
                      className="usereditprofile_input"
                      value={userData?.address}
                      name="email"
                      onChange={HandleInputChange}
                    />
                  </label>
                </div>
              </form>

              <Button
                className="edit-user-profile-btn"
                onClick={() => UpdateProfile()}
              >
                Update Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeEditProfile;
