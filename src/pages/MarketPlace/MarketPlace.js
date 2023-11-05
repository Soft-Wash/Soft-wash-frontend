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
import { FiChevronDown } from "react-icons/fi";
import {  FiHeart } from "react-icons/fi";
import itemImg1 from "../../assets/MarketPlace/Images/1507033810106_sptows2927_so_klin_detergent_190_g_1024x1024.jpg"
import itemImg2 from "../../assets/MarketPlace/Images/1499349122495_spxspz1244_waw_hyper-concentrated_multi-use_detergent_200_g_180x2x.jpg"
import itemImg3 from "../../assets/MarketPlace/Images/1509621985884_sptows2785_ariel_original_perfume_detergent_powder_1_kg_1024x1024.jpg"
import itemImg4 from "../../assets/MarketPlace/Images/1516383180440_spxty4380_waw_multi-purpose_soap_250_g_180x2x2.jpg"
import itemImg5 from "../../assets/MarketPlace/Images/Afer-Ironing-Board-Maxi-130-x-47-cm-Supermart-ng-9833_180x2x.jpg"
import itemImg6 from "../../assets/MarketPlace/Images/1465908830684_spxspy1512_nittol_anti-bacterial_multi-purpose_soap_150_g_180x2x2.jpg"
import itemImg7 from "../../assets/MarketPlace/Images/cloth-hangers-prices-in-lagos-nigeria-75x75.jpg"
import itemImg8 from "../../assets/MarketPlace/Images/cloth-pegs-and-clips-75x75.jpg"
import itemImg9 from "../../assets/MarketPlace/Images/laundry-finishing-tables-lagos-nigeria.jpg"



function MarketPlace() {

  const mockData = [
    {
      name: "Klin Detergent",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg1,
    },
    {
      name: "WAW Detergent",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg2,
    },
    {
      name: "Arial Detergent",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg3,
    },

    {
      name: "Klin Detergent",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg4,
    },
    {
      name: "WAW SOAP",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg5,
    },
    {
      name: "Klin Detergent",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg6,
    },

    {
      name: "Klin Detergent",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg7,
    },
    {
      name: "Klin Detergent",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg8,
    },
    {
      name: "Klin Detergent",
      description: "Experience the cleaning power of Klin Detergent, a trusted solution for tackling tough stains and keeping your clothes fresh and vibrant. Our detergent is specially formulated to provide effective cleaning and fabric care. Say goodbye to stubborn stains and hello to clean, crisp clothing. Available at an affordable price of $3.00.",
      price: "$3.00",
      image: itemImg9,
    },
  
  ];

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
      <Container>
      <div>
            <p>shop / <span className="fw-bold">Laundry</span> </p>
          </div>

          <hr />
      </Container>

      <Container className="mt-5">

            <Row className="justify-content-between">
              <Col sm={6} md={6} lg={6}>
              <div className="d-flex ">
            <p className="sort-bestselling" >Availability:</p>
            <p className="sort-all">All  </p>
            <FiChevronDown className="mt-1"/>
          </div>
              </Col>
              <Col  sm={6} md={6} lg={6}>
              <div className="d-flex ">
            <p className="sort">Sorted by:</p>
            <p className="sort-bestselling sort-all fw-medium">Best Selling</p>
            <FiChevronDown className="mt-1"/>
          </div>
              </Col>
            </Row>
      </Container>

      <Container>
        <Row>
        {mockData && mockData.map((item)=>(
          <Col xs={12} sm={12} md={4} lg={4} xl={3} key={item.name}>

            <Card className="item-card border text-center mt-4"  style={{height:"350px"}}>
            <FiHeart className="cart-icon02"/>
            <img src={item.image} className="item-image  mt-5" alt="" />
            <h5 className="name-tag mt-1">{item.name}</h5>
            <p className="price-tag fs-4 m-0">	&#8358; 4,650</p>
            <div>
            <Button variant="secondary" className="cart-button bg-info border-0 w-75 rounded-0">Add to Cart</Button>{' '}
            </div>

            </Card>
          </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
}

export default MarketPlace;
