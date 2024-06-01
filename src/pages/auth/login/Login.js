import React from "react";
import "../../../styles/register.css";
import facebook from "../../../assets/icons/facebook.png";
import linkedIn from "../../../assets/icons/linkedin.png";
import googlePlus from "../../../assets/icons/google-plus.png";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotification } from "../../../utils/slicer/notificationSlice";
import { setUserAuth } from "../../../utils/slicer/usersSice";
import { login } from "../../../utils/api/user_api";
import { useEffect } from "react";
import { Spinner } from '@chakra-ui/react'

export default function Login() {
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // Check if the user is authenticated
    if (isAuthenticated) {
      // Navigate to the dashboard
      navigate("/userdashboard");
    }
  }, [isAuthenticated, navigate]);

  const loginUser = async () => {
    setLoading(true);
    let { status, message, token, data } = await login(loginDetails);
    console.log(status)
    if (status) {
      dispatch(setUserAuth({ user: data, token }));
    } else {
      dispatch(
        addNotification({
          type: "error",
          title: "Operation Failed!",
          description: message,
        })
      );
    }
    setLoading(false);
  };

  function handleChange(e) {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files[0]
        : e.target.value;

    setLoginDetails({ ...loginDetails, [e.target.name]: value });
  }

  return (
    <>
      <div className="signup-container login-container">
        <div className="form-section">
          <div className="content">
            <center className="text-center mb-5 p-2">
              <h1>SOFT WASH</h1>
            </center>

            <center className="">
              <h4>Sign In to Soft Wash</h4>
              <div className="icons-section">
                <div className="icon">
                  <img src={facebook} alt="facebook" />
                </div>
                <div className="icon">
                  <img src={googlePlus} alt="google plus" />
                </div>
                <div className="icon">
                  <img src={linkedIn} alt="linkedin" />
                </div>
              </div>
              or use your email account
            </center>

            {/* <form action=""> */}
              <div className="input-section">
                <div>
                  {" "}
                  <label htmlFor="email" className="mb-2 login-label">
                    YOUR EMAIL
                  </label>
                </div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="example@provider.com"
                />
                {empty && !loginDetails.email && (
                  <div className="error">email is required</div>
                )}
              </div>

              <div className="input-section">
                <div className="d-flex justify-content-between mb-2 login-labell ">
                  {" "}
                  <label htmlFor="password login-label2">PASSWORD</label>{" "}
                  <span
                    className="forgot-password pointer"
                    onClick={() => navigate("/auth/reset-password")}
                  >
                    Forgot your password?
                  </span>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="5+ characters"
                />
                {empty && !loginDetails.password && (
                  <div className="error">password is required</div>
                )}
              </div>

              <div className="button-section">
                <button onClick={() => loginUser()}> {loading? <Spinner/> : "Sign in"}</button>
              </div>

              <center
                className="NewToSoftWash"
                onClick={() => navigate("/UserRegister")}
              >
                New User?{" "}
                <span className=" mt-3 text-primary fw-bold">Signup Here</span>
              </center>
            {/* </form> */}
          </div>
        </div>

        <div className="banner-section">
          <center className="logo-sectio">{/* <h5>Eventbux</h5> */}</center>

          <div className="welcome-section blur">
            <center>
              <p className="note text-light">New here?</p>
              <p className="welcome">Join Us Today!</p>

              <div className="button-section">
                <button onClick={() => navigate("/UserRegister")}>
                  Sign Up
                </button>
              </div>
            </center>
          </div>
          <center className="copyright">Copyright © 2023</center>
        </div>
      </div>
    </>
  );
}
