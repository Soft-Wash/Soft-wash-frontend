import { Container } from "react-bootstrap";
import Navigation from "../../common/MarketPlaceNavbar/Navigation";
import { Link } from "react-router-dom";
import "../../styles/Cart.css";
import itemImg from "../../assets/MarketPlace/Images/1509621985884_sptows2785_ariel_original_perfume_detergent_powder_1_kg_1024x1024.jpg";

function Cart() {
  return (
    <div>
      <Navigation />
      <Container className="cart-container mt-5">
        <h3>Shopping Cart</h3>
        <p className="mt-4">
          <Link>Continue Shopping</Link>
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
        <hr className="lin01" />
        <div className="items-div d-flex row">
          <div className="d-flex col">
            <img src={itemImg} className="cart-item-img" alt="" />
            <h6 className="item-name">
              Ariel Machine Expert Detergent Powder Ultimate Clean 1.8 kg
              <span className="mobile-totalprice"> <p>&#8358; 4,650.00</p></span>
            </h6>

          </div>
          <div className="price-quantity-div d-flex col">
            <p className="current-price fw-bold">&#8358; 4,650.00</p>
            <div className="price-quantity-div-inner">
            <div className="cart-inpt-div d-flex">
              <button className="cart-inpt-div-btn1">-</button>
              <input type="text" className="cart-input" />
              <button className="cart-inpt-div-btn2">+</button>
            </div>
            <p className="remove-cart">Remove</p>
            </div>
            <p className="total-price fw-bold">&#8358; 4,650.00</p>
            <p className="remove2-cart">Remove</p>

          </div>

        </div>
        <hr  className="lin02" />
      </Container>
    </div>
  );
}

export default Cart;
