import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function OrderProp(props) {
  const Navigate = useNavigate();

    function handleSingleOrder(orderId){
localStorage.setItem("OrderDetailsId",JSON.stringify(orderId))
Navigate(`/order-details`)
    }

  return (
    <>
      <Row className="mt-4 px-5 py-4 shadow-sm rounded-4">
        <Col lg={2} md={4} sm={6}>
          <Row className="mb-1 fw-bold fs-6">Order Id</Row>
          <Row className="text-secondary fw-normal fs-6">
            {props.id || "ORDA73FA"}
          </Row>
        </Col>
        <Col lg={2} md={4} sm={6}>
          <Row className="mb-1 fw-bold fs-6">Pickup Time</Row>
          <Row className="text-secondary fw-normal fs-6">
            {props.pickup || "06 Nov, 08:00 - 10:00"}
          </Row>
        </Col>
        <Col lg={2} md={4} sm={6}>
          <Row className="mb-1 fw-bold fs-6">Address</Row>
          <Row className="text-secondary fw-normal fs-6">
            {props.address || "plot Add, Full street, code address."}
          </Row>
        </Col>
        <Col lg={2} md={4} sm={6}>
          <Row className="mb-1 fw-bold fs-6">Price</Row>
          <Row className="text-secondary fw-normal fs-6">
            {props.price || "₦5,000"}
          </Row>
        </Col>
        <Col lg={2} md={4} sm={6}>
          <Row className="mb-1 fw-bold fs-6">Status</Row>
          <Row className="text-secondary fw-normal fs-6">
            {props.status || "Order Placed"}
          </Row>
        </Col>

          <Col lg={2} md={4} sm={6} className="h-100">
            <Row className="mb-3"></Row>
            <Button className="mb-1 fs-6 fw-normal my-auto bg-transparent p-0 m-0 text-secondary h-50 border-secondary px-2 " onClick={()=>handleSingleOrder(props.id)}>View</Button>
          </Col>
        </Row>
      {/* </Container> */}
    </>
  );
}
