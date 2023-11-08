import "../../styles/Address.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import mapSample from "../../assets/AddressPage/map-sample.png";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

function AddressInfo() {
  const [clicked, setClicked] = useState(false)
  return (
    <Container>
      <Row className="justify-content-between">
        <Col lg={7} md={12} sm={12}>
          <div className="w-100 border border-2 shadow-sm rounded py-4 px-3">
            <h4 className="text-primary mb-3 fw-semibold ps-2 text-capitalize">Choose your address</h4>

            <div className={`w-100 d-flex justify-content-between gap-3 shadow-sm rounded py-4 mx-auto mx-0 ps-4 ${clicked ? "border bg-primary-subtle  shadow-sm border border-primary border-2 " : null}`} style={{width:"90%"}}>
            <Form.Check type="radio" aria-label="radio 1" onClick={() => setClicked(true)} />
            <Row className="w-100">
              <p className="w-100 text-black fs-5 fw-semibold my-auto ">No. 234, Whyoming Street, Solid Estate, Bay Area, Nigeria</p>
            </Row>
            <BsFillTrashFill  className="me-2 p-1 h-100 my-auto  border border-info rounded-circle text-info" style={{width:"30px", heigth:"auto"}}/>
            </div>
          </div>
          <Row className="w-100 text-center my-4">
            <h3>Or</h3>
          </Row>
          <Row className="border border-2 shadow-sm rounded py-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Add Address</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Enter Contact Number"
                        aria-label="Enter Contact Number"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Enter Full Address"
                        aria-label="Enter Full Address"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Row>

                  <Row>
                    <h5 className="text-capitalize">Pin your location</h5>
                    <p>
                      Note: If your address not found on map then search
                      landmark location and drag drop the pin on your location
                    </p>
                  </Row>

                  <Row>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search Address or Landmark location"
                        aria-label="Search Address or Landmark location"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <img src={mapSample} alt="maps" />
                  </Row>
                  <Row className="d-flex">
                    <h5>Address Type</h5>
                    <Row>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1" />
                      <Form.Label>Home</Form.Label>
                    </Form.Group>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1" />
                      <Form.Label>Work</Form.Label>
                    </Form.Group>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1" />
                      <Form.Label>Other</Form.Label>
                    </Form.Group>
                    </Row>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>

        <Col lg={4} md={12} sm={12} className="border border-2 shadow-sm pb-3 mt-3">
          <div className="d-flex justify-content-between  mt-3 mx-auto">
              <h4 className="text-primary my-auto col-lg-6">Selected Items</h4>
              <Button variant="primary" className="w-25 my-auto  col-lg-3">
                Edit
              </Button>
            {/* </Col> */}
          </div>
          <hr />
          <h5 className="text-capitalize ms-1">dry wash</h5>
          <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Mens Wear</Accordion.Header>
                        <Accordion.Body>
                            <div className="cart-item">
                                <div className="d-flex justify-content-between">
                                    <h6>Tie</h6>
                                    <h5>N4,000</h5>
                                </div>
                                <p>2 x N2,000 / per piece</p>
                            </div>
                            <div className="cart-item">
                                <div className="d-flex justify-content-between">
                                    <h5>T-Shirt</h5>
                                    <h5>N12,500</h5>
                                </div>
                                <p>5 x N2,500 / per piece</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>      
                </Accordion>
        </Col>
      </Row>

      <Container className="d-flex justify-content-center w-100 text-center my-5">
        <Col lg={4} md={5} sm={5}>
        <Button  variant="outline-primary" className="me-auto w-75 text-center">Prev</Button>
        </Col>
        <Col lg={4} md={5} sm={5}>
        <Button variant="primary" className="me-auto w-75 text-center">Next</Button></Col>
      </Container>

    </Container>
  );
}

export default AddressInfo;
