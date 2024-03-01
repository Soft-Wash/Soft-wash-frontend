import { Container } from "react-bootstrap";
import Navigation from "../../common/MarketPlaceNavbar/Navigation";
import { Link } from "react-router-dom";
import "../../styles/Cart.css";
import Button from "react-bootstrap/Button";
import Footer from "../../common/Footer";
import { axiosInstance } from "../../services/AxiosInstance";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

function Cart() {
  const [cartItems, setcartItems] = useState([]);
  const [clothQuantity, setclothQuantity] = useState({});
  const [totalprice, setTotalprice] = useState();
  const Cart_Array = [];
  const navigate = useNavigate();
  const backend = "http://localhost:8003/uploads/";
  const [loading, setLoading] = useState(true);

  const GetCartItems = () => {
    const CustomerData = JSON.parse(localStorage.getItem("softwashLoginUser"));
    const Customer_id = CustomerData?._id;
    if (Customer_id) {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/cart/customer?customer_id=${Customer_id}`
        )
        .then((resp) => {
          const initialQuantity = {};
          resp.data.forEach((item) => {
            initialQuantity[item?.product_id?._id] = item?.quantity;
          });
          setclothQuantity(initialQuantity);
          console.log(resp.data);
          setcartItems(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    GetCartItems();
  }, []);

  const increment = (itemId) => {
    const updatedQuantity = { ...clothQuantity };
    updatedQuantity[itemId] = (updatedQuantity[itemId] || 0) + 1;
    setclothQuantity(updatedQuantity);
    const UpdatedQuantity = updatedQuantity[itemId];

    const Quantity = {
      quantity: UpdatedQuantity,
    };

    setcartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) =>
        item.product_id._id === itemId
          ? { ...item, quantity: UpdatedQuantity }
          : item
      );

      setcartItems(updatedCartItems);
    });

    setTimeout(() => {
      axiosInstance.put(`/cart/${itemId}/update`, Quantity).then((resp) => {});
    }, 30000);
  };

  const decrement = (itemId) => {
    const updatedQuantity = { ...clothQuantity };
    updatedQuantity[itemId] = Math.max((updatedQuantity[itemId] || 0) - 1, 0);
    setclothQuantity(updatedQuantity);
    const updatedId = itemId;
    const UpdatedQuantity = updatedQuantity[itemId];
    const Quantity = {
      quantity: UpdatedQuantity,
    };

    setcartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) =>
        item.product_id._id === itemId
          ? { ...item, quantity: UpdatedQuantity }
          : item
      );

      setcartItems(updatedCartItems);
    });
    setTimeout(() => {
      axiosInstance.put(`/cart/${itemId}/update`, Quantity).then((resp) => {});
    }, 30000);
  };

  const DeleteCartItem = (itemId) => {
    console.log(itemId);
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/cart/${itemId}/delete`)
      .then((resp) => {
        setcartItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
      })
      .catch((error) => {
        console.error("Error deleting item from cart:", error);
      });
  };

  const CalculateTotal = (cartItems) => {
    const total = cartItems.reduce((accumulator, cartItem) => {
      const price = cartItem?.product_id?.price || 0;
      const itemTotal = cartItem?.quantity * price;
      return accumulator + itemTotal;
    }, 0);
    setTotalprice(total);
    localStorage.setItem("cartTotal", JSON.stringify(total));
    return total;
  };

  const NavigateToCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/cartpayment");
    } else {
      toast.error("please login");
    }
  };

  useEffect(() => {
    const result = CalculateTotal(cartItems);
  }, [cartItems]);

  return (
    <div>
      <ToastContainer position="top-center" />
      {loading? <Loader/>:<>      <Navigation />
      <Container className="cart-container mt-5">
        <h3>Shopping Cart</h3>
        <p className="mt-4">
          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </p>
        <div className="cart-description-div row">
          <div className="col">
            <p>Description</p>
          </div>

          <div className="cart-description-div-innerd col">
            <p className="cart-price">Price</p>
            <p className="cart-quantity">Quantity</p>
            <p className="cart-total">Total</p>
          </div>
        </div>
        {cartItems?.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index}>
              <hr className="lin01" />
              <div className="items-div d-flex row">
                <div className="d-flex col text-center">
                  <img
                    src={`${backend}${item?.product_id?.img}`}
                    className="cart-item-img"
                    alt=""
                  />
                  <div className="product_name_div">
                    <h6 className="product_name">{item?.product_id?.name}</h6>
                  </div>

                  <h6 className="item-name">
                    <span className="mobile-totalprice">
                      {" "}
                      <p>&#8358; {item?.product_id?.price}</p>
                    </span>
                  </h6>
                </div>
                <div className="price-quantity-div d-flex col">
                  <p className="current-price fw-bold">
                    &#8358; {item?.product_id?.price}
                  </p>
                  <div className="price-quantity-div-inner">
                    <div className="cart-inpt-div d-flex">
                      <button
                        className="cart-inpt-div-btn1 bg-info"
                        onClick={() => decrement(item?.product_id?._id)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="cart-input"
                        value={
                          clothQuantity[item?.product_id?._id] || item?.quantity
                        }
                      />
                      <button
                        className="cart-inpt-div-btn2 bg-info"
                        onClick={() => increment(item?.product_id?._id)}
                      >
                        +
                      </button>
                    </div>
                    <p
                      className="remove-cart"
                      onClick={() => DeleteCartItem(item?._id)}
                    >
                      Remove
                    </p>
                  </div>
                  <p className="total-price fw-bold">
                    &#8358;{" "}
                    {`${(
                      clothQuantity[item?.product_id?._id] *
                      item?.product_id?.price
                    ).toFixed(2)}`}
                  </p>
                  <p
                    className="remove2-cart"
                    onClick={() => DeleteCartItem(item?._id)}
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center fw-bold">No item avaialable in Cart</p>
        )}

        <hr className="lin02" />
        <div className="sub-total-div row">
          <div className="sub-total-div-inner col col-12 col-md-6 col-lg-6 ">
            <p className="note-ptag">Add a note to your order</p>
            <form action="">
              <textarea
                className="teatarea2"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </form>
          </div>
          <div className="sub-total-div-inner2 col col-12 col-md-6 col-lg-6 ">
            <h4>Subtotal:&#8358; {totalprice}</h4>
            <Button
              variant="secondary"
              className="checkout-button bg-info border-0"
              onClick={() => NavigateToCheckout()}
            >
              Checkout
            </Button>{" "}
          </div>
        </div>
      </Container>
      <Footer /></>}

    </div>
  );
}

export default Cart;
