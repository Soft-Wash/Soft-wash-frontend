import { Col, Container, Button } from "react-bootstrap";
import Banner from "../../components/AddressPage/Banner";
import ThankYou from "../../components/OrdersPage/ThankYou";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../services/AxiosInstance";
import Loader from "../../components/Loader/PaymentLoader";

export default function OrderReceipt() {
  const options = { day: "numeric", month: "long" };
  const [userData, setUserData] = useState();
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [pickUpDateValue, setpickUpDate] = useState();
  const [isLoading, setIsLoading] = useState(true);


  const { orderId } = useParams();
  const navigate = useNavigate();
  const [GetPaymentStatus, setGetPaymentStatus] = useState();
  const [newpaymentType, setNewpaymentType] = useState(null);


  function getPaymentStatus() {
    const ref = JSON.parse(localStorage.getItem("payment_reference"));
    console.log(ref)

    axiosInstance
      .get(`/payments/getstatus?reference=${ref}`)
      .then((resp) => {
        setPaymentStatus(resp.data);
        updatePaymentStatus()
        console.log(resp.data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function getOrderDetails() {
    const order_id = JSON.parse(localStorage.getItem("order_id"))
    console.log(order_id)
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/${order_id}/order`)
      .then((resp) => {
        setUserData(resp.data);
        console.log(resp.data)
        setIsLoading(false);
        const pickUpDate = resp.data.schedule_date;
        const latestDate = new Date(pickUpDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const pickUpDateValue = latestDate.toLocaleDateString("en-US", options);
        setpickUpDate(pickUpDateValue);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Tonavigate() {
        localStorage.setItem("UserId", JSON.stringify(userData?.customer_id?._id));
        navigate(`/my-orders`);
  
  }

  const updatePaymentStatus = () => {
    setIsLoading(true);
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/order/${userData?._id}/update`, {
        payment_status: paymentStatus?.data?.status,
      })
      .then((resp) => {
        console.log(resp.data);
        setIsLoading(false);
        setGetPaymentStatus(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    console.log(newpaymentType)
    // if(newpaymentType === "PayWithCard"){
      getPaymentStatus();
      console.log("calling")
      getOrderDetails();
    // }else{
      getOrderDetails();
    // }
  }, []); 



  useEffect(() => {
    const paymentWithCard = JSON.parse(localStorage.getItem("paymentType"));
    setNewpaymentType(paymentWithCard);
  }, []);

  return (
    <> {isLoading? <Loader/> : <>
    <Banner />
    <ThankYou />
    <div className="center_div">
      <div className="mx-2 mb-5 shadow rounded-5 p-4 px-4 col col-lg-5 col-xs-8">
        {paymentStatus?.data?.status === "success" ? (
          <div>
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
            <div className="d-flex justify-content-between gap-3 ">
              <div lg={3}>
                <h5>Payment Status</h5>
              </div>
              <div lg={3}>
                <p>{paymentStatus?.data?.status}</p>
              </div>
            </div>
          </div>
        ) : newpaymentType === "payWithCash" ? (
          <div>
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
            <div className="d-flex justify-content-between gap-3 ">
              <div lg={3}>
                <h5>payment_status</h5>
              </div>
              <div lg={3}>
                <p>{userData?.payment_status}</p>
              </div>
            </div>
          </div>
        ):""}
      </div>
    </div>
    <Row className="mb-5"></Row>
    <Container className="mt-5 pt-4 d-flex justify-content-center w-75 text-center my-5 gap-3">
      <Col lg={2} md={5} sm={4} className="d-print-none">
        <Link to="/">
          <Button
            variant="outline-primary"
            className="nowrapp me-auto w-75 text-center"
          >
            Back Home
          </Button>
        </Link>
      </Col>
      <Col lg={2} md={5} sm={4} className="d-print-none">
        <Link to="#print">
          <Button
            variant="outline-primary"
            className="nowrapp me-auto w-100 text-center "
            onClick={() => handlePrint()}
          >
            Print Receipt
          </Button>
        </Link>
      </Col>
      <Col lg={3} md={5} sm={4} className="d-print-none">
        <Button
          variant="primary"
          className="nowrapp me-auto w-75 text-center"
          onClick={Tonavigate}
        >
          Check order update
        </Button>
      </Col>
    </Container>
  </>}

    </>
  );
}
