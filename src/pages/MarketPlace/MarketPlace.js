import { Container, Col, Row, Card } from "react-bootstrap";
import Logo from "../../assets/MarketPlace/Images/SoftWash.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import { FiSearch,FiUser,FiShoppingCart } from "react-icons/fi";
import "../../styles/MarketPlace.css"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function MarketPlace() {
  return (
    <div>
      <Container fluid className="nav-container pt-4">
  
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-dark">Home</Nav.Link>
            {/* <Nav.Link href="#action2"></Nav.Link> */}
            <NavDropdown title={<FiUser className="fs-4 text-dark"/>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Transaction History</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Print Invoice
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <FiShoppingCart className="fs-4 "/>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="bg-info border-0" variant="outline-success"><FiSearch className="search-icon"/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Container>

      <Container className="text-center mt-5">
        <h1 className="fs-1 fw-bold">POPULAR</h1>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <Card>

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MarketPlace;
