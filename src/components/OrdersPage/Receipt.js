import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import image from '../../assets/Orders/thanks-icon.png'
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";



export default function Receipt() {
  const options = { day: 'numeric', month: 'long' };
  const [userData,setUserData] = useState()
  const [pickUpDateValue, setpickUpDate]=useState()
  const { orderId } = useParams();
  const navigate = useNavigate()

  function getOrderDetails(){
const orderDetails = JSON.parse(localStorage.getItem('orderDetails'))
    axios
    .get(`${process.env.REACT_APP_BASE_URL}/order/${orderId}/order`)
    .then((resp) => {
      console.log(resp.data);
      setUserData(resp.data)
      const pickUpDate = resp.data.schedule_date;
      const latestDate = new Date(pickUpDate);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const pickUpDateValue = latestDate.toLocaleDateString('en-US', options);
      setpickUpDate(pickUpDateValue);

    });
  }

  useEffect(()=>{
    getOrderDetails()
  },[])

  console.log(userData)

  return (
    <>
    <Row sm={10} xs="auto" className="mx-auto mb-5 shadow col-6 col-md-10 rounded-5 p-4 px-4" >
    <Row className="d-flex justify-content-between gap-3 mb-2">
        <Col lg={3}>
        <h5 classname="text-danger">Order Id</h5>
        </Col>
        <Col lg={3} >
        <p>{userData?._id}</p>
        </Col>
    </Row>
    <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
        <h5>Pickup Date</h5>
        </div>
        <div lg={3} >
        <p>{pickUpDateValue}</p>
        </div>
    </div>
    <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
        <h5>Pickup time</h5>
        </div>
        <div lg={3} >
        <p>{userData?.pickuptime}</p>
        </div>
    </div>
    <div className="d-flex justify-content-between gap-3 ">
        <div lg={3}>
        <h5>Final Amount</h5>
        </div>
        <div lg={3} >
        <p>₦{userData?.subtotal}</p>
        </div>
    </div>
    </Row>
    <Row className="mb-5"></Row>
    </>
  );
}
