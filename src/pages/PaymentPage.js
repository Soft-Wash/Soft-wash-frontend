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
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader/Loader"



function PaymentPage() {
  const [isloading,setIsLoading]=useState(true)
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState();
  const [selectedDeliveryType, setSelectedDeliveryType] = useState();
  const [selectedAddressInfo, setSelectedAddressInfo] = useState();
  const [customerId, setorderId] = useState();
  const [orderData, setorderData] = useState();
  const [userOrder, setuserOrder] = useState();
  const [newlocaldate, setnewlocaldate] = useState(selectedDate);
  const [validationError, setValidationError] = useState('');
  const [, setFormErrorMessage] = useState("");
  const [paymentMethod,setpaymentMethod]= useState(()=>{
    const storedPayment = localStorage.getItem('paymentType')
    return storedPayment?JSON.parse(storedPayment): ""
  });
  const [customerDetails, setcustomerDetails] = useState();
  const [clothIds, setClothIds] = useState();
  const [deliveryAddy,setDeliveryAddy]=useState()
  const [selectedAddress, setSelectedAddress] = useState({
    contactNumber: "",
    FullAddress: "",
    SearchedAddress: "",
    AddressType: "",
  });

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
    const CustomerAddress = JSON.parse(localStorage.getItem("selectedAddress"))
    setDeliveryAddy(CustomerAddress)
    const DateString = JSON.parse(localStorage.getItem("calenderStartDate"))
    const Time = JSON.parse(localStorage.getItem("calenderSelectedTime"))
    if (Date) {
      const latestDate = new Date(DateString);
      const options = { day: "numeric", month: "long" };
      const pickupValue = latestDate.toLocaleDateString("en-US", options);
      setpickUpDate(pickupValue);
      setIsLoading(false)
  } else {
      console.error("Invalid date string");
  }

 
  }

      // Calculate Sub Total
      const [subTotal, setSubtotal] = useState()
      const [deliveryFee, setDeliveryFee] = useState()
      const [discount, setDiscount] = useState()
      const [tax, setTax] = useState()
      const [total, setTotal] = useState()
      function calcSubTotal(arr){
          let sub_total = 0;
          let deliveryFee = 1500
          arr?.map((item) => {
              let item_price = parseInt(item.price) * item.quantity
              sub_total += item_price
              const total =sub_total + deliveryFee 
              setTotal(total)
          })
          setSubtotal(sub_total)
      
      }

  useEffect(() => {
    getLocalStorageData();
    GetUserDetails();
     calcSubTotal(JSON.parse(localStorage.getItem('softCart')))
  }, []);


function handlePaymentPage(e) {
  const value =
    e.target.type === "checkbox"
      ? e.target.checked
      : e.target.type === "file"
      ? e.target.file[0]
      : e.target.value;

  setpaymentMethod (e.target.name);
}



useEffect(() => {
  localStorage.setItem("paymentType", JSON.stringify(paymentMethod));
}, [paymentMethod]);

const postOrder = async () => {

  const customer_id = localStorage.getItem("softwashLoginUser");
  if(!customer_id){
    navigate("/UserLogin")
  }
  
  const parsedCustomerData = customer_id ? JSON.parse(customer_id) : null;
  const branch_id = JSON.parse(localStorage.getItem('branch_id'))
  const CustomerAddress = JSON.parse(localStorage.getItem("selectedAddress"))
  console.log(CustomerAddress)
  try {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    const deliveryType = JSON.parse(localStorage.getItem('deliveryType'));
    const paymentType = JSON.parse(localStorage.getItem('paymentType'));
    if (!paymentType) {
      toast.error('Select Payment Method');
      return; 
    }
    const paymentkey = Object.values(paymentType);
    const stringPaymentType = paymentkey.join('');
    const orderDetails = {
      subtotal: total,
      delivery_type: deliveryType,
      payment_method: stringPaymentType,
      customer_id: parsedCustomerData?._id,
      branch_id: branch_id,
      deliveryAddress: CustomerAddress?CustomerAddress:selectedAddress,
      pickuptime: selectedTime,
      schedule_date: selectedDate,
      clothtype_ids: clothIds,
    };
    console.log(orderDetails)
    const orderResponse = await axios.post(`${process.env.REACT_APP_BASE_URL}/order/create`,orderDetails)
    console.log(orderResponse?.data)
    const payment_url = `${process.env.REACT_APP_BASE_URL}/payments/initiate-payment`;
    const data = {
      email: userId?.email,
      amount: orderDetails?.subtotal,
      user_id:userId._id,
      metadata: {
        order_id: orderResponse?.data?._id,
        branch_id: orderDetails?.branch_id,
      },
    };
    console.log(data)
    const response = await axios.post(payment_url, data);
    if (response?.data.data.paymentLink && stringPaymentType === "payWithCard" ) {
      window.open(response?.data.data.paymentLink.data.authorization_url, '_blank');
      localStorage.setItem('order_id', JSON.stringify(orderResponse?.data?._id));
      localStorage.removeItem('RecentOrder');
      // localStorage.removeItem('clothQuantity');
      localStorage.removeItem('calenderStartDate');
      // localStorage.removeItem('calenderSelectedTime');
      console.log(response?.data?.data?.body?.reference)
      localStorage.setItem("payment_reference",JSON.stringify(response?.data?.data?.body?.reference))
      const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/order/create`, orderDetails);
      setuserOrder(resp.data);
      localStorage.setItem('orderDetails', JSON.stringify(resp.data));
      // navigate(`/order-receipt/${orderResponse?.data?._id}`);
    }else{
      const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/order/create`, orderDetails);
      setuserOrder(resp.data);
      navigate(`/order-receipt/${orderResponse.data._id}`);
    }
  } catch (error) {
    // Handle errors here
    console.error(error);
    setFormErrorMessage('An error occurred in the payment transaction.');
  }
};


useEffect(() => {
  const clothArray = JSON.parse(localStorage.getItem("softCart"))
  const calenderSelectedTime = localStorage.getItem("calenderSelectedTime");
  const parsedCalenderSelectedTime = calenderSelectedTime
    ? JSON.parse(calenderSelectedTime)
    : null;
  setSelectedTime(parsedCalenderSelectedTime);
  const calenderSetDate = localStorage.getItem("calenderStartDate");
  const storedDate = new Date(JSON.parse(calenderSetDate));
  const parsedCalenderSetDate = storedDate;
  setSelectedDate(parsedCalenderSetDate);
  const clothQuantity = localStorage.getItem("clothQuantity");
  const parsedClothQuantity = clothQuantity
    ? JSON.parse(clothQuantity)
    : null;
  if (parsedClothQuantity) {
    let keys = Object.keys(parsedClothQuantity);
    const values = Object.values(parsedClothQuantity);
    setClothIds(clothArray);
  }
}, []);


const UpdateUserAddress = () => {
  const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
  const storedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
  axiosInstance
    .put(`/users/${userId?._id}/update`, {
      address: storedAddress?.FullAddress,
    })
    .then((resp) => {
      console.log(resp.data)
    });
};

  return (
    <div>
            <ToastContainer position="top-center" />
      {isloading?<Loader/>:<>      <BookingBanner />
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
                        // value={paymentMethod}
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
                        // value={paymentMethod}
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
                      <p>{deliveryAddy?.FullAddress}</p>
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
                </div></>}

    </div>
  );
}

export default PaymentPage;
