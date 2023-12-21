import { Container, Col, Row, Card } from "react-bootstrap";
import Logo from "../../assets/MarketPlace/Images/SoftWash.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navigation from "../../common/MarketPlaceNavbar/Navigation";
import { FiChevronDown } from "react-icons/fi";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiInstagram,
} from "react-icons/fi";
import "../../styles/SingleProduct.css";
import Accordion from "react-bootstrap/Accordion";
import { FaFacebookSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Footer from "../../common/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../services/AxiosInstance";

function SingleProduct() {
  const [togglereview, setToggleReview] = useState(false);
  const [shopItems, setshopItems] = useState();
  const [moreProduct, setmoreProduct] = useState();
  const productId = useParams();
  const [clothQuantity,setclothQuantity] =useState({})
  const [errorMessage, setErrorMessage] = useState(null);

  const id = productId.productId;
  console.log(id)

  const reviewToggleFunc = () => {
    setToggleReview(!togglereview);
  };

  useEffect(() => {
    axiosInstance.get(`/product/${id}`).then((resp) => {
      setshopItems(resp.data);
    });

    axiosInstance.get(`/product/`).then((resp) => {
      setmoreProduct(resp.data);
    });
  }, []);

  const sliceData = moreProduct?.slice(1, 3);


  const increment=(itemId)=>{
const updatedQuantity = {...clothQuantity}
updatedQuantity[itemId] = (updatedQuantity[itemId] || 0)+1
setclothQuantity(updatedQuantity)
  }

  const decrement=(itemId)=>{
   const updatedQuantity = {...clothQuantity}
    updatedQuantity[itemId] = Math.max((updatedQuantity[itemId] || 0)-1,0)
    setclothQuantity(updatedQuantity)
      }

      const  addToCart=()=>{
        const CustomerData = JSON.parse(localStorage.getItem('softwashLoginUser'))
        console.log(CustomerData)
        const Customer_id = CustomerData._id
        const quantity = parseInt(clothQuantity[shopItems?._id], 10);

        if (isNaN(quantity) || quantity < 1) {
          setErrorMessage('Please add a quantity');
          return; 
        }

        const cartData = {
          product_id: shopItems?._id,
          quantity: clothQuantity[shopItems?._id] || 0,
          customer_id:Customer_id
        };


        console.log(cartData)

        
        axiosInstance.post('/cart/create',cartData)
        .then((resp)=>{
          console.log(resp.data)
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          setErrorMessage("Item already in the cart.");
        });
        
      }



  return (
    <div>
<Navigation/>

      <Container className="mt-5">
        <Row>
          <Col className="singleproduct-item">
            <img src={shopItems?.img} alt="" />
          </Col>
          <Col>
            <p>Canoe / laundry</p>
            <p className="fs-2">{shopItems?.name}</p>
            <div className="d-flex">
              <h5 className="fs-3 text-success">&#8358;{shopItems?.price}</h5>
              <h5 className="underline-price fs-4 mt-1">&#8358; 4,650.00</h5>
            </div>

            <div className="d-flex mt-5">
              <div className="cart-inpt-div d-flex">
                <button className="cart-inpt-div-btn1 bg-info"onClick={() => decrement(shopItems?._id)}>-</button>
                <input type="text" className="cart-input" value={clothQuantity[shopItems?._id] || 0}/>
                <button className="cart-inpt-div-btn2 bg-info" onClick={() => increment(shopItems?._id)}>+</button>
              </div>
              <Button
                variant="secondary"
                className="cart-button2 bg-info border-0 rounded-0"
                onClick={()=>addToCart()}
              >
                Add to Cart
              </Button>{" "}
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="d-flex  mt-5">
              <FiHeart className="wishlist-icon" />
              <p className="wishlist-ptag">Add to Wishlist</p>
            </div>
            <hr />
            <div className="wishlist-hr-div">
              <hr className="wishlist-hr " />
            </div>

            <Accordion defaultActiveKey="0" className="border-0">
              <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>{shopItems?.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="mt-3">
              <p>Share</p>
              <div className="share-icons d-flex">
                <FiInstagram className="instagram-icon" />
                <FaFacebookSquare className="facebook-icon" />
                <FaLinkedin className="Linkedin-icon" />
                <FaEnvelope className="envelop-icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h6 className="">Know Your Product</h6>
        <p>
          Most products come with directions for how to use them but if the
          product is not branded or doesn't have any label or packaging, you can
          check online or ask friends for directions for use. Consumer goods
          products made by manufacturers will typically come with instructions
          for use; if you don't find this enclosed, exercise caution before
          using or consuming any product you're unfamiliar with. It is made by
          one of the most popular manufacturers for this product category and
          there are hundreds of distributors that supply it across supermarkets
          and markets in Lagos, Nigeria. If you want to know where to purchase
          it, the best place to check is an online retailer that you can order
          online from and have delivered to you at home. This is one of the top
          selling products in Nigeria and also one of the most famous brands.
          One of the first questions customers ask about a product is - how much
          does it cost? And the answer is - not a lot if you're buying online
          from Supermart.ng. The undisputed online retailer to get low prices
          and huge discounts always.
        </p>

        <h6 className="mt-5">Find The Best Price</h6>
        <p>
          At Supermart.ng, we offer you the best price on Canoe Extra Care Soap
          With Glycerine 130 g because we source directly from manufacturers and
          suppliers at wholesale pricing. The price of Canoe Extra Care Soap
          With Glycerine 130 g in Nigeria today is currently stable but due to
          inflation in market prices, it can increase by between 5% and 20%
          especially when it is in high demand. At various times in the past,
          the price crashed only for consumers to witness an increase in price
          from sellers in the market. For distributors who are stocking the
          product, the difference between what they charge at various periods is
          largely down to economic forces of demand and supply. Did you know
          that the price of a product will also vary by location? It sells
          between 10% less/more depending on how close the seller is to the
          manufacturer. This price differential takes into consideration the
          cost of logistics and distribution. Better quality products with good
          packaging will no doubt bring high patronage. If you’re looking for an
          independent review of this product, you can check online comparison
          sites for the best reviews from customers that patronise this product
          regularly.
        </p>
      </Container>

      <Container>
        <Card className="customer-reviewcard">
          <h4 className="review-h4">Customer Reviews</h4>
          <p onClick={reviewToggleFunc} className="review-ptag">
            Write a Review
          </p>
        </Card>
        {togglereview ? (
          <Container className="review-container">
            <p>Write a Review</p>
            <form action="">
              <label className="" htmlFor="">
                Name <br />
                <input
                  type="text"
                  className="review-inpt"
                  placeholder="Enter Your Name"
                />
              </label>
              <label className="label01" htmlFor="">
                Email <br />
                <input
                  type="text"
                  className="review-inpt"
                  placeholder="Email"
                />
              </label>
              <p className="mt-3">Rating</p>
              <p></p>
              <label className="label01" htmlFor="">
                Review <br />
                <input
                  type="text"
                  className="review-inpt"
                  placeholder="Give your review a title"
                />
              </label>
              <label className="label01" htmlFor="">
                Body of review <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="review-textarea"
                ></textarea>
              </label>
              <div className="review-btn-div">
                <Button variant="secondary" className="review-btn bg-info">
                  Submit Review
                </Button>{" "}
              </div>
            </form>
          </Container>
        ) : (
          ""
        )}
      </Container>

      <Container className="mt-3">
        <h4>You May Also Like</h4>
        <Row>
          {sliceData &&
            sliceData.map((item) => (
              <Col xs={12} sm={12} md={4} lg={4} xl={3} key={item.name}>
                <Card
                  className="item-card border text-center mt-2"
                  style={{ height: "350px" }}
                >
                  <FiHeart className="cart-icon02" />
                  <img src={item.img} className="item-image  mt-5" alt="" />
                  <h5 className="name-tag mt-1">{item.name}</h5>
                  <p className="price-tag fs-4 m-0"> &#8358; 4,650</p>
                  <div>
                    <Button
                      variant="secondary"
                      className="cart-button bg-info border-0 w-75 rounded-0"
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

export default SingleProduct;
