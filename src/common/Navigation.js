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
import axiosInstance from "./../services/AxiosInstance";
import "react-toastify/dist/ReactToastify.css";
import routes from "./../routes";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "./../utils/slicer/usersSice";
import { resetOrder } from "./../utils/slicer/orderSlice";

function Navigation() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [userImage, setUserImage] = useState();
  const navigate = useNavigate();
  const backend = "http://localhost:8003/uploads/";
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      userData();
    }
  }, []);

  const userData = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axiosInstance
      .get(`/users/${userId?._id}`)
      .then((resp) => {
        setUserImage(resp.data);
      })
      .catch((error) => {});
  };

  const homeRoute = routes.find((route) => route.name === "HOME");
  const homeChildren = homeRoute
    ? homeRoute.children.filter((child) =>
        ["SERVICES", "PRICING", "ABOUT", "HOW IT WORK", "SHOP"].includes(
          child.name
        )
      )
    : [];

  const navigationRoutes = [{ name: "HOME", path: "/" }, ...homeChildren];

  const logOut = () => {
    dispatch(resetOrder());
    dispatch(resetUser());
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
            {navigationRoutes.map((route) => (
              <Nav.Link key={route.path}>
                <NavLink className="howitworks-link" to={route.path}>
                  {route.name}
                </NavLink>
              </Nav.Link>
            ))}
          </Nav>
          {isAuthenticated ? (
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
                  <small
                    className=" d-flex align-items-center p-1 position-absolute  text-info fs-6 rounded-circle border border-info text-bold"
                    style={{ top: "-4px", right: "9px", height: "20px" }}
                  >
                    2
                  </small>
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
                          ? backend + userImage?.avatar
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
                    <Dropdown.Item
                      onClick={() => {
                        logOut();
                      }}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="info text-white">Get Started</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
