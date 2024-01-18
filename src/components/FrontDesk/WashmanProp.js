import { Col, Row } from "react-bootstrap";
import img1 from "../../assets/washman-pic.jpg";

export default function WashmanProp(props) {

  const handleSubmit = () => {

  }

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className="rounded-circle my-auto"
        style={{width:"30px"}}>
          <img
            src={props.image || img1}
            alt={"washman user"}
            className="img-fluid rounded-circle my-auto"
            style={{ width: "30px", height: "auto" }}
          />
        </div>
        <div className="text-left text-capitalize fw-semibold text-secondary text-start text-break px-2 me-1 lh-1"
        style={{ fontSize: "15px", width:"12rem" }}>
          <small className="text-lighter lh-1 my-auto">{props.name || "Dambola Segun (Stain spec.)"}</small>
        </div>
        <Col
          lg={3}
          className={` badge ${
            props.status == "free"
              ? "bg-success-subtle text-success"
              : "bg-warning-subtle text-warning"
          } my-1 `}
        >
          <small className="my-auto" style={{ width: "20px", overflow: "hidden" }}>
            {props.status || "free"}
          </small>
        </Col>

        <Row className="position-absolute bg-secondary opacity-25 top-0 start-0" style={{height:"100dvh", width:"100dvw"}}>
          <div className="m-auto w-25 h-25 bg-white rounded ">
            <h4 className="w-100 mx-auto ">Assign Task</h4>
            <form onSubmit={(e) => handleSubmit(e.target)} className="h-75 d-flex flex-column justify-content-evenly">
              <input type="text" placeholder="Task Id"/>
              <button className="btn btn-md btn-outline-primary rounded">Assign</button>
            </form>
          </div>
        </Row>
      </div>
    </>
  );
}
