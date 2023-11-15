import Navigation from "../../components/OrdersPage/Navigation";
import Sidebar from "../../components/OrdersPage/Sidebar";
import { Container, Row, Col, Nav } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import "../../styles/UserProfile.css";
import { Form } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OrderProp from "../../components/OrdersPage/OrderProp";

export default function Orders() {
  return (
    <>
      <Navigation />

      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <Container className="m-5 ms-5">
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
                <Col lg={12} sm={117}>
                  <Nav variant="pills" className="flex-row text-black">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="text-black">
                        Show all
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="text-black">
                        Order Placed
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="text-black">
                        Confirmed
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth" className="text-black">
                        Received
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth" className="text-black">
                        Cleaning
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth" className="text-black">
                        Ready
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seventh" className="text-black">
                        Shipped
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>

              <Row>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <OrderProp />
                    <OrderProp />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <OrderProp />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <OrderProp />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth"></Tab.Pane>
                  <Tab.Pane eventKey="fifth"></Tab.Pane>
                  <Tab.Pane eventKey="sixth"></Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <OrderProp />
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </div>
    </>
  );
}
