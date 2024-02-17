import { Col } from "react-bootstrap";
import img1 from "../../assets/washman-pic.jpg";
import { useState } from "react";

export default function WashmanProp(props) {
  // const [assign, setAssign] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleClick = () => {
    props.handleClick(orderId);
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className="rounded-circle my-auto" style={{ width: "30px" }}>
          <img
            src={props.image || img1}
            alt={"washman"}
            className="img-fluid rounded-circle my-auto"
            style={{ width: "30px", height: "auto" }}
          />
        </div>
        <div
          className="text-left text-capitalize fw-semibold text-secondary text-start text-break px-2 me-1 lh-1"
          style={{ fontSize: "15px", width: "12rem" }}
        >
          <small className="text-lighter lh-1 my-auto">
            {props.name || "Dambola Segun (Stain spec.)"}
          </small>
        </div>
        <Col lg={3}>
          <button
            className={` badge border-0 ${
              props.status === "free"
                ? "bg-success-subtle text-success"
                : "bg-warning-subtle text-warning"
            } my-1 `}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <small
              // onClick={handleClick}
              className="my-auto"
              style={{ width: "20px", overflow: "hidden" }}
            >
              {props.status || "free"}
            </small>
          </button>
        </Col>
        <div
          class="modal fade mt-5"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Assign Tasks
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label htmlFor="recipient-name" class="col-form-label">
                      Order ID:
                    </label>
                    <input
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      placeholder="eg: 1234567891011123"
                    />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="message-text" class="col-form-label">
                      Additional Info:
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => handleClick()}
                >
                  Assign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
