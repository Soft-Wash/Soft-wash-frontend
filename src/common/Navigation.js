import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { BsBell } from "react-icons/bs";
import { axiosInstance } from "../services/AxiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navigation() {
  const OrderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [userImage, setUserImage] = useState();
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const backend = "http://localhost:8003/uploads/"

  useEffect(() => {
    const userImage = JSON.parse(localStorage.getItem("softwashLoginUser"));
    const userToken = JSON.parse(localStorage.getItem("softwashLoginToken"));
    setUserLoggedIn(userToken);
    if(userToken){
      userData()
    }
  }, []);


  const handleLogout = () => {
   const logOut =  localStorage.clear();
   if(logOut){
    toast.success("logout successful")
    navigate("/");

   }

  };

  const userData=()=>{
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axiosInstance.get(`/users/${userId?._id}`)
    .then((resp)=>{
      setUserImage(resp.data);
    })
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
            <ToastContainer position="top-center" />
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold">
          SOFT-WASH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <NavLink className="howitworks-link" to="/">
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink className="howitworks-link" to="/ourservices">
                Services
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="howitworks-link" to="/how-it-works">
                How it works
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="howitworks-link" to="/about">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="howitworks-link" to="/pricing">
                Pricing
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <Link className="howitworks-link" to="/shop">
                Shop
              </Link>
            </Nav.Link>
          </Nav>
          {userLoggedIn ? (
            <div className="my-auto">
              <div className="d-flex">
                <div
                  className="my-auto position-relative fs-6"
                  style={{
                    top: "0px",
                    right: "0px",
                    height: "20px",
                    width: "40px",
                  }}
                >
                  {/* <small
                    className=" d-flex align-items-center p-1 position-absolute bg-danger text-white fs-6 rounded-circle border border-white"
                    style={{ top: "-4px", right: "9px", height: "20px" }}
                  >
                    
                  </small> */}

                  <BsBell className="fs-4 mr-0" />
                </div>
                <Dropdown
                  className="d-inline mx-2 my-auto"
                  align={{ lg: "end" }}
                >
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    className="bg-transparent text-black border-0 p-0 d-flex align-items-center"
                  >
                    <img
                      src={
                        userImage && userImage?.avatar
                          ? backend+userImage?.avatar
                          : `https://ui-avatars.com/api/?name=${userImage?.fullName}&size=128`
                      }
                      alt="profile"
                      className="border_raduis img-fluid"
                      style={{ height: "36px", width: "auto" }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-4">
                    <Dropdown.Item>
                      <Link className="navigation_link" to="/user-profile">
                        Profile
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="userdashboard" className="navigation_link">
                        Dashboard
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={()=>handleLogout()}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          ) : (
            <Button
              variant="info text-white"
              onClick={() => navigate("/UserRegister")}
            >
              <Nav.Link>Get Started</Nav.Link>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
