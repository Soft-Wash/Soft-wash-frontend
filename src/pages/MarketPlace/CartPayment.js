import React from "react";
import "../../styles/Cartpayment.css";
import card from "../../assets/images/card.jpg";
import cash from "../../assets/images/cash.jpg";
import BookingBanner from "../../components/BookingBanner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../../services/AxiosInstance";

function CartPayment() {
  const [paymentMethod, setpaymentMethod] = useState(() => {
    const storedPayment = localStorage.getItem("paymentType");
    return storedPayment ? JSON.parse(storedPayment) : "";
  });
  const [selectedAddress,setSelectedAddress]=useState(()=>{
    const address = localStorage.getItem('shopDeliveryAddress')
    return address ? JSON.parse(address): "";
  })

  // Calculate Sub Total
  const [subTotal, setSubtotal] = useState();
  const [deliveryFee, setDeliveryFee] = useState();
  const [discount, setDiscount] = useState();
  const [tax, setTax] = useState();
  const [total, setTotal] = useState();
  const [cartItems,setcartItems]=useState()
  function calcSubTotal() {
    const cartTotal = JSON.parse(localStorage.getItem('cartTotal'))
    
    let sub_total = 0;
    let deliveryFee = 1500;
      sub_total += cartTotal;
      const total = sub_total + deliveryFee;
      setTotal(total);
    setSubtotal(sub_total);


  }

  useEffect(() => {
    calcSubTotal();
    const customer_id = localStorage.getItem("softwashLoginUser");
    const parsedCustomerData = customer_id ? JSON.parse(customer_id) : null;
    console.log(parsedCustomerData._id)
    axiosInstance
      .get(`/cart/customer?customer_id=${parsedCustomerData._id}`)
      .then((resp) => {
        console.log(resp.data)
        setcartItems(resp.data);
      });
  }, []);

  

  function handlePaymentPage(e) {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.file[0]
        : e.target.value;


    if (e.target.name.startsWith('devliveryAddy')){
      setSelectedAddress(e.target.value)
    }else{
      setpaymentMethod(e.target.name);
    }
  }

  useEffect(() => {
    localStorage.setItem("paymentType", JSON.stringify(paymentMethod));
    localStorage.setItem("shopDeliveryAddress", JSON.stringify(selectedAddress));

    console.log(paymentMethod); 
  }, [paymentMethod,selectedAddress]);

  const CartIds = cartItems?.map((item)=> item = item._id)
  console.log(CartIds)



  const postOrder = () => {

    const paymentType = JSON.parse(localStorage.getItem("paymentType"));
    const deliveryAddy = JSON.parse(localStorage.getItem("shopDeliveryAddress"));
    if (!paymentType) {
      toast.error("Select Payment Method");
      console.log(paymentMethod)
      return; 
    }
    const customer_id = localStorage.getItem("softwashLoginUser");
    const parsedCustomerData = customer_id ? JSON.parse(customer_id) : null;
    const OrderDetails = {
      customer_id:parsedCustomerData._id,
      cart_ids:CartIds,
      total:total,
      delivery_fee:1500,
      delivery_address:selectedAddress
    }
    console.log(OrderDetails)
    axiosInstance.post('/cartorder/create',OrderDetails )
    .then((resp)=>{
      console.log(resp.data)
      toast.success('order created succesful')
      
    })

  };

  return (
    <div>
      <BookingBanner />
      <ToastContainer position="top-center" />
      <div className="container">
        {/* <EmixNav/> */}
        <div className="p-3">
          <div className="payOps row">
            <div className="payOpsLeft col md-12">
              <div>
                <h5 class="TextColor fw-5">Choose Payment Method</h5>
                <div className="div1 GreyBorder2 rounded-top-3">
                  <div className="PayOpsCard">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "50px",
                      }}
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payWithCard"
                        id="flexRadioDefault1"
                        onChange={(e) => handlePaymentPage(e)}
                        checked={paymentMethod === "payWithCard"}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Pay With Card
                      </label>
                    </div>
                    <div>
                      <img className="PayOpsImg" src={card} alt="" />
                    </div>
                  </div>
                </div>
                <div className="div2 GreyBorder2 mt-2">
                  <div className="PayOpsCash">
                    <div
                      className="PaymtText"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "50px",
                      }}
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payWithCash"
                        id="flexRadioDefault1"
                        onChange={(e) => handlePaymentPage(e)}
                        checked={paymentMethod === "payWithCash"}
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Pay With Cash
                      </label>
                    </div>
                    <div>
                      <img className="PayOpsImg" src={cash} alt="" />
                    </div>
                  </div>
                </div>
                <div className="PickUpDetails GreyBorder mt-3 p-3">
                  <div className="PickUpAddress py-3">
                    <input type="text" placeholder="Enter Delivery Address" className="cart-addressInput" name="devliveryAddy"   onChange={(e) => handlePaymentPage(e)} value={selectedAddress}/>
                  </div>
                  <div className="PickUpDate">
                    <h6 className="fw-bold">Pic-Up Date</h6>
                    <div>
                      <p></p>
                    </div>
                      <p>3-4 working days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="PayOpsRight col md-12">
              <div className="div3 GreyBorder">
                <div className="PriceTab1 d-flex justify-content-between p-3 GreyBorder2">
                  <div>Subtotal</div>
                  <div>₦{subTotal}</div>
                </div>
                <div className="PriceTab2 d-flex justify-content-between p-3 GreyBorder2">
                  <div>Delivery Fees</div>
                  <div>₦{deliveryFee || "1500"} </div>
                </div>
                <div className="PriceTab1 d-flex justify-content-between p-3 GreyBorder2">
                  <div>Discount</div>
                  <div>₦{discount || "0.00"} </div>
                </div>
                <div className="PriceTab1 d-flex justify-content-between p-3 GreyBorder2 ">
                  <div>Tax</div>
                  <div>₦{tax || "0.75"} </div>
                </div>
                <div className="PriceTab1 d-flex justify-content-between p-3 ">
                  <div>
                    <h4>Total</h4>
                  </div>
                  <div>
                    <h4>₦{total || "0.00"}</h4>{" "}
                  </div>
                </div>
              </div>

              <div className="PrevNextBtnRight">
                <button className="btn btn-outline-primary  ">Prev</button>
                <button className="btn btn-info">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PrevNextBtn text-center mt-4 mb-4">
        <Link to="/cart">
          <button className="btn btn-primary px-5 ">Prev</button>
        </Link>
        <button
          className="confirm-button btn btn-primary px-5"
          onClick={postOrder}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
