import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import image from '../../assets/Orders/thanks-icon.png'
import { Row,  } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";



export default function Receipt() {
  const options = { day: 'numeric', month: 'long' };
  const [userData,setUserData] = useState()
  const [pickUpDate, setpickUpDate]=useState()

  useEffect(()=>{
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'))
    setUserData(orderDetails)
    const pickUpDate = orderDetails?.schedule_date
    const latestDate = new Date(pickUpDate)
    const pickUpDateValue = latestDate.toLocaleDateString('en-US', options);
    setpickUpDate(pickUpDateValue)
  },[])


  return (
    <>
    <Container className="mx-auto mb-5 shadow w-50 rounded-5 p-4 px-4" >
    <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
        <h5>Order Id</h5>
        </div>
        <div lg={3} >
        <p>{userData?._id}</p>
        </div>
    </div>
    <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
        <h5>Pickup Date</h5>
        </div>
        <div lg={3} >
        <p>{pickUpDate}</p>
        </div>
    </div>
    <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
        <h5>Pickup time</h5>
        </div>
        <div lg={3} >
        <p>18:00 - 21:00</p>
        </div>
    </div>
    <div className="d-flex justify-content-between gap-3 ">
        <div lg={3}>
        <h5>Final Amount</h5>
        </div>
        <div lg={3} >
        <p>₦5,000</p>
        </div>
    </div>
    </Container>
    <Row className="mb-5"></Row>
    </>
  );
}