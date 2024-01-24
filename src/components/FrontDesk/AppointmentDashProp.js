import { Col, Row } from "react-bootstrap";

export default function AnAppointment(props) {
  return (
    <>
      <Row className="d-flex justify-content-between my-3 px-2">
        <Col
          lg={4}
          className="my-auto fw-semibold text-secondary text-start mt-0 ps-0"
        >
          <small>{props.time || "8:00 AM"}</small>
        </Col>
        <Col
          lg={5}
          className="my-auto fw-semibold text-secondary text-start text-break px-0 hover:underline"
          style={{ fontSize: "15px" , width:"6rem"}}
        >
          <small>{props.name || "Kingsley Owolabi"}</small>
        </Col>
        <Col
          lg={3}
          className={`my-auto badge ${props.status == "order placed" ? "bg-success-subtle text-success": props.status == "pending" ? "bg-warning-subtle text-warning" : "bg-danger-subtle text-danger"} mt-2 `}        >
          <small style={{width:"20px", overflow:"hidden"}}>{props.status || "Loading"}</small>
        </Col>
        </Row>
    </>
  );
}
