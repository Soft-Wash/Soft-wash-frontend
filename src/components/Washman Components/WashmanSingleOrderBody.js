import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import "../../styles/Washman Styles/WashmanSingleOrder.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCheck } from "react-icons/fa";

function WashmanSingleOrderBody() {
  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Order Placed");
  const [order, setOrder] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/${_id}/order`)
      .then((resp) => {
        console.log(resp);
        setOrder(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
  }, []);

  const handleButtonClick = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 14.29, 100));
  };

  const handleSeleectChange = async (e) => {
    setSelectedOption(e.target.value);

    if (selectedOption === "Order Placed") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
        })
        .then((resp) => {
          console.log(resp);
        });
    } else if (selectedOption === "Confirmed") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
        })
        .then((resp) => {
          console.log(resp);
        });
    } else if (selectedOption === "Recieved") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
        })
        .then((resp) => {
          console.log(resp);
        });
    } else if (selectedOption === "Cleaning") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
        })
        .then((resp) => {
          console.log(resp);
        });
    } else if (selectedOption === "Ready") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
        })
        .then((resp) => {
          console.log(resp);
        });
    } else if (selectedOption === "Shipped") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
        })
        .then((resp) => {
          console.log(resp);
        });
    } else if (selectedOption === "Delivered") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
        })
        .then((resp) => {
          console.log(resp);
        });
    }
  };

  return (
    <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>ORDER DETAILS</h2>
        </div>
        <div className="washman-single-order-content">
          {order &&
            Object.entries(order).map(([key, value]) =>
              typeof value === "string" ? (
                <div key={key} className="washman-profile-field">
                  <h4>{key}</h4>
                  <h4>{value}</h4>
                </div>
              ) : null
            )}

          <div className="washman-profile-field">
            <h4>Order Status</h4>
            <select onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="Order Placed">ORDER PLACED</option>
              <option value="Confirmed">CONFIRMED</option>
              <option value="Recieved">RECEIVED</option>
              <option value="Cleaning">CLEANING</option>
              <option value="Ready">READY</option>
              <option value="Shipped">SHIPPED</option>
              <option value="Delivered">DELIVERED</option>
            </select>
          </div>
        </div>
        <Button
          className="edit-washman-profile-btn"
          onClick={handleSeleectChange}
        >
          Update Order
        </Button>
        {/* <div className="progressBar  position-relative">
					<Col lg={12} md={6} sm={10} className="text-center">
						<Row classname="w-100 align-centre">
							<Container className="containerOfCircles d-flex gap-5 mt-4 position-absolute">
								<div className="order-progress-circle">
									<Col
										className={`duration-500 border border-4  ${
											progress >= 14.29 ? "border-info" : null
										}  text-center rounded-circle  bg-white size-sm-30px`}
										style={{ height: "50px", width: "50px",  }}
									>
										{progress >= 14.29 && (
											<p className="  fw-semibold fs-4 text-secondary mt-sm">
												<FaCheck className="progress-bar-ckeck" />
											</p>
										)}
									</Col>
									<h6>ORDER PLACED</h6>
								</div>

								<div className="order-progress-circle2">
									<Col
										className={`duration-500 border border-4 ${
											progress > 28.58 ? "border-info" : null
										}  text-center rounded-circle bg-white size-sm-30px`}
										style={{ height: "50px", width: "50px" }}
									>
										{progress >= 28.58 && (
											<p className="  fw-semibold fs-4 text-secondary mt-sm">
												<FaCheck className="progress-bar-ckeck" />
											</p>
										)}
									</Col>
									<h6>CONFIRMED</h6>
								</div>

								<div className="order-progress-circle3">
									<Col
										className={`duration-500 border border-4 ${
											progress > 42.87 ? "border-info" : null
										}  text-center rounded-circle bg-white size-sm-30px`}
										style={{ height: "50px", width: "50px" }}
									>
										{progress >= 42.87 && (
											<p className="  fw-semibold fs-4 text-secondary mt-sm">
												<FaCheck className="progress-bar-ckeck" />
											</p>
										)}
									</Col>
									<h6>RECIEVED</h6>
								</div>

								<div className="order-progress-circle">
									<Col
										className={`duration-500 border border-4 ${
											progress > 57.16 ? "border-info" : null
										}  text-center rounded-circle bg-white size-sm-30px`}
										style={{ height: "50px", width: "50px" }}
									>
										{progress >= 57.16 && (
											<p className="  fw-semibold fs-4 text-secondary mt-sm">
												<FaCheck className="progress-bar-ckeck" />
											</p>
										)}
									</Col>
									<h6>CLEANING</h6>
								</div>

								<div className="order-progress-circle">
									<Col
										className={`duration-500 border border-4 ${
											progress > 71.45 ? "border-info" : null
										}  text-center rounded-circle bg-white size-sm-30px`}
										style={{ height: "50px", width: "50px" }}
									>
										{progress >= 71.45 && (
											<p className="  fw-semibold fs-4 text-secondary mt-sm">
												<FaCheck className="progress-bar-ckeck" />
											</p>
										)}
									</Col>
									<h6>READY</h6>
								</div>

								<div className="order-progress-circle">
									<Col
										className={`duration-500 border border-4 ${
											progress > 85.74 ? "border-info" : null
										}  text-center rounded-circle bg-white size-sm-30px`}
										style={{ height: "50px", width: "50px" }}
									>
										{progress >= 85.74 && (
											<p className="  fw-semibold fs-4 text-secondary mt-sm">
												<FaCheck className="progress-bar-ckeck" />
											</p>
										)}
									</Col>
									<h6>SHIPPED</h6>
								</div>

								<div className="order-progress-circle">
									<Col
										className={`duration-500 border border-4 ${
											progress > 100.03 ? "border-info" : null
										}  text-center rounded-circle bg-white size-sm-30px`}
										style={{ height: "50px", width: "50px" }}
									>
										{progress >= 100.03 && (
											<p className="  fw-semibold fs-4 text-secondary mt-sm">
												<FaCheck className="progress-bar-ckeck" />
											</p>
										)}
									</Col>
									<h6>DELIVERED</h6>
								</div>
							</Container>

							<Col
								className="px-4 position-absolute"
								style={{ top: "50px", zIndex: "3" }}
							>
								<ProgressBar
									now={progress}
									variant="info"
									className=" duration-300"
									style={{ height: "2px" }}
								/>
							</Col>
						</Row>
					</Col>
				</div> */}
        <div className="progress-status-div">
				<Col className="progress-bar-col">
            <ProgressBar now={progress} variant="info" className="progress-bar" />
          </Col>
          <Container className="progress-status-div-container">
            <Row className="progress-status-div-row">
              <div className={`progress-status-div-cirle1 ${progress >= 14.29 ? "border-info" : null}`}>
							<FaCheck className="progress-bar-ckeck" />
							</div>
							<div className={`progress-status-div-cirle2 ${progress >= 28.58 ? "border-info" : null}`}></div>
              <div className={`progress-status-div-cirle3 ${progress >= 42.87 ? "border-info" : null}`}></div>
							<div className={`progress-status-div-cirle4 ${progress >= 57.16 ? "border-info" : null}`}></div>
              <div className={`progress-status-div-cirle5 ${progress >= 71.54 ? "border-info" : null}`}></div>
							<div className={`progress-status-div-cirle6 ${progress >= 85.74 ? "border-info" : null}`}></div>
              <div className={`progress-status-div-cirle7 ${progress >= 100.03 ? "border-info" : null}`}></div>

            </Row>
          </Container>

        </div>
      </div>
      <button className="btn" onClick={() => handleButtonClick()}>
        Next
      </button>
    </div>
  );
}

export default WashmanSingleOrderBody;
