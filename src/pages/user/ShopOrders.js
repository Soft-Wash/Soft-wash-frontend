import Sidebar from "../../components/OrdersPage/Sidebar";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "../../styles/UserProfile.css";
import "../../styles/DashboardContact.css";
import Tab from "react-bootstrap/Tab";
import ShopOrderProp from "../../components/OrdersPage/ShopOrderProp";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import axios from "axios";
import UserSidebarTablet from "../../components/UserSidebarTablet";

export default function ShopOrders() {
  const [userOrders, setuserOrders] = useState();
  const [orders, setOrders] = useState();
  const [UserId, setUserId] = useState();
  const [pickUpDateValue, setpickUpDate] = useState();


  const showAll = ()=>{
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axiosInstance.get(`/cartorder/${userId._id}/allorders`).then((resp) => {
      setOrders(resp.data);
      console.log(resp.data)
      const pickUpDate = resp.data.schedule_date;
      const latestDate = new Date(pickUpDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const pickUpDateValue = latestDate.toLocaleDateString("en-US", options);
      setpickUpDate(pickUpDateValue);
    });
  }

  const getPLacedOrder = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    const status = "order placed"
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/cartorder/userorders?customer_id=${userId._id}&status=${status}`
      )
      .then((resp) => {
        setOrders(resp.data);
        console.log(resp.data)
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  };

  const getConfirmedOrder = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/cartorder/userorders?customer_id=${userId._id}&status=Confirmed`
      )
      .then((resp) => {
        setOrders(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  };


  const ShippedOrder = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/cartorder/userorders?customer_id=${userId._id}&status=Shipped`
      )
      .then((resp) => {
        setOrders(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching placed orders:", error);
      });
  };

  useEffect(() => {
    showAll()
  }, []);

  return (
    <>
      <div>
        <div>
          <UserSidebarTablet />
        </div>
        <div className="d-flex">
          <div className="user-sidebar-div">
            <Sidebar />
          </div>
          <Container className="myorders-container">
            <div className="mx-0 mb-4 w-75 d-flex justify-content-between">
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
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="first"
                style={{ borderBottom: "none" }}
              >
                <Row>
                  <Col lg={12}>
                    <Nav variant="pills" className="flex-row text-black">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="text-black" onClick={()=> showAll()}>
                          Show all
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          className="text-black"
                          onClick={() => getPLacedOrder()}
                        >
                          Order Placed
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="third"
                          className="text-black"
                          onClick={() => getConfirmedOrder()}
                        >
                          Confirmed
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="seventh"
                          className="text-black"
                          onClick={() => ShippedOrder()}
                        >
                          Shipped
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
                <Row style={{ border: "none" }} className="text-center">
                  <Tab.Content style={{ border: "none" }}>
                    <Tab.Pane eventKey="first" style={{ border: "none" }}>
                      {orders?.length > 0 ? (
                        orders.map((item) => (
                          <ShopOrderProp
                            id={item?._id}
                            pickup={'3-4 days'}
                            address={item?.delivery_address}
                            price={item?.total}
                            status={item?.status}
                          />
                        ))
                      ) : (
                        <p classNamer="text-center fw-bold">
                          No Data Available
                        </p>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" style={{ border: "none" }}>
                      {orders?.length > 0 ? (
                        orders.map((item) => (
                          <ShopOrderProp
                            id={item?._id}
                            pickup={'3-4 days'}
                            address={item?.delivery_address}
                            price={item?.total}
                            status={item?.status}
                          />
                        ))
                      ) : (
                        <p classNamer="text-center fw-bold">
                          No Data Available
                        </p>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" style={{ border: "none" }}>
                      {orders?.length > 0 ? (
                        orders.map((item) => (
                          <ShopOrderProp
                            id={item?._id}
                            pickup={'3-4 days'}
                            address={item?.delivery_address}
                            price={item?.total}
                            status={item?.status}
                          />
                        ))
                      ) : (
                        <p classNamer="text-center fw-bold">
                          No Data Available
                        </p>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth" style={{ border: "none" }}>
                      {orders?.length > 0 ? (
                        orders.map((item) => (
                          <ShopOrderProp
                            id={item?._id}
                            pickup={'3-4 days'}
                            address={item?.delivery_address}
                            price={item?.total}
                            status={item?.status}
                          />
                        ))
                      ) : (
                        <p classNamer="text-center fw-bold mt-5">
                          No Data Available
                        </p>
                      )}
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
