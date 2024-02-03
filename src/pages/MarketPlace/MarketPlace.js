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
import axios from "axios"

import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import Navigation from "../../common/MarketPlaceNavbar/Navigation";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MarketPlace() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [buttonClicked, setbuttonClicked]= useState()

  const [shopItems, setshopItems] = useState();
  let wishlist_id = ""


  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem('softwashLoginUser'));
    axios.get(`${process.env.REACT_APP_BASE_URL}/wishlist/user/wishlist?user_id=${user_id._id}`)
      .then((resp) => {
        console.log(resp.data);
        setWishlistItems(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching wishlist items:", error);
      });
    axiosInstance.get("/product/").then((resp) => {
      console.log(resp.data);
      setshopItems(resp.data);
    });
  }, []);

  const addToCart = (item_id) => {
    const CustomerData = JSON.parse(localStorage.getItem("softwashLoginUser"));
    const Customer_id = CustomerData._id;
    const cartData = {
      product_id: item_id,
      quantity: 1,
      customer_id: Customer_id,
    };
    axiosInstance
      .post("/cart/create", cartData)
      .then((resp) => {
        console.log(resp.data);
        toast.success("item added to cart");
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        if (error.response) {
          const status = error.response.status;
          if (status === 400) {
            toast.error("item already in cart");
          } else {
            toast.error("Unexpected error occurred. Please try again later.");
          }
        }
      });
  };

  const AddWishlist = (product_id) => {
    console.log(product_id, "here");
    const user_id = JSON.parse(localStorage.getItem('softwashLoginUser'));
    const wishlistObj = {
      user_id: user_id._id,
      product: product_id
    };
        axios.post(`${process.env.REACT_APP_BASE_URL}/wishlist/create`, wishlistObj)
          .then((resp) => {
            console.log(resp.data);
            setWishlistItems((prevItems) => [...prevItems, product_id]);
            toast.success('item added to wishlist')
          }).catch((error) => {
            console.error("Error adding item to wishlist:", error);
            if (error.response) {
              const status = error.response.status;
              if (status === 400) {
                toast.error("item already in wishlist");
              } else {
                toast.error("Unexpected error occurred. Please try again later.");
              }
            }
          })
  }
  


  const removeWishlistItem = (product_id) => {
    axiosInstance.get('/wishlist/')
    .then((resp)=> {
      console.log(resp.data)

      const wishlist_id = resp?.data?._id
      console.log(wishlist_id)
    //  const _id =wishlist_id.find((wihslist)=> wihslist.product.includes(product_id))._id
    //  console.log('wishlist_id:', _id);
    //   console.log(wishlist_id)
    //   if(_id){
    //     return axiosInstance.delete(`/wishlist/${product_id}/delete`)
    //   }


    })
    .then((resp)=>{
      console.log(resp.data)
    })
    setWishlistItems((prevItems) => prevItems.filter((item) => item !== product_id));

  };

  const isInWishlist = (productId) => {
    return wishlistItems.includes(productId);
  };

  


  return (
    <div>
      <ToastContainer position="top-center" />
      <Navigation />

      <Container className="text-center mt-5">
        <h1 className="fs-1 fw-bold">POPULAR</h1>
      </Container>
      <Container>
        <div>
          <p>
            <Link className="navigation_link2" to="/">
              <span>home</span>{" "}
            </Link>
            /{" "}
            <Link to="/shop" className="navigation_link2">
              <span className="fw-bold">shop</span>
            </Link>
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
                  <FiHeart className={`cart-icon02 ${isInWishlist(item._id) ? 'wishlist_active' : ''}`}  onClick={() => {
                    if (isInWishlist(item._id)) {
                      removeWishlistItem(item._id);
                    } else {
                      AddWishlist(item._id);
                    }
                  }}/>
                  <img src={item.img} className="item-image  mt-5" alt="" />
                  <Link
                    to={`/singleproduct/${item._id}`}
                    className="sibglepagelink"
                  >
                    <h5 className="name-tag mt-1">{item.name}</h5>
                  </Link>
                  <p className="price-tag fs-4 m-0"> &#8358; 4,650</p>
                  <div>
                    <Button
                      variant="secondary"
                      className="cart-button bg-info border-0 w-75 rounded-0"
                      onClick={() => addToCart(item._id)}
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
