import { getOuterBindingIdentifiers } from "@babel/types";
import img1 from "../../assets/images/bovi.jpeg";
import img2 from "../../assets/washman-pic.jpg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AnAppointment from "./AppointmentDashProp";
import WashmanProp from "./WashmanProp";

export default function DashInfo() {
  const [dayOrderCount, setDayOrderCount] = useState(0);
  const [dayOrders, setDayOrders] = useState([]);
  const [washmen, setWashmen] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [pendingPaymentsCount, setPendingPaymentsCount] = useState(0);
  // const [allWashmen, setAllWashmen] = useState([
  //   {
  //     task: "free",
  //     _id: "655e49bad160aea8372bde1d",
  //     fullName: "emmanuel fakaa",
  //     email: "fakaashagbaor@gmail.com",
  //     password: "$2a$12$I0yZq2Cvyi/Wqp/DpfGUAuqXKopZycFFmJC9O7m5dtgoJqWM67XzC",
  //   },
  //   {
  //     task: "free",
  //     _id: "655f441ab91ae3b48248ee3b",
  //     fullName: "shegun dambola",
  //     email: "fakaashagbaor2@gmail.com",
  //     password: "$2a$12$aSetUkxMFo5jqqD49VYH0u7t0lWDcktEUKsQhKf.MZLlAhnUeU2km",
  //   },
  //   {
  //     task: "free",
  //     _id: "65606acde74306759caae67b",
  //     fullName: "Gerald Fakaa",
  //     email: "theboyfakaa@gmail.com",
  //     password: "$2a$12$WAr3XLeanz6oeSBkzD5oMeBSKZZmZOcRHHhZhxxZeth7JR1LI.Gjm",
  //   },
  //   {
  //     _id: "6569edd3abca2b034bf71180",
  //     fullName: "Jerry Peter",
  //     email: "jp@gmail.com",
  //     password: "$2a$12$lmlJqINTLg3dnsZ5hGP2XeDNrnHN.Kz0LL6L.n7JHuu.7gM2kQkoS",
  //     age: 28,
  //   },
  //   {
  //     _id: "656b07aa97952ceb72ca7a52",
  //     fullName: "Embabs",
  //     email: "emixwrld@gmail.com",
  //     password: "$2a$12$sq5VeaQhW94nLHgAmP0OLOc9gbVaee8Xq/03Wf6MW/dAYpvgpac1K",
  //     branch: "655debd5ec7b0b6e0f591bf9",
  //   },
  //   {
  //     _id: "659d575fb0c17d76a2d9b669",
  //     fullName: "Joel Obi",
  //     email: "joelobi@gmail.com",
  //     password: "$2a$12$2vKDwbCQUjLWIxk1iuLaIOY4E8fRtr3Gwj/H6h/XROpNnq2fd7rl.",
  //     branch: "655debc4ec7b0b6e0f591bf7",
  //   },
  // ]);
  const [loading, setLoading] = useState(true);

  const getOrders = async () => {
    try {
      let resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/order/day`);
    // console.log(resp)
    setDayOrderCount(resp.data.length);
    setDayOrders(resp.data);
    setLoading(false)
    } catch (error) {
      console.log(error)
    }
  };

  const getPendingPayments = async () => {
    let resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/order/day/pending-payments`
    );
    setPendingPaymentsCount(resp.data.length);
    setPendingPayments(resp.data);
  };

  const AllWashmen = async () => {
    try {
      let resp = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/employees/655e0053e7d633fca7e7f255/employee`
      );
      setWashmen(resp.data);
      console.log(resp.data)
      // this.setAllWashmen({
      //   allWashmen: resp.data
      // }, () => {
      //   console.log(this.state.allWashmen)
      // })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
    getPendingPayments();
    AllWashmen();
  }, []);

  return (
    // <>
    <div className="w-100 bg-secondary-subtle px-3">
      <h3 className="text-black fs-5 fw-semibold w-100  my-3">Welcome</h3>

      <Row className="px-3 mb-3 gap-3">
        <Col lg={7} className=" border rounded-4 bg-white pb-2">
          <Row className=" pt-2 pb-1 fw-semibold">
            <small>Orders Overview</small>
          </Row>
          <Row className="px-3 ">
            <Col className="text-center">
              <h2 className="text-info">{dayOrderCount}</h2>{" "}
              <small className="fw-medium">Total</small>
            </Col>
            <Col className="text-center">
              <h2 className="text-success">40</h2>{" "}
              <small className="fw-medium">Confirmed</small>
            </Col>
            <Col className="text-center">
              <h2 className="text-warning">40</h2>{" "}
              <small className="fw-medium">Pending</small>
            </Col>
            <Col className="text-center">
              <h2 className="text-danger">6</h2>{" "}
              <small className="fw-semibold">Rejected</small>
            </Col>
          </Row>
        </Col>
        <Col className=" border rounded-4 bg-white pb-2">
          <Row className=" pt-2 pb-1 fw-semibold">
            <small>Payments Overview</small>
          </Row>
          <Row className="px-3 d-flex justify-content-evenly">
            <Col className="text-center">
              <h2 className="text-success">30</h2> <small>Accepted</small>
            </Col>
            <Col className="text-center">
              <h2 className="text-warning">{pendingPaymentsCount}</h2>{" "}
              <small>Pending</small>
            </Col>
            <Col className="text-center">
              <h2 className="text-danger">5</h2> <small>Rejected</small>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        className="px-3 justify-content-between gap-3 mb-1"
        style={{ height: "60vh" }}
      >
        <Col className="border bg-white rounded-4 overflow-y-scroll">
          <Row
            className=" pt-2 pb-2 fw-bold justify-content-between"
            style={{ fontSize: "13px" }}
          >
            <Col lg={8} md={8} sm={8}>
              <small>Today's Orders</small>
            </Col>
            <Col className="text-end">
              <small>
                <a
                  href="#"
                  className=" link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  See All
                </a>
              </small>
            </Col>
          </Row>
          {loading ? (
            <div className="w-100 h-100 d-flex justify-content-center">
              <div className="d-flex flex-column m-auto">
                <Spinner
                  className="m-auto"
                  animation="grow"
                  variant="primary"
                />
                <p className=" m-auto">No orders yet!</p>
              </div>
            </div>
          ) : (
            dayOrders &&
            dayOrders.map((order, index) => (
              <AnAppointment
                key={index}
                time={order.pickuptime}
                name={order.customer_id}
                status={order.status}
              />
            ))
          )}
        </Col>

        <Col className="border bg-white rounded-4 " lg={5}></Col>

        <Col className="border bg-white rounded-4 overflow-y-scroll">
          <Row className=" pt-2 pb-2 fw-bold justify-content-between">
            <Col
              lg={11}
              md={11}
              sm={11}
              style={{ fontSize: "13px" }}
              className="pb-3"
            >
              <small className="text-success">Available Washmen</small>
              <small> (Open to Orders)</small>
            </Col>
          </Row>

          {
            washmen &&
            washmen.length > 0 ? (
              washmen.map((washman, index) => (
                <WashmanProp
                  name={washman.fullName}
                  status={washman.task}
                  key={index}
                />
              ))
            ) : (
              <div className="w-100 h-100 d-flex justify-content-center">
                <div className="d-flex flex-column m-auto">
                  <Spinner
                    className="m-auto"
                    animation="grow"
                    variant="primary"
                  />
                  <p className=" m-auto">Loading!</p>
                </div>
              </div>
            )
          }
        </Col>
      </Row>
    </div>
    // </>
  );
}
