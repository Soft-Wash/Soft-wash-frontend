import { Container, Col, Row, Card } from "react-bootstrap";
import Logo from "../../assets/MarketPlace/Images/SoftWash.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import "../../styles/MarketPlace.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiChevronDown } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import Footer from "../../common/Footer";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";

function MarketPlace() {
  const [errorMessage, setErrorMessage] = useState(null);



  const [shopItems,setshopItems]=useState()
  useEffect(()=>{
    axiosInstance.get('/product/')
    .then((resp)=>{
      console.log(resp.data)
      setshopItems(resp.data)

    })
  },[])

  const  addToCart=(item_id)=>{
    const CustomerData = JSON.parse(localStorage.getItem('softwashLoginUser'))
    const Customer_id = CustomerData._id

    const cartData = {
      product_id: item_id,
      quantity:1,
      customer_id:Customer_id
    };

    
    axiosInstance.post('/cart/create',cartData)
    .then((resp)=>{
      console.log(resp.data)
    })
    .catch((error) => {
      console.error("Error adding item to cart:", error);

    });
    
  }





  return (
    <div>
      <Container fluid className="nav-container pt-4">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">
              <img src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/" className="text-dark">
                  Home
                </Nav.Link>
                {/* <Nav.Link href="#action2"></Nav.Link> */}
                <NavDropdown
                  title={<FiUser className="fs-4 text-dark" />}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">
                    Transaction History
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Print Invoice
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">
                  <FiShoppingCart className="fs-4 " />
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

      <Container className="text-center mt-5">
        <h1 className="fs-1 fw-bold">POPULAR</h1>
      </Container>
      <Container>
        <div>
          <p>
            shop / <span className="fw-bold">Laundry</span>{" "}
          </p>
        </div>

        <hr />
      </Container>

      <Container className="mt-5">
        <Row className="justify-content-between">
          <Col sm={6} md={6} lg={6}>
            <div className="select-tag-div">
              <p className="sort-bestselling">Availability:</p>
              <select name="" className="select-tag" id="">
                <option className="" value="All">
                  All
                </option>
                <option value="in Stock">in Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <div className="d-flex ">
              <p className="sort">Sorted by:</p>

              <select name="" className="select-tag" id="">
                <option className="" value="All">
                  Best Selling
                </option>
                <option value="in Stock">Aphabetically, A-Z</option>
                <option value="Out of Stock">Aphabetically, Z-A</option>
              </select>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {shopItems &&
            shopItems.map((item) => (
              <Col xs={12} sm={12} md={4} lg={4} xl={3} key={item.name}>

                  <Card
                    className="item-card border text-center mt-4"
                    style={{ height: "350px" }}
                  >
                    <FiHeart className="cart-icon02" />
                    <img src={item.img} className="item-image  mt-5" alt="" />
                    <Link to={`/singleproduct/${item._id}`} className="sibglepagelink">
                    <h5 className="name-tag mt-1">{item.name}</h5>
                    </Link>
                    <p className="price-tag fs-4 m-0"> &#8358; 4,650</p>
                    <div>
                      <Button
                        variant="secondary"
                        className="cart-button bg-info border-0 w-75 rounded-0"
                        onClick={()=>addToCart(item._id)}
                      >
                        Add to Cart
                      </Button>{" "}
                    </div>
                  </Card>

              </Col>
              
            ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default MarketPlace;
