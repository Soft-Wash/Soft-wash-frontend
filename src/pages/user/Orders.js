import Navigation from "../../components/OrdersPage/Navigation";
import UserSidebar from "../../components/OrdersPage/UserSidebar";
import { Container, Row, Col, Nav } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import "../../styles/UserProfile.css";
import { Form } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OrderProp from "../../components/OrdersPage/OrderProp";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";

export default function Orders() {

  const [userOrders,setuserOrders] = useState()
  const [selectedAddressInfo,setSelectedAddressInfo] = useState()
  const[userID,setuserId]=useState()
  const [orderplaced,setorderplaced] = useState()

  useEffect(()=>{
    const customer_id = localStorage.getItem('softwashLoginUser')
    const parsedCustomerData = customer_id ? JSON.parse(customer_id) : null;
   const userId = parsedCustomerData?._id
   setuserId(userId)
   const selectedAddress = localStorage.getItem('selectedAddress');
   const parsedSelectedAddress = selectedAddress ? JSON.parse(selectedAddress) : null;
   setSelectedAddressInfo(parsedSelectedAddress);



    axiosInstance.get(`/order/${userId}/allorders`)
    .then((resp)=> {
      console.log(resp.data)
      setuserOrders(resp.data)
    })

  },[])

  const getPLacedOrder=()=>{
    axiosInstance.get(`/order/${userID}/orderplaced`)
    .then((resp)=> {
      console.log(resp.data)
      setorderplaced(resp.data)
    })
  }

  






  return (
    <>
      <Navigation />
      {/* <UserSidebar /> */}

      <Container className="m-5 ms-5">
        <div className="mx-0 mb-4 w-100 d-flex justify-content-between">
          <div>
            <h4>My Orders</h4>
          </div>
          <div className="h-100 my-auto">
            <input type="text" placeholder="Search" className="p-1 rounded-1 border border-secondary"/>
          </div>
        </div>
        <Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col lg={12} sm={6}>
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
            <Tab.Pane eventKey="first">
              {userOrders && userOrders.map((item)=>(
              <OrderProp 
              id={item._id.substring(0,item._id.length/2)}
              pickup={item.pickuptime}
              address={selectedAddressInfo.FullAddress}
              price={item.subtotal}
              status={item.status}
              />
              ))}

            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {userOrders&&userOrders.map((item)=>(
              <OrderProp
              id={item._id.substring(0,item._id.length/2)}
              pickup={item.pickuptime}
              address={selectedAddressInfo.FullAddress}
              price={item.subtotal}
              status={item.status}
 />
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
    </>
  );
}
