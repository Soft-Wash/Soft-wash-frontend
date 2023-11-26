
import Sidebar from "../../components/OrdersPage/Sidebar";
import { Container, Row, Col, Nav } from "react-bootstrap";

import "../../styles/UserProfile.css";
import Tab from "react-bootstrap/Tab";
import OrderProp from "../../components/OrdersPage/OrderProp";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";

export default function Orders() {
  const [userOrders,setuserOrders] = useState()
  const [orderplaced,setorderplaced] = useState()
  const [UserId,setUserId]= useState()
  const [pickUpDateValue, setpickUpDate]=useState()


  useEffect(()=>{
    const userId = JSON.parse(localStorage.getItem("UserId"))
    setUserId(userId)

    axiosInstance.get(`/order/${userId}/allorders`)
    .then((resp)=> {
      console.log(resp.data)
      setuserOrders(resp.data)
      const pickUpDate = resp.data.schedule_date;
      const latestDate = new Date(pickUpDate);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const pickUpDateValue = latestDate.toLocaleDateString('en-US', options);
      console.log(pickUpDateValue)
      setpickUpDate(pickUpDateValue);
    })

  },[])

  const getPLacedOrder=()=>{
    axiosInstance.get(`/order/${UserId}/orderplaced`)
    .then((resp)=> {
      console.log(resp.data)
      setorderplaced(resp.data)
    })
  }

  console.log(pickUpDateValue)

  
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <Container className="myorders-container m-5 ms-5 vh-100">
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
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col lg={12} >
                  <Nav variant="pills" className="flex-row text-black">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="text-black">Show all</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="text-black" onClick={getPLacedOrder}>Order Placed</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="text-black">Confirmed</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth" className="text-black">Received</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth" className="text-black">Cleaning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth" className="text-black">Ready</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seventh" className="text-black">Shipped</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Tab.Content>
                  <Tab.Pane eventKey="first" style={{border:"none"}}>
                    {userOrders && userOrders.map((item)=>(
                    <OrderProp 
                    id={item._id}
                    pickup={item.pickuptime}
                    address={item.deliveryAddress[0].FullAddress}
                    price={item.subtotal}
                    status={item.status}
                    />
                    ))}

                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {userOrders&&userOrders.map((item)=>(
                    <OrderProp
                    id={item._id}
                    pickup={item.pickuptime}
                    address={item.deliveryAddress[0].FullAddress}
                    price={item.subtotal}
                    status={item.status}/>
                    ))}

                  </Tab.Pane>
                  <Tab.Pane eventKey="third"><OrderProp /></Tab.Pane>
                  <Tab.Pane eventKey="fourth"></Tab.Pane>
                  <Tab.Pane eventKey="fifth"></Tab.Pane>
                  <Tab.Pane eventKey="sixth"></Tab.Pane>
                  <Tab.Pane eventKey="seventh"><OrderProp /></Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </div>
    </>
  );
}
