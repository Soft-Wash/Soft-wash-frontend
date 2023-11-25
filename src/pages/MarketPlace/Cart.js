import { Container } from "react-bootstrap";
import Navigation from "../../common/MarketPlaceNavbar/Navigation";
import { Link } from "react-router-dom";
import "../../styles/Cart.css";
import Button from "react-bootstrap/Button";
import itemImg from "../../assets/MarketPlace/Images/1509621985884_sptows2785_ariel_original_perfume_detergent_powder_1_kg_1024x1024.jpg";
import Footer from "../../common/Footer";
import { axiosInstance } from "../../services/AxiosInstance";
import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setcartItems] = useState([]);
  const [clothQuantity,setclothQuantity]=useState({})

  const GetCartItems = () => {
    const CustomerData = JSON.parse(localStorage.getItem("softwashLoginUser"));
    const Customer_id = CustomerData._id;

    axiosInstance
      .get(`/cart/customer?customer_id=${Customer_id}`)
      .then((resp) => {
      
        setcartItems(resp.data);
        console.log(cartItems);
      });
  };

  useEffect(() => {
    GetCartItems();
  }, []);

  const increment=(itemId)=>{
    const updatedQuantity = {...clothQuantity}
    updatedQuantity[itemId]= (updatedQuantity[itemId] || 0)+1
    setclothQuantity(updatedQuantity)
  }


const decrement =(itemId)=>{
  const updatedQuantity={...clothQuantity}
  updatedQuantity[itemId]=Math.max((updatedQuantity[itemId]||0)-1,0)
  setclothQuantity(updatedQuantity)
}


const DeleteCartItem=(itemId)=>{
  console.log(itemId)
  axiosInstance.delete(`/cart/${itemId}`)
  .then((resp)=>{
    console.log(resp.data)
    setcartItems(resp.data)
  })
  .catch((error)=>{
    console.error("Error deleting item from cart:", error);
  })
}
  

  return (
    <div>
      <Navigation />
      <Container className="cart-container mt-5">
        <h3>Shopping Cart</h3>
        <p className="mt-4">
          <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
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
        {cartItems &&
          cartItems.map((item,index) => (
            <div key={index}>
              <hr className="lin01" />
              <div className="items-div d-flex row">
                <div className="d-flex col">
                  <img src={item.product_id.img} className="cart-item-img" alt="" />
                  <h6 className="item-name">
                   
                    <span className="mobile-totalprice">
                      {" "}
                      <p>&#8358; {item.product_id.price}</p>
                    </span>
                  </h6>
                </div>
                <div className="price-quantity-div d-flex col">
                  <p className="current-price fw-bold">&#8358; {item.product_id.price}</p>
                  <div className="price-quantity-div-inner">
                    <div className="cart-inpt-div d-flex">
                      <button className="cart-inpt-div-btn1 bg-info" onClick={()=>decrement(item.product_id._id)}>-</button>
                      <input type="text" className="cart-input" value={clothQuantity[item.product_id._id] || 0}/>
                      <button className="cart-inpt-div-btn2 bg-info" onClick={()=>increment(item.product_id._id)}>+</button>
                    </div>
                    <p className="remove-cart" onClick={()=>DeleteCartItem(item._id)}>Remove</p>
                  </div>
                  <p className="total-price fw-bold">&#8358; {item.product_id.price}</p>
                  <p className="remove2-cart" onClick={()=>DeleteCartItem(item._id)}>Remove</p>
                </div>
              </div>
            </div>
          ))}

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
            <h4>Subtotal:&#8358; 4,650.00</h4>
            <Button
              variant="secondary"
              className="checkout-button bg-info border-0"
            >
              Checkout
            </Button>{" "}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Cart;
