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
import img from "../assets/icons/linkedin.png";

function Navigation() {
  const OrderDetails = JSON.parse(localStorage.getItem("orderDetails"));


  const [userLoggedIn, setUserLoggedIn] = useState();
  useEffect(() => {
    const userDetails = localStorage.getItem("softwashLoginUser");
    const userData = JSON.parse(userDetails);
    setUserLoggedIn(userData);
  }, []);
  const navigate = useNavigate();

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
            <Nav.Link target="_blank">
              <NavLink
                className="howitworks-link"
                to="/marketplace"
                target="_blank"
              >
                Shop
              </NavLink>
            </Nav.Link>
            {userLoggedIn ? (
              <NavDropdown title="Activities" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/ClothesSelection" className="color-dark-link">
                    Create Order
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {OrderDetails? <Link to="my-orders" className="color-dark-link">
                    {" "}
                    All Order
                  </Link>:''}

                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  View Order History
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              ""
            )}
          </Nav>
          {userLoggedIn ? (
            <div className="my-auto">
              <div className="d-flex">
                <div
                  className="my-auto position-relative fs-6"
                  style={{
                    top: "0px",
                    right: "30px",
                    height: "20px",
                    width: "40px",
                  }}
                >
                  <small
                    className=" d-flex align-items-center p-1 position-absolute bg-danger text-white fs-6 rounded-circle border border-white"
                    style={{ top: "-4px", right: "9px", height: "20px" }}
                  >
                    3
                  </small>

                  <BsBell className=" fs-4 mr-0" />
                </div>
                <Dropdown
                  className="d-inline mx-2 my-auto"
                  align={{ lg: "end" }}
                >
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    className="bg-transparent text-black border-0 p-0"
                  >
                    <img
                      src={img}
                      alt="profile"
                      className="img-fluid "
                      style={{ height: "36px", width: "auto" }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-4">
                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
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
