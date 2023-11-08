import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Navigation() {

  const navigate = useNavigate()


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
            <Nav.Link
            >
              <NavLink className="howitworks-link" to="/">
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link >
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
            <NavLink className="howitworks-link" to="/marketplace" target="_blank">
              Shop
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Activities" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Submit Order</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Track Order</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                View Order History
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/UserRegister">Sign up</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
