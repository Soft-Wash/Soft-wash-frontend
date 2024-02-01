import { Col, Container, Button } from "react-bootstrap";
import Banner from "../../components/AddressPage/Banner";
import ThankYou from "../../components/OrdersPage/ThankYou";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../../assets/Orders/thanks-icon.png";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../services/AxiosInstance";

export default function OrderReceipt() {
  const options = { day: "numeric", month: "long" };
  const [userData, setUserData] = useState();
  const [paymentStatus,setPaymentStatus]=useState()
  const [pickUpDateValue, setpickUpDate] = useState();
  const { orderId } = useParams();
  const navigate = useNavigate();

  const paymentWithCard = JSON.parse(localStorage.getItem("paymentType"))
  const paymentType = Object.values(paymentWithCard);
  const newpaymentType = paymentType.join('')



  function getPaymentStatus(){
    const ref =  JSON.parse(localStorage.getItem("payment_reference"))
    axiosInstance.get(`/payments/getstatus?reference=${ref}`)
    .then((resp)=>{
      setPaymentStatus(resp.data)

    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  function getOrderDetails() {
    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/${orderId}/order`)
      .then((resp) => {
        setUserData(resp.data);
        const pickUpDate = resp.data.schedule_date;
        const latestDate = new Date(pickUpDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const pickUpDateValue = latestDate.toLocaleDateString("en-US", options);
        setpickUpDate(pickUpDateValue);
      });
  }

  function Tonavigate() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/${orderId}/order`)
      .then((resp) => {
        console.log(resp.data);
        setUserData(resp.data);
        const userId = resp.data.customer_id._id;
        console.log(userId);
        localStorage.setItem("UserId", JSON.stringify(userId));
        navigate(`/my-orders`);
      });
  }

  useEffect(() => {
    let intervalId;
  
    if (newpaymentType === "payWithCard") {
      intervalId = setInterval(() => {
        getPaymentStatus();
      }, 5000);
    }
  
    getOrderDetails();
  
    // Return cleanup function
    return () => clearInterval(intervalId);
  }, [newpaymentType]); // Include newpaymentType in the dependency array
  

  return (
    <>
      <Banner />
      <ThankYou />
      <div  className="mx-2 mb-5 shadow rounded-5 p-4 px-4 col col-lg-5 col-xs-8" >
  {paymentStatus?.data?.status === "success" ? (
    <div>
      {/* Display details for successful payment */}
      <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
          <h5>Order Id</h5>
        </div>
        <div lg={3}>
          <p>{userData?._id}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
          <h5>Pickup Date</h5>
        </div>
        <div lg={3}>
          <p>{pickUpDateValue}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
          <h5>Pickup time</h5>
        </div>
        <div lg={3}>
          <p>{userData?.pickuptime}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-3 ">
        <div lg={3}>
          <h5>Final Amount</h5>
        </div>
        <div lg={3}>
          <p>₦{userData?.subtotal}</p>
        </div>
      </div>
    </div>
  ) : paymentStatus?.data?.status === "failed" ? (
    <p className="pendingpayment-ptag">Payment Failed. Please try again or choose another payment method. <br /> <Link to={`/paymentpage/${userData?._id}`}>back</Link></p>
  ) : paymentStatus?.data?.status === "abandoned" ? (
    <p className="pendingpayment-ptag">Payment Abandoned. Please review your order and try again.</p>
  ) : newpaymentType === "payWithCash" ? (   
    <div>
    {/* Display details for successful payment */}
    <div className="d-flex justify-content-between gap-3 mb-2">
      <div lg={3}>
        <h5>Order Id</h5>
      </div>
      <div lg={3}>
        <p>{userData?._id}</p>
      </div>
    </div>
    <div className="d-flex justify-content-between gap-3 mb-2">
      <div lg={3}>
        <h5>Pickup Date</h5>
      </div>
      <div lg={3}>
        <p>{pickUpDateValue}</p>
      </div>
    </div>
    <div className="d-flex justify-content-between gap-3 mb-2">
      <div lg={3}>
        <h5>Pickup time</h5>
      </div>
      <div lg={3}>
        <p>{userData?.pickuptime}</p>
      </div>
    </div>
    <div className="d-flex justify-content-between gap-3 ">
      <div lg={3}>
        <h5>Final Amount</h5>
      </div>
      <div lg={3}>
        <p>₦{userData?.subtotal}</p>
      </div>
    </div>
  </div>
  ) : (
    <p className="pendingpayment-ptag">Loading...</p>
  )}
</div>

      <Row className="mb-5"></Row>

      <Container className="mt-5 pt-4 d-flex justify-content-center w-100 text-center my-5">
        <Col lg={4} md={5} sm={5}>
          <Link to="/">
            <Button
              variant="outline-primary"
              className="me-auto w-75 text-center"
            >
              Back Home
            </Button>
          </Link>
        </Col>
        <Col lg={4} md={5} sm={5}>
          <Button
            variant="primary"
            className="me-auto w-75 text-center"
            onClick={Tonavigate}
          >
            Check order update
          </Button>
        </Col>
      </Container>
    </>
  );
}
