import { Col, Row } from "react-bootstrap";
import img1 from "../../assets/washman-pic.jpg";

export default function WashmanProp(props) {
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
        <div className="text-left  fw-semibold text-secondary text-start text-break px-0 lh-1"
        style={{ fontSize: "15px", width:"12rem" }}>
          <small className="text-lighter lh-1 my-auto">{props.name || "Dambola Segun (Stain spec.)"}</small>
        </div>
        <Col
          lg={3}
          className={` badge ${
            props.status == "free"
              ? "bg-success-subtle text-success"
              : "bg-danger-subtle text-danger"
          } my-1 `}
        >
          <small className="" style={{ width: "20px", overflow: "hidden" }}>
            {props.status || "free"}
          </small>
        </Col>
      </div>
    </>
  );
}
