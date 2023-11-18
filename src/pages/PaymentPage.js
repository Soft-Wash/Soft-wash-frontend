import React from "react";
import Paymentpage from "../styles/Paymentpage.css";
import card from "../assets/images/card.jpg";
import cash from "../assets/images/cash.jpg";
import BookingBanner from "../components/BookingBanner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../services/AxiosInstance";
import axios from "axios";
import { useParams } from "react-router-dom";

function PaymentPage() {
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState();
  const [selectedDeliveryType, setSelectedDeliveryType] = useState();
  const [selectedAddressInfo, setSelectedAddressInfo] = useState();
  const [customerId, setorderId] = useState();
  const [orderData, setorderData] = useState();
  const [userOrder, setuserOrder] = useState();
  const [newlocaldate, setnewlocaldate] = useState(selectedDate);
  const [selectedAddress, setSelectedAddress] = useState();
  const [paymentMethod,setpaymentMethod]= useState(()=>{
    const storedPayment = localStorage.getItem('paymentType')
    return storedPayment?JSON.parse(storedPayment): ""

  });

  
  const options = { day: "numeric", month: "long" };
  let orderDetails = {};
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [pickUpDateValue, setpickUpDate]=useState()

  function getLocalStorageData() {
    const deliveryType = localStorage.getItem("deliveryType");
    const parsedDeliveryType = deliveryType ? JSON.parse(deliveryType) : null;
    setSelectedDeliveryType(parsedDeliveryType);
  }

  function GetUserDetails() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/${orderId}/order`)
      .then((resp) => {
        console.log(resp.data);
        setorderData(resp.data);
        const pickUpDate = resp.data.schedule_date;
        const latestDate = new Date(pickUpDate);
        const options = { day: "numeric", month: "long" };
        const pickUpDateValue = latestDate?.toDateString("en-US", options);
        setpickUpDate(pickUpDateValue);
      });

  }

      // Calculate Sob Total
      const [subTotal, setSubtotal] = useState()
      const [deliveryFee, setDeliveryFee] = useState()
      const [discount, setDiscount] = useState()
      const [tax, setTax] = useState()
      const [total, setTotal] = useState()
      function calcSubTotal(arr){
          let sub_total = 0;
          arr?.map((item) => {
              let item_price = parseInt(item.price) * item.quantity
              sub_total += item_price
          })
          setSubtotal(sub_total)
          console.log(sub_total)
      }

  useEffect(() => {
    getLocalStorageData();
    GetUserDetails();
     // Calculate sub total
     calcSubTotal(JSON.parse(sessionStorage.getItem('softCart')))
  }, []);


function handlePaymentPage(e){
  const value =
  e.target.type === "checkbox"
  ? e.target.checked
  : e.target.type === "file" 
  ? e.target.file[0]
  : e.target.value

  setpaymentMethod({[e.target.name]:value })
}

useEffect(()=>{
  localStorage.setItem("paymentType", JSON.stringify(paymentMethod));
},[paymentMethod])

  console.log(paymentMethod)

  const postOrder = () => {
    const deliveryType = JSON.parse(localStorage.getItem('deliveryType'))
    const key = Object.keys(deliveryType)
    const stringDeliveryType = key.join("");
    const paymentType = JSON.parse(localStorage.getItem('paymentType'))
    const paymentkey = Object.keys(paymentType)
    const stringPaymenType = paymentkey.join("");
    orderDetails = {
      subtotal: 20000,
      delivery_type: stringDeliveryType,
      payment_method:stringPaymenType
    };
  
    console.log(orderDetails);

    axios
      .put(`${process.env.REACT_APP_BASE_URL}/order/${orderId}/update`, orderDetails)
      .then((resp) => {
        console.log(orderDetails);
        console.log(resp.data);
        setuserOrder(resp.data);
        localStorage.setItem("orderDetails", JSON.stringify(resp.data));
              navigate(`/order-receipt/${orderId}`);
      });
  };


  return (
    <div>
      <BookingBanner />
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
                        onChange={(e)=>handlePaymentPage(e)}
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
                <div className="div2 GreyBorder2">
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
                        onChange={(e)=>handlePaymentPage(e)}
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
                    <h5 class="TextColor pt-3 fw-5">Pick Up Information</h5>
                    <div className="Address py-3">
                      <h6 className="fw-bold">Pic-Up Address</h6>
                      <p>{orderData?.deliveryAddress[0]?.FullAddress}</p>
                      <Link to="/address">
                        <button className="btn btn-outline-primary px-5 ">
                          Change
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="PickUpDate">
                    <h6 className="fw-bold">Pic-Up Date</h6>
                      <div>
                        <p>{pickUpDateValue}</p>
                      </div>

                    <Link to="/date">
                      <button className="btn btn-outline-primary px-5 ">
                        Change
                      </button>
                    </Link>
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
                                <div><h4>Total</h4></div> 
                                <div><h4>₦{total || "0.00"}</h4> </div>
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
                  <Link to="/address">
                    <button className="btn btn-primary px-5 ">
                      Prev
                    </button>
                  </Link>
                  <button className="confirm-button btn btn-primary px-5" onClick={postOrder}>
                    Confirm
                  </button>
                </div>
    </div>
  );
}

export default PaymentPage;
