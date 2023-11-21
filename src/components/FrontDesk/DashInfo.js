import { getOuterBindingIdentifiers } from "@babel/types";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AnAppointment from "./AppointmentDashProp";

export default function DashInfo() {
  const [dayOrderCount, setDayOrderCount] = useState(0)
  const [dayOrders, setDayOrders] = useState([])
  const [pendingPayments, setPendingPayments] = useState([])
  const [pendingPaymentsCount, setPendingPaymentsCount] = useState(0)
 
  const getOrders = async () =>{
    let resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/order/day`)
    // console.log(resp)
    setDayOrderCount(resp.data.length)
    setDayOrders(resp.data)
  }

  const getPendingPayments = async() => {
    let resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/order/day/pending-payments`)
    setPendingPaymentsCount(resp.data.length)
    setPendingPayments(resp.data)
  }

  useEffect(()=>{
    getOrders()
    getPendingPayments()
  },[])

  return (
    // <>
    <div className="w-100 bg-secondary-subtle px-3">
      <h3 className="text-black fs-5 fw-semibold w-100  my-3">Welcome</h3>

      <Row className="px-3 mb-3 gap-3" >
        <Col
        lg={7}
          className=" border rounded-4 bg-white pb-2"
        >
            <Row className=" pt-2 pb-1 fw-semibold"><small>Orders Overview</small></Row>
            <Row className="px-3 ">
                <Col className="text-center"><h2 className="text-info">{dayOrderCount}</h2> <small className="fw-medium">Total</small></Col>
                <Col className="text-center"><h2 className="text-success">40</h2> <small className="fw-medium">Confirmed</small></Col>
                <Col className="text-center"><h2 className="text-warning">40</h2> <small className="fw-medium">Pending</small></Col>
                <Col className="text-center"><h2 className="text-danger">6</h2> <small className="fw-semibold">Rejected</small></Col>
            </Row>
        </Col>
        <Col
          className=" border rounded-4 bg-white pb-2"
        >
            <Row className=" pt-2 pb-1 fw-semibold"><small>Payments Overview</small></Row>
            <Row className="px-3 d-flex justify-content-evenly">
                <Col className="text-center"><h2 className="text-success">30</h2> <small>Accepted</small></Col>
                <Col className="text-center"><h2 className="text-warning">{pendingPaymentsCount}</h2> <small>Pending</small></Col>
                <Col className="text-center"><h2 className="text-danger">5</h2> <small>Rejected</small></Col>
            </Row>
        </Col>
      </Row>

      <Row className="px-3 justify-content-between gap-3 mb-1" style={{ height:"60vh" }}>
        <Col className="border bg-white rounded-4 overflow-y-scroll">
        <Row className=" pt-2 pb-2 fw-bold justify-content-between" style={{fontSize: "13px"}}>
            <Col lg={8} md={8} sm={8}><small>Today's Orders</small></Col> 
            <Col className="text-success text-end"><small>See All</small></Col>
        </Row>
        {
          dayOrders && dayOrders.map((order, index) => <AnAppointment time={order.pickuptime} name={order.customer_id} status={order.status}/>)
        }
        </Col>

        <Col className="border bg-white rounded-4" lg={5}>


        </Col>

        <Col className="border bg-white rounded-4" >
        <Row className=" pt-2 pb-2 fw-bold justify-content-between">
            <Col lg={11} md={11} sm={11} style={{fontSize: "13px"}}><small className="text-success" >Available Washmen</small><small > (Open to Orders)</small></Col> 
            <Col></Col> 
        </Row>
        </Col>
      </Row>
    </div>
    // </>
  );
}
