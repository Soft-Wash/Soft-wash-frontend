import React, { useEffect } from "react";
import "../../styles/Admin/Register.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { registerUser } from "../../services/register";
import { variableManager } from "../../context/VariablesContext";
// import { Loader } from "../../common/Loader";
import axios from "axios";
import { axiosInstance } from "../../services/AxiosInstance";

export default function Signup() {
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(false);
  const { operation, setUser } = useContext(variableManager);
  const [loading, setLoading] = useState(false);
  const [branches, setbranches] = useState();
  const [roles, setroles] = useState();
  const [roleId, setRoleId] = useState();
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    branch: "",
  });

  useEffect(() => {
    axiosInstance.get("/branch/").then((resp) => {
      setbranches(resp.data);
    });

    axiosInstance.get("/roles/").then((resp) => {
      setroles(resp.data);
    });
  }, []);

  function handleChange(e) {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files[0]
        : e.target.value;
    setUserDetails({ ...userDetails, [e.target.name]: value });
  }

  function handleValidation() {
    const { fullName, email, phone, password, branch, role } = userDetails;
    if (fullName && email && phone && password && branch && role) {
      setLoading(true);
      handleSubmit(userDetails);
      setLoading(false);
      console.log(userDetails);
    } else {
      setEmpty(true);
    }
  }

  function handleSubmit(payload) {
    console.log(payload);
  
    axiosInstance
      .post("employees/create", payload)
      .then((resp) => {
        console.log(resp.data);
        navigate('/admindashboard')
      })
      .catch((error) => {
        console.log(error.message);
      });

  }

  return (
    <div className="signup-container">
      <div className="banner-section">
        <center className="logo-section">
          <h1>SOFT WASH</h1>
        </center>

        <div className="welcome-section">
          <center>
            <p className="welcome">Welcome Back!</p>
            <p className="note text-light pointer">
              Already have an account? Sign In to stay connected.
            </p>

            <div className="button-section">
              <button onClick={() => navigate("/UserLogin")}>Sign In</button>
            </div>
          </center>
        </div>
        <center className="copyright">Copyright © 2023</center>
      </div>

      <div className="form-section">
        <div className="content">
          <center
            className="for-mobile note pointer"
            onClick={() => navigate("UserLogin")}
          >
            Already have an acccount?{" "}
            <span className=" mt-3  fw-bolder">Login</span>
          </center>

          <form>
            <div className="input-section">
              <div>
                <label className="mb-2" htmlFor="fullname">
                  FULL NAME
                </label>
              </div>
              <input
                type="text"
                id="fullname"
                name="fullName"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Dambola Oluwasegun"
              />
              {empty && !userDetails.fullName && (
                <div className="error">Name is required</div>
              )}
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label className="mb-2" htmlFor="Phone">
                  PHONE NUMBER
                </label>
              </div>
              <input
                type="phone"
                id="phone"
                name="phone"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="09029000000"
              />
              {empty && !userDetails.phone && (
                <div className="error">phone number is required</div>
              )}
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label className="mb-2" htmlFor="email">
                  EMAIL ADDRESS
                </label>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="example@value.com"
              />
              {empty && !userDetails.email && (
                <div className="error">Email is required</div>
              )}
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label className="mb-2" htmlFor="password">
                  BRANCH
                </label>
              </div>
              <select
                type="text"
                name="branch"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="" hidden>
                  Select branch
                </option>
                {branches &&
                  branches.map((item) => (
                    <option key={item._d} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              {empty && !userDetails.branch && (
                <div className="error">branch is required</div>
              )}
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label className="mb-2" htmlFor="password">
                  ROLE
                </label>
              </div>
              <select
                type="text"
                name="role"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Role"
              >
                <option value="" hidden>
                  Select Role
                </option>
                {roles &&
                  roles.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              {empty && !userDetails.role && (
                <div className="error">role is required</div>
              )}
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label className="mb-2" htmlFor="password">
                  PASSWORD
                </label>
              </div>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="5+ characters"
              />
              {empty && !userDetails.password && (
                <div className="error">Password is required</div>
              )}
            </div>

            <div className="button-section">
              <button
                disabled={loading} // Disable the button while loading
                onClick={(e) => {
                  e.preventDefault();
                  handleValidation();
                }}
              >
                Sign up
              </button>
            </div>
            <p className="note">
              By clicking "Sign Up" you agree to our Terms of Service and
              Privacy Policy
            </p>
          </form>
        </div>
      </div>
      {/* <Loader color="primary" size="lg" show={loading} /> */}
    </div>
  );
}
