import "../../styles/UserOrderDetails.css";
import {
  FaCircleInfo,
  FaHotTubPerson,
  FaMoneyCheckDollar,
} from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { Container, Col, Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderDetailsBody() {

  const [orderdetails, setorderDetails] = useState();
  const [pickUpDateValue, setpickUpDate] = useState();
  const [indexFound, setIndexFound] = useState(0);
  const [togglereview, setToggleReview] = useState(false);
  const [reviewData,setReviewData]=useState([
  ])
  
  const orderStatusArray = [
    "Order Placed",
    "Confirmed",
    "Received",
    "Cleaning",
    "Ready",
    "Shipped",
    "Delivered",
  ];

  const reviewToggleFunc = () => {
    setToggleReview(!togglereview);
  };


  useEffect(() => {
    const orderId = JSON.parse(localStorage.getItem("OrderDetailsId"));
    axios.get(`${process.env.REACT_APP_BASE_URL}/order/${orderId}/order`).then((resp) => {
      const statusIndex = orderStatusArray.indexOf(resp.data.status);
      setIndexFound(statusIndex >= 0 ? statusIndex : 0);
      setorderDetails(resp.data);
      const pickUpDate = resp.data.schedule_date;
      const latestDate = new Date(pickUpDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const pickUpDateValue = latestDate.toLocaleDateString("en-US", options);
      setpickUpDate(pickUpDateValue);
    });
  }, []);

  const HandleReview=(e)=>{
const value =e.target.value 
setReviewData({ ...reviewData, [e.target.name]:value})
  }

  console.log(reviewData)

  const createReview=()=>{
    const orderId = JSON.parse(localStorage.getItem("OrderDetailsId"));
    const user_id = JSON.parse(localStorage.getItem("softwashLoginUser"))
    const ReviewDetails = {
      user_id:user_id._id,
      order_id:orderId,
      name:reviewData?.name,
      message:reviewData.message
    }

axios.post(`${process.env.REACT_APP_BASE_URL}/review/review/create`,ReviewDetails)
.then((resp)=>{
  toast.success('review created')
})
.catch((error)=>{
  toast.error(error.message)
  console.log(error.message)
})
  }

  return (
    <div className="dashboard-bg">
             <ToastContainer position="top-center" />
      <h4 className="order-details-tag">Order Details</h4>

      <div className="user-dashboard-contact-body">
        <div className="order-header">
          <FaCircleInfo className="green-icon" />
          <h4>Order info</h4>
        </div>
        <div className="order-field">
          <h3>Order Id </h3>
          <p>{orderdetails?._id.substring(0, orderdetails?._id.length / 2)}</p>
        </div>
        <div className="order-field">
          <h3>Pickup Date & Time </h3>
          <p>{`${pickUpDateValue} ${orderdetails?.pickuptime}`}</p>
        </div>
        <div className="order-field">
          <h3>Status</h3>
          <p>{orderdetails?.status}</p>
        </div>
        <div className="order-header">
          <FaHotTubPerson className="green-icon" />
          <h4>Item Detail</h4>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mini Wear</Accordion.Header>
            <Accordion.Body>
              {orderdetails?.clothtype_ids &&
                orderdetails?.clothtype_ids.map((item) => (
                  <div className="cart-item">
                    <div className="d-flex justify-content-between">
                      <h5>{item.name}</h5>
                      <h5>N{item.price}</h5>
                    </div>
                    <p>{`2 x N${item?.price} / per piece`}</p>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="order-header">
          <FaMoneyCheckDollar className="green-icon" />
          <h4>Total Price</h4>
        </div>
        <div className="order-field">
          <h3>Sub-total Price</h3>
          <p>N{orderdetails?.subtotal}</p>
        </div>
        <div className="order-field">
          <h3>VAT</h3>
          <p>7.5%</p>
        </div>
        <div className="order-field">
          <h3>Total</h3>
          <p>N{orderdetails?.subtotal}</p>
        </div>
        <div className="progress1">
          {orderStatusArray.map((status, index) => (
            <div className="progress_content" key={index}>
              <div
                className={`progress_circle ${
                  indexFound >= index ? "progress-fill" : null
                }`}
              >
                {indexFound >= index && (
                  <FaCheck className="progress-check" />
                )}
              </div>
              <div
                className={`progress_bar1 ${
                  indexFound >= index ? "progress_bar_active" : null
                }`}
              ></div>
              <p className="status-description">{status}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="review_div">

      <Container>
        <Card className="order_reviewcard">
          <h4 className="review-h4">Customer Reviews</h4>
          <p onClick={reviewToggleFunc} className="review-ptag">
            Write a Review
          </p>
        </Card>
        {togglereview ? (
          <Container className="order_container">
            <p>Write a Review</p>
            <form action="">
              <label className="" htmlFor="">
                Name <br />
                <input
                  type="text"
                  name="name"
                  className="order_review_inpt"
                  placeholder="Enter Your Name"
                  onChange={HandleReview}
                />
              </label>
              <label className="label01" htmlFor="">
                Email <br />
                <input
                  type="text"
                  className="order_review_inpt"
                  placeholder="Email"
                  name="email"
                  onChange={HandleReview}
                />
              </label>
              <label className="label01" htmlFor="">
                Body of review <br />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  className="order_review_textarea"
                  onChange={HandleReview}
                ></textarea>
              </label>
              <div className="review-btn-div">
                <Button variant="secondary" className="review-btn bg-info" onClick={()=>createReview()}>
                  Submit Review
                </Button>{" "}
              </div>
            </form>
          </Container>
        ) : (
          ""
        )}
      </Container>
      </div>
    </div>
  );
}

export default OrderDetailsBody;
