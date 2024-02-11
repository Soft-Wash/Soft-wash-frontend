import { Container, Col, Row, Card } from "react-bootstrap";
import Logo from "../../assets/MarketPlace/Images/SoftWash.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { FiSearch, FiUser, FiShoppingCart,FiHeart } from "react-icons/fi";
import "../../styles/MarketPlace.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiChevronDown } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"

function Navigation(){
  return(
    <div>
      <Container fluid className="nav-container pt-4">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="d-flex align-items-center">
            <Navbar.Brand >
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
                <Nav.Link href="/" className="text-dark">
                  Home
                </Nav.Link>
                <NavDropdown
                  title={<FiUser className="fs-4 text-dark" />}
                  className="d-flex"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">
                    Transaction History
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Print Invoice
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to="/cart" className="d-flex">
                  <Link to="/cart" className="color-dark-link">
                  <FiShoppingCart className="fs-4 " />
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
  )
}

export default Navigation;