import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ShopOrderProp(props) {
  const Navigate = useNavigate();

  function handleSingleOrder(orderId) {
    localStorage.setItem("CartOrderDetailsId", JSON.stringify(orderId));
    Navigate(`/shoporderdetails`);
  }

  return (
    <>
      <Row className="mt-4 px-5 py-4 border border-1 shadow-sm rounded-4" style={{borderBottom:"none"}}>
        <Col lg={3} md={4} sm={6}>
          <Row className="mb-1 fw-bold fs-6">Order Id</Row>
          <Row
            className="text-secondary fw-normal fs-6 text-break "
            style={{ width: "6rem" }}
          >
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

        <Col lg={1} md={3} sm={6} className="h-100 w-full text-right">
          <Row className="mb-3"></Row>
          <Button
            className="mb-1 fs-6 fw-normal my-auto  btn btn-secondary p-0 m-0  h-50  px-2 "
            onClick={() => handleSingleOrder(props.id)}
          >
            View
          </Button>
        </Col>
      </Row>
    </>
  );
}
