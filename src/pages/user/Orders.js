import Sidebar from "../../components/OrdersPage/Sidebar";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "../../styles/UserProfile.css";
import '../../styles/DashboardContact.css';
import Tab from "react-bootstrap/Tab";
import OrderProp from "../../components/OrdersPage/OrderProp";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import axios from "axios";
import UserSidebarTablet from "../../components/UserSidebarTablet";

export default function Orders() {
  const [userOrders, setuserOrders] = useState();
  const [orderplaced, setorderplaced] = useState();
  const [UserId, setUserId] = useState();
  const [pickUpDateValue, setpickUpDate] = useState();
  const [orderRecieved,setOrderRecieved] = useState()
  const [orderConfirmed,setOrderConfirmed] = useState()


  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    setUserId(userId);

    axiosInstance.get(`/order/${userId._id}/allorders`).then((resp) => {
      // console.log(resp.data);
      setuserOrders(resp.data);
      const pickUpDate = resp.data.schedule_date;
      const latestDate = new Date(pickUpDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const pickUpDateValue = latestDate.toLocaleDateString("en-US", options);
      // console.log(pickUpDateValue);
      setpickUpDate(pickUpDateValue);
    });
  }, []);


  const getPLacedOrder = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/orderstatus/user?id=${userId._id}&status=order placed`)
      .then((resp) => {
        console.log(resp.data);
        setorderplaced(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  };
  

  const getConfirmedOrder = ()=>{
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/orderstatus/user?id=${userId._id}&status=Confirmed`)
      .then((resp) => {
        console.log(resp.data);
        setorderplaced(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  }

  const RecievedOrder = ()=>{
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/orderstatus/user?id=${userId._id}&status=Recieved`)
      .then((resp) => {
        console.log(resp.data);
        setorderplaced(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  }


  const CleaningOrder = ()=>{
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/orderstatus/user?id=${userId._id}&status=Cleaning`)
      .then((resp) => {
        console.log(resp.data);
        setorderplaced(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  }

  const ReadyOrder = ()=>{
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/orderstatus/user?id=${userId._id}&status=Ready`)
      .then((resp) => {
        console.log(resp.data);
        setorderplaced(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  }

  const ShippedOrder = ()=>{
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/orderstatus/user?id=${userId._id}&status=Shipped`)
      .then((resp) => {
        console.log(resp.data);
        setorderplaced(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  }

  return (
    <>
      <div>
        <div>
          <UserSidebarTablet />
        </div>
        <div className="d-flex w-100">
          <div className="user-sidebar-div">
            <Sidebar />
          </div>
          <Container fluid className="myorders-container margin-small-10 w-100">
            <div className="mx-0 mb-4 w-100 d-flex justify-content-between">
              <div>
                <h4>My Orders</h4>
              </div>
              <div className="h-100 my-auto">
                <input
                  type="text"
                  placeholder="Search"
                  className="p-1 rounded-1 border border-secondary"
                />
              </div>
            </div>
            <Row>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first" style={{ borderBottom: "none" }}>
                <Row>
                  <Col lg={12}>
                    <Nav variant="pills" className="flex-row text-black">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="text-black">
                          Show all
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          className="text-black"
                          onClick={()=>getPLacedOrder()}
                        >
                          Order Placed
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="text-black" onClick={()=>getConfirmedOrder()}>
                          Confirmed
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth" className="text-black" onClick={()=>RecievedOrder()}>
                          Received
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth" className="text-black" onClick={()=>CleaningOrder()}>
                          Cleaning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="sixth" className="text-black" onClick={()=>ReadyOrder()}>
                          Ready
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="seventh" className="text-black" onClick={()=>ShippedOrder()}>
                          Shipped
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
                <Row style={{ border: "none" }}>
                  <Tab.Content style={{border:"none"}}>
                    <Tab.Pane eventKey="first" style={{ border: "none" }}>
                      {userOrders &&
                        userOrders.map((item) => (
                          <OrderProp
                            id={item._id}
                            pickup={item.pickuptime}
                            address={item.deliveryAddress[0].FullAddress}
                            price={item.subtotal}
                            status={item.status}
                            style={{ borderBottom: "none" }}/>
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" style={{ border: "none" }}>
                      {orderplaced &&
                        orderplaced.map((item) => (
                          <OrderProp
                            id={item._id}
                            pickup={item.pickuptime}
                            address={item.deliveryAddress[0].FullAddress}
                            price={item.subtotal}
                            status={item.status}
                          />
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" style={{ border: "none" }}>
                    {orderConfirmed &&
                        orderConfirmed?.map((item) => (
                          <OrderProp
                            id={item._id}
                            pickup={item.pickuptime}
                            address={item.deliveryAddress[0].FullAddress}
                            price={item.subtotal}
                            status={item.status}
                          />
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth" style={{ border: "none" }}></Tab.Pane>
                    <Tab.Pane eventKey="fifth" style={{ border: "none" }}></Tab.Pane>
                    <Tab.Pane eventKey="sixth" style={{ border: "none" }}></Tab.Pane>
                    <Tab.Pane eventKey="seventh" style={{ border: "none" }}>
                    <OrderProp/>
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
