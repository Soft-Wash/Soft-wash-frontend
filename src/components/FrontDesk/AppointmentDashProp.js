import { Col, Row } from "react-bootstrap";

export default function AnAppointment(props) {
  return (
    <>
      <Row className="d-flex justify-content-evenly my-3 px-2">
        <Col
          lg={4}
          className="my-auto fw-semibold text-secondary text-start mt-0 ps-0"
        >
          <small>{props.time || "8:00 AM"}</small>
        </Col>
        <Col
          lg={5}
          className="my-auto fw-semibold text-secondary text-start text-break px-0"
          style={{ fontSize: "15px" , width:"5rem"}}
        >
          <small>{props.name || "Kingsley Owolabi"}</small>
        </Col>
        <Col
          lg={3}
          className="my-auto badge bg-success-subtle text-success mt-2 "
        >
          <small style={{width:"20px", overflow:"hidden"}}>{props.status || "Accepted"}</small>
        </Col>
        </Row>
    </>
  );
}
