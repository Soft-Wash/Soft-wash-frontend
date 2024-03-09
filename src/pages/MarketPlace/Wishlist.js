import Navigation from "../../common/MarketPlaceNavbar/Navigation";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Wishlist.css";
import { FaRegShareSquare } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Footer from "../../common/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../../services/AxiosInstance";
import Loader from "../../components/Loader/Loader";

function Wishlist() {
  const [wishlist, setWishlist] = useState();
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([]);
  const backend = "http://localhost:8003/uploads/";

  const getWishList = () => {
    const user = JSON.parse(localStorage.getItem("softwashLoginUser"));
    if (user?._id) {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/wishlist/user/wishlist?user_id=${user?._id}`
        )
        .then((resp) => {
          console.log(resp.data);
          setWishlist(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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

  const isInWishlist = (wishlistItems_id) => {
    let x = wishlist?.map((item) => item?.product?._id === wishlistItems_id);
    return x.includes(true);
  };

  const DeleteWishlist = (product_id) => {
    const user_id = JSON.parse(localStorage.getItem("softwashLoginUser"));
    console.log(user_id._id,product_id)
    axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/wishlist/delete/?user=${user_id?._id}&product=${product_id}`
    )
    .then((resp) => {
      console.log(resp.data);
      setWishlist(resp.data);
      toast.success("item removed")
    })
    .catch((error) => {
      console.log(error);
    });

  };

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <div>
      <ToastContainer position="top-center" />
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Navigation />
          <Container className="text-center text-secondary pt-5">
            <h1>Wishlist</h1>
            <p>
              To save your wishlist please{" "}
              <span>
                <Link to="UserLogin" className="link02">
                  login
                </Link>{" "}
              </span>{" "}
              or{" "}
              <span>
                <Link to="UserRegister" className="link02">
                  Sign up
                </Link>{" "}
              </span>
              .
              <p className="mt-3">
                <FaRegShareSquare className="text-center" /> share wishlist
              </p>
            </p>
          </Container>
          <Container>
            <Row>
              {wishlist?.length > 0 ? (
                wishlist.map((item) => (
                  <Col xs={12} sm={12} md={4} lg={4} xl={3} key={item._id}>
                    <Card
                      className="item-card border text-center mt-4"
                      style={{ height: "350px" }}
                    >
                      <FiHeart
                        className={`cart-icon02 ${
                          isInWishlist(item?.product?._id) ? "wishlist_active" : ""
                        }`}
                        onClick={() => DeleteWishlist(item?._id)}
                      />
                      <img
                        src={`${backend}${item?.product?.img}`}
                        className="item-image  mt-5"
                        alt=""
                      />
                      <h5 className="name-tag mt-1">{item?.product?.name}</h5>
                      <p className="price-tag fs-4 m-0">
                        {" "}
                        &#8358;{item?.product?.price}
                      </p>
                      <div>
                        <Button
                          variant="secondary"
                          className="cart-button bg-info border-0 w-75 rounded-0"
                          onClick={() => addToCart(item?.product?._id)}
                        >
                          Add to Cart
                        </Button>{" "}
                      </div>
                    </Card>
                  </Col>
                ))
              ) : (
                <p className="text-center fw-bold">
                  No item avaialable in Wishlist
                </p>
              )}
            </Row>
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Wishlist;
