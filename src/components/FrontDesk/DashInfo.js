import { Col, Row } from "react-bootstrap";

export default function DashInfo() {
  return (
    // <>
    <div className="w-100 bg-secondary-subtle px-3">
      <h3 className="text-black fs-5 fw-semibold w-100  my-3">Welcome</h3>

      <Row className="px-3 mb-3 gap-3" >
        <Col
        lg={7}
          className=" border rounded-4 bg-white pb-2"
        >
            <Row className=" pt-2 pb-1 fw-semibold"><small>Orders Overview</small></Row>
            <Row className="px-3 ">
                <Col className="text-center"><h2 className="text-info">46</h2> <small className="fw-medium">Total</small></Col>
                <Col className="text-center"><h2 className="text-success">40</h2> <small className="fw-medium">Confirmed</small></Col>
                <Col className="text-center"><h2 className="text-warning">40</h2> <small className="fw-medium">Pending</small></Col>
                <Col className="text-center"><h2 className="text-danger">6</h2> <small className="fw-semibold">Rejected</small></Col>
            </Row>
        </Col>
        <Col
          className=" border rounded-4 bg-white pb-2"
        >
            <Row className=" pt-2 pb-1 fw-semibold"><small>Payments Overview</small></Row>
            <Row className="px-3 d-flex justify-content-evenly">
                <Col className="text-center"><h2 className="text-success">30</h2> <small>Accepted</small></Col>
                <Col className="text-center"><h2 className="text-warning">40</h2> <small>Pending</small></Col>
                <Col className="text-center"><h2 className="text-danger">5</h2> <small>Rejected</small></Col>
            </Row>
        </Col>
      </Row>

      <Row className="px-3 justify-content-between gap-3 mb-2" style={{ height:"60vh" }}>
        <Col className="border bg-white rounded-4">
        <Row className=" pt-2 pb-2 fw-bold justify-content-between" style={{fontSize: "13px"}}>
            <Col lg={8} md={8} sm={8}><small>Today's Orders</small></Col> 
            <Col className="text-success text-end"><small>See All</small></Col>
        </Row>
        <Row className="d-flex justify-content-evenly">
            <Col lg={3} className="my-auto"><small>8:00 AM</small></Col>
            <Col lg={4} className="my-auto"><small>Kingsley Owolabi</small></Col>
            <Col lg={3} className="my-auto"><small>Accepted</small></Col>
        </Row>
        </Col>
        <Col className="border bg-white rounded-4" lg={5}></Col>
        <Col className="border bg-white rounded-4" >
        <Row className=" pt-2 pb-2 fw-bold justify-content-between">
            <Col lg={11} md={11} sm={11} style={{fontSize: "13px"}}><small className="text-success" >Available Washmen</small><small > (Open to Orders)</small></Col> 
            <Col></Col> 
        </Row>
        </Col>
      </Row>
    </div>
    // </>
  );
}
