import { Col, Row } from "react-bootstrap";
import img1 from "../../assets/washman-pic.jpg";
import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";

export default function SuppliesProp(props) {
  return (
    <>
      <Row className="d-flex my-3 ">
        <Row className="d-flex mb-1 gap-2 ">
          <Col className="rounded-circle my-auto " lg="auto">
            <img
              src={props.image || img1}
              alt={"washman"}
              className="img-fluid rounded-circle my-auto"
              style={{ width: "30px", height: "auto" }}
            />
          </Col>
          <Col
            lg={8}
            className="text-black text-capitalize fs-5 fw-semibold  px-2 lh-1 my-auto "
            style={{ fontSize: "15px", width: "12rem" }}
          >
            <small className=" lh-1 my-auto">
              {props.name || "Dambola Segun (Stain spec.)"}
            </small>
          </Col>
        </Row>

        <Row
          className="d-flex ms-3 justify-content-between align-items-center overflow-x-scroll gap-2 border"
          style={{ height: "auto", width: "96%" }}
        >
          <Col className="d-flex align-items-center align-self-center">
            <div
              className="my-auto border border-danger bg-danger-subtle rounded-circle overflow-hidden pt-1 d-flex flex-column align-items-end"
              style={{ width: "60px", height: "60px" }}
            >
              <small className="text-danger m-auto w-100 d-flex justify-content-center ">
                Bleach remover
              </small>
              <small className={`text-danger m-auto w-100 d-flex justify-content-center`}>
                3
              </small>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
}
