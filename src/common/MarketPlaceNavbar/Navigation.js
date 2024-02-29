import { Container, Col, Row, Card } from "react-bootstrap";
import Logo from "../../assets/MarketPlace/Images/SoftWash.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { FiSearch, FiUser, FiShoppingCart, FiHeart } from "react-icons/fi";
import "../../styles/MarketPlace.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import { useContext } from "react";

function Navigation() {
  const { cartNotific } = useContext(TaskContext);
  // const cartCount = notification?.length || 0;

  return (
    <div>
      <Container fluid className="nav-container pt-4">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="d-flex align-items-center">
            <Navbar.Brand>
              <Link to="/shop">
                <img src={Logo} alt="" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 d-flex align-items-center"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="d-flex">
                  <Link to="/cart" className="color-dark-link">
                    <FiShoppingCart className="fs-4" />
                    {cartNotific &&
                      cartNotific?.length >
                        0 && (
                          <div className="cart_count_div">
                            <p className="cart_count">{cartNotific?.length}</p>
                          </div>
                        )}
                  </Link>
                  <Link to="/wishlist">
                    <FiHeart className="wishlist_icon" />
                  </Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="bg-info border-0" variant="outline-success">
                  <FiSearch className="search-icon" />
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigation;
